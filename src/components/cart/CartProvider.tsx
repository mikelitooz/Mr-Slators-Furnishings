"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Product } from "@/data/ecommerce";
import { createCart, getCart, addToCart as shopifyAddToCart, updateCartLine as shopifyUpdateCartLine, removeCartLine as shopifyRemoveCartLine } from "@/lib/shopify-cart";

export type ShopifyCartLine = {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    product: {
      handle: string;
      title: string;
      images: { edges: { node: { url: string } }[] };
      priceRange: { minVariantPrice: { amount: string } };
    };
  };
};

type ToastState = {
  message: string;
  visible: boolean;
};

type CartContextValue = {
  cartId: string | null;
  checkoutUrl: string | null;
  lines: ShopifyCartLine[];
  isCartOpen: boolean;
  isUpdating: boolean;
  addToCart: (product: Product, quantity?: number) => Promise<void>;
  removeFromCart: (lineId: string) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: number;
  subtotal: number;
  toast: ToastState;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [lines, setLines] = useState<ShopifyCartLine[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [toast, setToast] = useState<ToastState>({ message: "", visible: false });
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  const showToast = useCallback((message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ message, visible: true });
    toastTimer.current = setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }));
    }, 2500);
  }, []);

  // Initialize cart from localStorage
  useEffect(() => {
    async function initCart() {
      const storedCartId = localStorage.getItem("shopify_cart_id");
      if (storedCartId) {
        const cart = await getCart(storedCartId);
        if (cart) {
          setCartId(cart.id);
          setCheckoutUrl(cart.checkoutUrl);
          setLines(cart.lines.edges.map((e: any) => e.node));
          return;
        }
      }
      // Create new cart if none exists or invalid
      const newCart = await createCart();
      if (newCart) {
        localStorage.setItem("shopify_cart_id", newCart.id);
        setCartId(newCart.id);
        setCheckoutUrl(newCart.checkoutUrl);
        setLines([]);
      }
    }
    initCart();
  }, []);

  const addToCart = useCallback(
    async (product: Product, quantity = 1) => {
      if (!cartId || !product.variantId) return;
      setIsUpdating(true);
      
      const updatedCart = await shopifyAddToCart(cartId, product.variantId, quantity);
      
      if (updatedCart) {
        setLines(updatedCart.lines.edges.map((e: any) => e.node));
        setCheckoutUrl(updatedCart.checkoutUrl);
        setIsCartOpen(true);
        showToast(`${product.name} added to basket`);
      } else {
        // Fallback for mock/custom variant IDs
        const mockLineId = `mock-line-${product.variantId}`;
        setLines(prevLines => {
          const existingLineIdx = prevLines.findIndex(l => l.merchandise.id === product.variantId);
          if (existingLineIdx > -1) {
            const newLines = [...prevLines];
            newLines[existingLineIdx] = {
              ...newLines[existingLineIdx],
              quantity: newLines[existingLineIdx].quantity + quantity
            };
            return newLines;
          } else {
            const newLine: ShopifyCartLine = {
              id: mockLineId,
              quantity: quantity,
              merchandise: {
                id: product.variantId!,
                product: {
                  handle: product.slug,
                  title: product.name,
                  images: { edges: [{ node: { url: product.images[0] } }] },
                  priceRange: { minVariantPrice: { amount: product.price.toString() } }
                }
              }
            };
            return [...prevLines, newLine];
          }
        });
        setIsCartOpen(true);
        showToast(`${product.name} added to basket`);
      }
      setIsUpdating(false);
    },
    [cartId, showToast]
  );

  const removeFromCart = useCallback(async (lineId: string) => {
    if (!cartId) return;
    setIsUpdating(true);
    if (lineId.startsWith("mock-line-")) {
      setLines(prev => prev.filter(l => l.id !== lineId));
    } else {
      const updatedCart = await shopifyRemoveCartLine(cartId, lineId);
      if (updatedCart) {
        setLines(updatedCart.lines.edges.map((e: any) => e.node));
        setCheckoutUrl(updatedCart.checkoutUrl);
      }
    }
    setIsUpdating(false);
  }, [cartId]);

  const updateQuantity = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cartId) return;
      if (quantity <= 0) {
        return removeFromCart(lineId);
      }
      setIsUpdating(true);
      if (lineId.startsWith("mock-line-")) {
        setLines(prev => prev.map(l => l.id === lineId ? { ...l, quantity } : l));
      } else {
        const updatedCart = await shopifyUpdateCartLine(cartId, lineId, quantity);
        if (updatedCart) {
          setLines(updatedCart.lines.edges.map((e: any) => e.node));
          setCheckoutUrl(updatedCart.checkoutUrl);
        }
      }
      setIsUpdating(false);
    },
    [cartId, removeFromCart]
  );

  const subtotal = lines.reduce((total, line) => {
    return total + parseFloat(line.merchandise.product.priceRange.minVariantPrice.amount) * line.quantity;
  }, 0);

  const totalItems = lines.reduce((total, line) => total + line.quantity, 0);

  const value: CartContextValue = {
    cartId,
    checkoutUrl,
    lines,
    isCartOpen,
    isUpdating,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart: () => setLines([]),
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
    totalItems,
    subtotal,
    toast,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
