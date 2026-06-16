export type Category = {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
};

export type ProductConfig = {
  name: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  variantId: string;
  dimensions?: string;
};

export type FabricOption = {
  name: string;
  hex: string;
};

export type FeetOption = {
  name: string;
  description: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductMaterial = {
  label: string;
  value: string;
};

export type ProductReview = {
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  shortDescription: string;
  description: string;
  dimensions: string;
  materials: string | ProductMaterial[];
  delivery: string;
  images: string[];
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  offer?: boolean;
  room: "Living Room" | "Bedroom" | "Dining Room" | "Home Office" | "Bathroom";
  variantId?: string;
  brand?: string;
  sku?: string;
  leadTimeType?: "in_stock" | "made_to_order";
  options?: { name: string; values: string[] }[]; // Deprecated, kept for backward compatibility
  url?: string;
  configurations?: ProductConfig[];
  fabricOptions?: FabricOption[];
  feetOptions?: FeetOption[];
  keyFeatures?: string[];
  specs?: ProductSpec[];
  reviews?: ProductReview[];
};

const media = {
  hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1500&q=85",
  showroom: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1500&q=85",
  bedroom: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1500&q=85",
  shower: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1500&q=85",
  vanity: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1500&q=85",
  carpet: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1500&q=85",
  tap: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1500&q=85",
  towelRail: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1500&q=85",
  dining: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1500&q=85",
  decor: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1500&q=85",
  bath: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1500&q=85",
  tiles: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1500&q=85",
};

export const categories: Category[] = [
  { slug: "beds-bedroom", name: "Beds & Bedroom Furniture", description: "Quality sleigh beds, mattresses, wardrobes and chests of drawers", heroImage: media.bedroom },
  { slug: "sofas-living", name: "Sofas & Seating", description: "Comfortable fabric sofas, suites and supportive high-seat armchairs", heroImage: media.shower },
  { slug: "dining-tables", name: "Dining & Occasional", description: "Solid pine and oak dining tables, nests of tables and rustic coffee tables", heroImage: media.dining },
  { slug: "carpets-flooring", name: "Carpets & Flooring", description: "Premium fitted carpets and flooring options for the complete home", heroImage: media.carpet },
];

export const products: Product[] = [
  {
    slug: "super-sleigh-bed-frame",
    name: "Super Sleigh Bed Frame",
    category: "beds-bedroom",
    price: 599,
    compareAtPrice: 799,
    badge: "Custom Made",
    shortDescription: "Luxury plush chesterfield sleigh bed frame available in multiple fabrics.",
    description: "Featuring a deep buttoned Chesterfield headboard and footboard, the Super Sleigh Bed Frame is handmade to order in the UK. Heavy duty solid wooden slats provide fantastic mattress support. Customise in velvet, wool or linen to suit your bedroom style.",
    dimensions: "W 160cm x L 225cm x Headboard H 135cm (Double)",
    materials: [
      { label: "Frame", value: "Solid structural timber frame, hand-assembled and reinforced" },
      { label: "Slats", value: "Solid Scandinavian pine slats" },
      { label: "Fillings", value: "High-density comfort foam padding" }
    ],
    delivery: "Speedy Delivery & Assembly",
    images: [media.bedroom, media.bath],
    featured: true,
    bestSeller: true,
    offer: true,
    room: "Bedroom",
    brand: "Red Rose",
    sku: "RED-SLG-BED",
    leadTimeType: "made_to_order",
    configurations: [
      { name: "Double", price: 599, compareAtPrice: 799, sku: "RED-SLG-DB", variantId: "gid://shopify/ProductVariant/sleigh-db", dimensions: "W 145cm x L 225cm x Headboard H 135cm" },
      { name: "King", price: 679, compareAtPrice: 879, sku: "RED-SLG-KG", variantId: "gid://shopify/ProductVariant/sleigh-kg", dimensions: "W 160cm x L 225cm x Headboard H 135cm" },
      { name: "Super King", price: 749, compareAtPrice: 949, sku: "RED-SLG-SK", variantId: "gid://shopify/ProductVariant/sleigh-sk", dimensions: "W 190cm x L 225cm x Headboard H 135cm" }
    ],
    fabricOptions: [
      { name: "Plush Grey", hex: "#7D7F80" },
      { name: "Royal Blue", hex: "#0B2E59" },
      { name: "Oatmeal", hex: "#E2D5C3" }
    ],
    feetOptions: [
      { name: "Mahogany", description: "Rich Deep Mahogany Finish" },
      { name: "Brushed Chrome", description: "Modern Sleek Chrome Finish" }
    ],
    keyFeatures: [
      "Chesterfield Deep-Buttoned Headboard & Footboard",
      "Heavy-Duty Solid Wood Slats for Maximum Support",
      "Handmade to Order in the UK by Skilled Craftsmen",
      "Choice of Luxurious Upholstery Fabrics"
    ],
    specs: [
      { label: "Mattress Size", value: "Double (4ft 6in) / King (5ft) / Super King (6ft)" },
      { label: "Headboard Height", value: "135cm" },
      { label: "Footboard Height", value: "65cm" },
      { label: "Underbed Clearance", value: "15cm" }
    ],
    reviews: [
      { author: "Sarah G.", location: "Sheffield", rating: 5, date: "2026-04-12", title: "Gorgeous sleigh bed", comment: "The velvet fabric is so soft and the sleigh bed is incredibly sturdy. Great bedroom upgrade." },
      { author: "James M.", location: "Rotherham", rating: 5, date: "2026-05-01", title: "Worth the wait", comment: "Excellent craftsmanship, took about 6 weeks but worth the wait." }
    ]
  },
  {
    slug: "high-seat-armchair",
    name: "Traditional High-Seat Armchair",
    category: "sofas-living",
    price: 349,
    compareAtPrice: 449,
    badge: "Best Seller",
    shortDescription: "Traditional high-back supportive chair in premium floral fabric.",
    description: "Designed specifically for ease of sitting and rising, this classic armchair features a firm pocket-sprung seat base and an extra-supportive high backrest. Ideal for reading, relaxing, or enjoying the view. Hardwood frame and legs ensure long-term durability.",
    dimensions: "W 82cm x D 88cm x H 108cm",
    materials: [
      { label: "Frame", value: "Solid beechwood frame with dowelled and glued joints" },
      { label: "Suspension", value: "High tensile steel pocket springs" },
      { label: "Filling", value: "Resilient polyurethane foam wrapped in soft polyester fibre" }
    ],
    delivery: "Speedy Home Delivery",
    images: [media.shower, media.hero],
    featured: true,
    bestSeller: true,
    room: "Living Room",
    brand: "Buoyant Upholstery",
    sku: "BUO-HSA-01",
    variantId: "gid://shopify/ProductVariant/highback-armchair",
    leadTimeType: "in_stock",
    keyFeatures: [
      "High Backrest for Excellent Neck and Lumbar Support",
      "Firm Pocket-Sprung Seat Base to Assist Rising",
      "Traditional Scroll Arm Detail & Elegant Design",
      "Sturdy Hardwood Frame and Legs"
    ],
    specs: [
      { label: "Seat Height", value: "49cm" },
      { label: "Seat Width", value: "51cm" },
      { label: "Seat Depth", value: "52cm" },
      { label: "Backrest Height", value: "65cm" }
    ],
    reviews: [
      { author: "Mary K.", location: "Doncaster", rating: 5, date: "2026-03-20", title: "Perfect for my grandmother", comment: "Very easy to get in and out of. Extremely supportive high back, and the floral pattern matches our wallpaper beautifully." },
      { author: "Edward B.", location: "Rotherham", rating: 4, date: "2026-04-10", title: "Very sturdy", comment: "Speedy delivery from Parkgate. Firm but very comfortable." }
    ]
  },
  {
    slug: "pine-bedroom-wardrobe",
    name: "Solid Pine Bedroom Wardrobe",
    category: "beds-bedroom",
    price: 450,
    compareAtPrice: 550,
    badge: "Solid Wood",
    shortDescription: "Classic double wardrobe crafted from premium solid pine.",
    description: "A beautiful, rustic addition to any bedroom. This solid pine double wardrobe features a full-width hanging rail and a lower storage drawer. Finished with a natural light wax that highlights the beautiful timber grain. Handcrafted to last.",
    dimensions: "W 110cm x D 58cm x H 192cm",
    materials: [
      { label: "Structure", value: "100% Solid Scandinavian Pine" },
      { label: "Backing", value: "Solid tongue & groove pine backing" },
      { label: "Fittings", value: "Premium steel hinges and metal drawer runners" }
    ],
    delivery: "Speedy Delivery - Delivered fully assembled or flat-packed",
    images: [media.vanity, media.bath],
    newArrival: true,
    room: "Bedroom",
    brand: "Homeflair Pine",
    sku: "HFL-PIN-WD",
    variantId: "gid://shopify/ProductVariant/pine-wardrobe",
    leadTimeType: "in_stock",
    keyFeatures: [
      "Crafted Entirely from Solid Scandinavian Pine",
      "Full-Width Solid Wood Hanging Rail",
      "Spacious Lower Drawer on Smooth Metal Runners",
      "Finished with a Protective Natural Beeswax"
    ],
    specs: [
      { label: "Door Count", value: "2 Doors" },
      { label: "Drawer Count", value: "1 Drawer" },
      { label: "Hanging Depth", value: "52cm" },
      { label: "Finish", value: "Natural Honey Wax" }
    ],
    reviews: [
      { author: "Arthur S.", location: "Barnsley", rating: 5, date: "2026-02-18", title: "Fantastic quality wardrobe", comment: "High quality pine wardrobe, arrived fully assembled. Strong construction, nice wood smell." },
      { author: "Helen W.", location: "Rotherham", rating: 5, date: "2026-03-05", title: "Spacious", comment: "Very spacious base drawer, perfect wardrobe for our cottage bedroom." }
    ]
  },
  {
    slug: "classic-pine-dining-set",
    name: "Classic Pine Dining Set",
    category: "dining-tables",
    price: 599,
    compareAtPrice: 799,
    badge: "Value Set",
    shortDescription: "Solid pine rectangular dining table with four matching chairs.",
    description: "The heart of your home. This rectangular solid pine table features sturdy farmhouse legs and a durable lacquered surface. Accompanied by four matching pine spindle-back chairs. Perfectly suits classic and cottage-style interiors.",
    dimensions: "Table: L 150cm x W 90cm x H 75cm",
    materials: [
      { label: "Table Structure", value: "Solid Farmhouse Pine legs and frame" },
      { label: "Chairs", value: "Spindle-back solid pine" },
      { label: "Finish", value: "Heat and water resistant matte lacquer" }
    ],
    delivery: "Speedy Home Delivery",
    images: [media.dining, media.vanity],
    featured: true,
    offer: true,
    room: "Dining Room",
    brand: "Homeflair Country",
    sku: "HFL-PDS-4C",
    leadTimeType: "in_stock",
    configurations: [
      { name: "Table + 4 Chairs", price: 599, compareAtPrice: 799, sku: "HFL-PDS-4C", variantId: "gid://shopify/ProductVariant/din-set-4c", dimensions: "Table: L 150cm x W 90cm x H 75cm" },
      { name: "Table + 6 Chairs", price: 749, compareAtPrice: 949, sku: "HFL-PDS-6C", variantId: "gid://shopify/ProductVariant/din-set-6c", dimensions: "Table: L 180cm x W 95cm x H 75cm" }
    ],
    keyFeatures: [
      "Chunky Solid Pine Table with Farmhouse Legs",
      "Comfortable Spindle-Back Spoke Dining Chairs",
      "Durable Matte Lacquered Easy-Clean Surface",
      "Perfect for Family Dining & Gatherings"
    ],
    specs: [
      { label: "Table Height", value: "75cm" },
      { label: "Chair Count", value: "4 Chairs or 6 Chairs" },
      { label: "Chair Back Height", value: "95cm" }
    ],
    reviews: [
      { author: "Keith D.", location: "Rotherham", rating: 5, date: "2026-05-15", title: "Perfect for family meals", comment: "Table is very solid and easy to wipe clean. Kids use it daily for homework." },
      { author: "Laura T.", location: "Sheffield", rating: 5, date: "2026-05-28", title: "Beautiful set", comment: "Beautiful farmhouse finish, assembly was simple and quick." }
    ]
  },
  {
    slug: "oak-nest-of-tables",
    name: "Solid Oak Nest of Tables",
    category: "dining-tables",
    price: 199,
    compareAtPrice: 249,
    badge: "Nesting",
    shortDescription: "Set of three solid oak nesting tables for versatile living space.",
    description: "This practical nest of three tables fits neatly together when not in use. Handcrafted from premium solid oak with rounded corners and a protective matte lacquer finish. Ideal for placing drinks, lamps, or decorative items next to your sofa.",
    dimensions: "Large: W 52cm x D 36cm x H 48cm",
    materials: [
      { label: "Wood", value: "100% Solid European White Oak" },
      { label: "Joints", value: "Traditional mortise and tenon joints" }
    ],
    delivery: "Standard Home Delivery",
    images: [media.tap, media.towelRail],
    bestSeller: true,
    room: "Living Room",
    brand: "Homeflair Oak",
    sku: "HFL-ONT-N3",
    variantId: "gid://shopify/ProductVariant/oak-nest",
    leadTimeType: "in_stock",
    keyFeatures: [
      "Nesting Trio of Side Tables Saves Space",
      "Constructed from Premium Solid White Oak",
      "Smooth Rounded Corners & Sturdy Legs",
      "Protective Natural Matte Lacquer Coat"
    ],
    specs: [
      { label: "Large Table", value: "W 52cm x D 36cm x H 48cm" },
      { label: "Medium Table", value: "W 41cm x D 31cm x H 38cm" },
      { label: "Small Table", value: "W 30cm x D 26cm x H 28cm" }
    ],
    reviews: [
      { author: "Peter H.", location: "Doncaster", rating: 5, date: "2026-04-02", title: "Very sturdy and clean", comment: "Very sturdy nest of tables. Beautiful grain on the oak tops." },
      { author: "Brenda J.", location: "Rotherham", rating: 4, date: "2026-04-20", title: "Practical buy", comment: "Fits perfectly next to my armchair. Clean, modern look." }
    ]
  },
  {
    slug: "classic-3-seater-sofa",
    name: "Classic 3-Seater Fabric Sofa",
    category: "sofas-living",
    price: 895,
    compareAtPrice: 1095,
    shortDescription: "Spacious fabric sofa suite with deep cushioning and plush armrests.",
    description: "Relax in luxury. Our classic 3-seater sofa is built with a sturdy timber frame, high-density foam cushion cores, and a premium woven fiber outer wrap. Perfect as a central suite piece for your living room.",
    dimensions: "W 210cm x D 95cm x H 90cm",
    materials: [
      { label: "Frame", value: "Hardwood timber frame with reinforced dowelled joints" },
      { label: "Suspension", value: "High tensile steel zigzag spring support" },
      { label: "Cushioning", value: "High resilience foam wrap with soft outer fibre" }
    ],
    delivery: "Speedy Home Delivery - room of choice",
    images: [media.hero, media.shower],
    featured: true,
    room: "Living Room",
    brand: "Buoyant Upholstery",
    sku: "BUO-CL3-SF",
    leadTimeType: "made_to_order",
    configurations: [
      { name: "3-Seater Sofa", price: 895, compareAtPrice: 1095, sku: "BUO-CL3-3S", variantId: "gid://shopify/ProductVariant/cl3-3s", dimensions: "W 210cm x D 95cm x H 90cm" },
      { name: "2-Seater Sofa", price: 795, compareAtPrice: 995, sku: "BUO-CL3-2S", variantId: "gid://shopify/ProductVariant/cl3-2s", dimensions: "W 170cm x D 95cm x H 90cm" }
    ],
    fabricOptions: [
      { name: "Stone Grey", hex: "#999793" },
      { name: "Charcoal", hex: "#2F2F2F" },
      { name: "Oatmeal", hex: "#E2D5C3" }
    ],
    feetOptions: [
      { name: "Beech Legs", description: "Natural Light Beech Finish" },
      { name: "Oak Legs", description: "Classic Warm Oak Finish" }
    ],
    keyFeatures: [
      "Generous High-Density Foam Cushions",
      "Reversible Back Cushions to Extend Longevity",
      "Durable Linen Weave Fabric Construction",
      "Mainland UK White-Glove Professional Setup"
    ],
    specs: [
      { label: "Seat Height", value: "47cm" },
      { label: "Arm Height", value: "62cm" },
      { label: "Suspension", value: "Serpentine zigzag springs" }
    ],
    reviews: [
      { author: "George L.", location: "Barnsley", rating: 5, date: "2026-01-12", title: "Very comfortable", comment: "Comfortable and very neat look. The fabric feels like it will last a very long time." },
      { author: "Linda M.", location: "Rotherham", rating: 5, date: "2026-02-04", title: "Great service", comment: "Excellent delivery service, they brought it inside and assembled the feet." }
    ]
  },
  {
    slug: "royal-velvet-mattress-base",
    name: "Royal Velvet Mattress & Base Set",
    category: "beds-bedroom",
    price: 699,
    compareAtPrice: 899,
    badge: "Special Offer",
    shortDescription: "Orthopedic pocket sprung mattress with premium upholstered base.",
    description: "Get the sleep you deserve. The Royal Velvet set features a 1500 pocket sprung mattress with hand-tufted wool damask cover, providing excellent orthopaedic support. Paired with a matching velvet divan base with two integrated storage drawers.",
    dimensions: "W 150cm x L 200cm x H 65cm (King)",
    materials: [
      { label: "Mattress Core", value: "1500 High-tensile pocket springs" },
      { label: "Comfort Layer", value: "Natural wool and breathable cotton upholstery layers" },
      { label: "Base Structure", value: "Timber frame wrapped in premium soft velvet fabric" }
    ],
    delivery: "Speedy Delivery & Set Up",
    images: [media.bath, media.bedroom],
    offer: true,
    room: "Bedroom",
    brand: "Red Rose",
    sku: "RED-RVM-ST",
    leadTimeType: "in_stock",
    configurations: [
      { name: "Double", price: 599, compareAtPrice: 799, sku: "RED-RVM-DB", variantId: "gid://shopify/ProductVariant/rvm-db", dimensions: "W 135cm x L 190cm x H 65cm" },
      { name: "King", price: 699, compareAtPrice: 899, sku: "RED-RVM-KG", variantId: "gid://shopify/ProductVariant/rvm-kg", dimensions: "W 150cm x L 200cm x H 65cm" }
    ],
    fabricOptions: [
      { name: "Grey Velvet", hex: "#6A6C6E" },
      { name: "Black Velvet", hex: "#1A1A1A" }
    ],
    keyFeatures: [
      "1500 Pocket Springs for Contour and Joint Relief",
      "Two Substantial Underbed Storage Drawers",
      "Hand-Tufted Wool Damask Comfort Cover",
      "Matches Classic & Modern Bedrooms Alike"
    ],
    specs: [
      { label: "Pocket Spring Count", value: "1500 Springs" },
      { label: "Drawer Count", value: "2 Integrated Storage Drawers" },
      { label: "Base Divan Height", value: "40cm" },
      { label: "Mattress Thickness", value: "25cm" }
    ],
    reviews: [
      { author: "Donald R.", location: "Doncaster", rating: 5, date: "2026-05-02", title: "Very comfortable bed", comment: "Haven't slept this well in years. Pocket springs give perfect support and drawers are very handy." },
      { author: "Sarah P.", location: "Sheffield", rating: 5, date: "2026-05-18", title: "Luxurious feel", comment: "Extremely comfortable mattress, divan base velvet looks very rich." }
    ]
  },
  {
    slug: "plush-velvet-accent-chair",
    name: "Plush Velvet Accent Chair",
    category: "sofas-living",
    price: 249,
    compareAtPrice: 329,
    badge: "New Arrival",
    shortDescription: "Elegant scalloped accent chair in emerald velvet with gold legs.",
    description: "Add a touch of sophistication to your corner. This beautiful accent chair features a shell-shaped scalloped backrest, thick foam padding, and steel legs with a premium gold electroplated finish. Upholstered in buttery-soft velvet.",
    dimensions: "W 75cm x D 80cm x H 85cm",
    materials: [
      { label: "Upholstery", value: "Buttery-soft synthetic velvet fabric" },
      { label: "Legs", value: "High strength electroplated stainless steel" },
      { label: "Padding", value: "High resilience memory foam padding" }
    ],
    delivery: "Standard Home Delivery",
    images: [media.decor, media.shower],
    newArrival: true,
    room: "Living Room",
    brand: "Homeflair Design",
    sku: "HFL-PVA-AC",
    variantId: "gid://shopify/ProductVariant/velvet-accent",
    leadTimeType: "in_stock",
    fabricOptions: [
      { name: "Emerald Green", hex: "#0F4733" },
      { name: "Blush Pink", hex: "#E0B0B0" },
      { name: "Mustard Yellow", hex: "#E0B034" }
    ],
    keyFeatures: [
      "Shell-Shaped Elegant Scalloped Backrest",
      "Luxurious Velvet Fabric with Fine Stitching",
      "Glossy Gold Electroplated Steel Legs",
      "Sturdy Construction & Compact Design"
    ],
    specs: [
      { label: "Seat Height", value: "46cm" },
      { label: "Seat Depth", value: "50cm" },
      { label: "Arm Height", value: "60cm" },
      { label: "Max Weight Capacity", value: "120kg" }
    ],
    reviews: [
      { author: "Wendy G.", location: "Rotherham", rating: 5, date: "2026-03-14", title: "Beautiful green chair", comment: "Matches our living room corner beautifully. Green velvet is gorgeous." },
      { author: "Clara F.", location: "Barnsley", rating: 4, date: "2026-04-01", title: "Good quality", comment: "Stunning gold legs, easy assembly. Very comfortable to read on." }
    ]
  },
  {
    slug: "premium-saxony-carpet",
    name: "Premium Saxony Fitted Carpet",
    category: "carpets-flooring",
    price: 29,
    compareAtPrice: 39,
    badge: "Fitted Free",
    shortDescription: "Thick, luxurious deep-pile Saxony carpet including professional fitting.",
    description: "Bring comfort underfoot. Our premium Saxony carpet is stain-resistant, bleach-cleanable, and feels incredibly soft. Price includes professional underlay and fitting by our expert local team in Rotherham. Available in a range of warm greys and cream colors.",
    dimensions: "Sold per square metre (m²)",
    materials: [
      { label: "Fibre Content", value: "100% Polypropylene Stain-Resistant Fibres" },
      { label: "Backing", value: "Heavy-duty action backing (requires underlay)" }
    ],
    delivery: "Professional Home Installation",
    images: [media.carpet, media.tiles],
    featured: true,
    bestSeller: true,
    offer: true,
    room: "Living Room",
    brand: "Homeflair Flooring",
    sku: "HFL-PSX-CP",
    variantId: "gid://shopify/ProductVariant/saxony-carpet",
    leadTimeType: "in_stock",
    keyFeatures: [
      "Extra Soft Luxurious Deep-Pile Saxony Finish",
      "Stain-Resistant & 100% Bleach Cleanable",
      "Includes High-Quality Underlay & Fitting",
      "Fitted by Our Certified Rotherham Teams"
    ],
    specs: [
      { label: "Pile Height", value: "15mm" },
      { label: "Total Thickness", value: "17mm" },
      { label: "Underlay Weight", value: "10mm High Density PU Underlay" },
      { label: "Cleanability", value: "100% Bleach Cleanable" }
    ],
    reviews: [
      { author: "Michael D.", location: "Rotherham", rating: 5, date: "2026-05-10", title: "Excellent job", comment: "Fitting team arrived on time and did an immaculate job. Underlay feels amazing to walk on." },
      { author: "John R.", location: "Barnsley", rating: 5, date: "2026-05-22", title: "Stain resistant", comment: "Excellent value Saxony carpet, stain resistant as promised. Highly recommend." }
    ]
  },
  {
    slug: "rustic-pine-coffee-table",
    name: "Rustic Pine Coffee Table",
    category: "dining-tables",
    price: 189,
    compareAtPrice: 229,
    shortDescription: "Chunky solid pine coffee table with spacious lower shelf.",
    description: "The perfect companion for your sofa. Made from thick, slow-grown pine planks, this coffee table features a handy lower shelf for storing magazines and remote controls. Finished in antique wax to bring out the knots and rustic grain.",
    dimensions: "W 100cm x D 60cm x H 46cm",
    materials: [
      { label: "Timber", value: "Solid slow-grown Scandinavian pine" },
      { label: "Coating", value: "Traditional hand-applied antique beeswax coating" }
    ],
    delivery: "Speedy Home Delivery",
    images: [media.towelRail, media.tap],
    newArrival: true,
    room: "Living Room",
    brand: "Homeflair Pine",
    sku: "HFL-RPC-CT",
    variantId: "gid://shopify/ProductVariant/pine-coffeetable",
    leadTimeType: "in_stock",
    keyFeatures: [
      "Handcrafted from Thick Solid Pine Planks",
      "Substantial Storage Space on Lower Open Shelf",
      "Finished with Traditional Protective Beeswax",
      "Chunky Cottage Style Legs"
    ],
    specs: [
      { label: "Tabletop Thickness", value: "35mm" },
      { label: "Shelf Height Clearance", value: "22cm" },
      { label: "Overall Weight", value: "18kg" }
    ],
    reviews: [
      { author: "Albert F.", location: "Sheffield", rating: 5, date: "2026-03-11", title: "Solid pine table", comment: "Solid wood, rustic and matches my fireplace perfectly." },
      { author: "Patricia K.", location: "Rotherham", rating: 5, date: "2026-04-12", title: "Love the beeswax finish", comment: "Fits perfectly in front of our sofa. Love the wax smell." }
    ]
  },
  {
    slug: "lebus-oscar-3-seater",
    name: "Lebus Oscar 3-Seater Sofa",
    category: "sofas-living",
    price: 899,
    shortDescription: "Elegant UK-crafted sofa featuring high-density foam seating and feather-filled scatter cushions.",
    description: "Upholstered in premium quality fabric with robust hardwood frames, the Lebus Oscar 3-Seater is handmade to order in the UK. Featuring reversible back cushions and scatter cushions for adjustable comfort, complete with solid wooden feet.",
    dimensions: "W 214cm x D 99cm x H 95cm",
    materials: [
      { label: "Frame", value: "Hardwood timber frame, pinned and glued for structural strength" },
      { label: "Suspension", value: "Tempered steel serpentine springs" },
      { label: "Fillings", value: "High-density foam cores with luxury fibre wrap, feather back cushions" }
    ],
    delivery: "Made to order — typically 6–8 weeks, confirmed after order",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1500&q=85"
    ],
    featured: true,
    newArrival: true,
    room: "Living Room",
    brand: "Lebus",
    sku: "LEB-OSC-3S",
    leadTimeType: "made_to_order",
    configurations: [
      { name: "3-Seater Sofa", price: 899, sku: "LEB-OSC-3S", variantId: "gid://shopify/ProductVariant/oscar-3s", dimensions: "W 214cm x D 99cm x H 95cm" },
      { name: "2-Seater Sofa", price: 799, sku: "LEB-OSC-2S", variantId: "gid://shopify/ProductVariant/oscar-2s", dimensions: "W 184cm x D 99cm x H 95cm" },
      { name: "Love Chair", price: 499, sku: "LEB-OSC-LC", variantId: "gid://shopify/ProductVariant/oscar-lc", dimensions: "W 114cm x D 99cm x H 95cm" },
      { name: "Footstool", price: 249, sku: "LEB-OSC-FS", variantId: "gid://shopify/ProductVariant/oscar-fs", dimensions: "W 85cm x D 60cm x H 46cm" }
    ],
    fabricOptions: [
      { name: "Beige", hex: "#E6DEC9" },
      { name: "Charcoal", hex: "#2F2F2F" },
      { name: "Cinnamon", hex: "#8A4A32" },
      { name: "Hunter Green", hex: "#1C352D" },
      { name: "Marine", hex: "#1E3B46" }
    ],
    feetOptions: [
      { name: "Oak", description: "Natural Light Oak Finish" },
      { name: "Mahogany", description: "Rich Deep Mahogany Finish" }
    ],
    keyFeatures: [
      "Made by Lebus Upholstery in the UK",
      "Robust Hardwood Timber Frame",
      "High-Density Comfort Foam Seats",
      "Feather-Filled Scatter Cushions",
      "Reversible Comfort Back Cushions"
    ],
    specs: [
      { label: "Seat Height", value: "49cm" },
      { label: "Arm Height", value: "65cm" },
      { label: "Suspension", value: "Tempered steel serpentine springs" }
    ],
    reviews: [
      { author: "Sarah M.", location: "Rotherham", rating: 5, date: "2026-05-16", title: "Outstanding quality", comment: "Outstanding quality. We ordered the Oscar 3-seater in Hunter Green with Mahogany feet. It arrived right on the 7-week mark. Extremely comfortable!" },
      { author: "David T.", location: "Sheffield", rating: 5, date: "2026-05-24", title: "Test comfort at showroom", comment: "Very friendly family-run store. Visited Parkgate showroom to sit on the Oscar. The sofa looks beautiful in Beige." }
    ]
  }
];

export const promoBanners = [
  "Welcome to Homeflair – Complete Home Furnishings since 1972",
  "Visit our Rotherham showroom: 110-124 Parkgate, S6 3DG",
  "Friendly Home Delivery – our drivers deliver directly to your room of choice",
  "Special Carpet Offers: High quality fitted carpets including professional underlay",
];

export const roomShop = [
  { name: "Living Room", image: media.hero, href: "/shop?category=sofas-living" },
  { name: "Bedroom", image: media.bedroom, href: "/shop?category=beds-bedroom" },
  { name: "Dining & Occasional", image: media.dining, href: "/shop?category=dining-tables" }
];

export function currency(value: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);
}

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return categories.find((category) => category.slug === slug);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return products.find((product) => product.slug === slug);
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  return products.filter((product) => product.category === categorySlug);
}

export async function getRelatedProducts(product: Product): Promise<Product[]> {
  return products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 4);
}
