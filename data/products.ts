export type Category = "sofas" | "beds" | "tables" | "chairs" | "cabinets";

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  featured?: boolean;
  badge?: string;
  images: string[];
  dimensions: string;
  materials: string;
  inStock: boolean;
  popularity: number;
};

export const products: Product[] = [
  {
    id: "sofa-aurora-linen",
    name: "Aurora Linen Sofa",
    slug: "aurora-linen-sofa",
    price: 4890,
    description:
      "A three-seat silhouette upholstered in Italian linen with feather-down cushions and hand-finished oak legs.",
    category: "sofas",
    featured: true,
    badge: "New arrival",
    images: ["/images/sofa-1.jpg", "/images/sofa-1b.jpg"],
    dimensions: "240 x 95 x 80 cm",
    materials: "Solid oak frame, Italian linen, feather-down blend",
    inStock: true,
    popularity: 98
  },
  {
    id: "bed-serene-oak",
    name: "Serene Oak Bed",
    slug: "serene-oak-bed",
    price: 6290,
    description:
      "A low-profile platform bed in smoked European oak with a subtly curved headboard and integrated night ledge.",
    category: "beds",
    featured: true,
    badge: "Bestseller",
    images: ["/images/bed-1.jpg", "/images/bed-1b.jpg"],
    dimensions: "220 x 200 x 95 cm",
    materials: "Smoked European oak, natural oil finish",
    inStock: true,
    popularity: 100
  },
  {
    id: "table-horizon-marble",
    name: "Horizon Marble Table",
    slug: "horizon-marble-table",
    price: 4190,
    description:
      "An oval dining table combining honed Calacatta marble with a sculpted walnut base for a quietly dramatic centerpiece.",
    category: "tables",
    featured: true,
    images: ["/images/table-1.jpg", "/images/table-1b.jpg"],
    dimensions: "210 x 100 x 74 cm",
    materials: "Honed Calacatta marble, American walnut",
    inStock: true,
    popularity: 94
  },
  {
    id: "chair-luna-leather",
    name: "Luna Leather Chair",
    slug: "luna-leather-chair",
    price: 1890,
    description:
      "An enveloping leather lounge chair with a floating seat and brushed brass accents.",
    category: "chairs",
    featured: true,
    images: ["/images/chair-1.jpg", "/images/chair-1b.jpg"],
    dimensions: "78 x 80 x 76 cm",
    materials: "Full-grain leather, brushed brass, solid ash",
    inStock: true,
    popularity: 92
  },
  {
    id: "cabinet-vista-oak",
    name: "Vista Oak Cabinet",
    slug: "vista-oak-cabinet",
    price: 3290,
    description:
      "A slim cabinet with fluted oak doors, soft-close hardware, and adjustable interior shelving.",
    category: "cabinets",
    images: ["/images/cabinet-1.jpg"],
    dimensions: "110 x 40 x 190 cm",
    materials: "Fluted oak veneer, solid oak legs, brass hardware",
    inStock: true,
    popularity: 88
  },
  {
    id: "cabinet-vista-oak",
    name: "Vista Oak Cabinet",
    slug: "vista-oak-cabinet",
    price: 3290,
    description:
      "A slim cabinet with fluted oak doors, soft-close hardware, and adjustable interior shelving.",
    category: "cabinets",
    images: ["/images/cabinet-2.jpg"],
    dimensions: "110 x 40 x 190 cm",
    materials: "Fluted oak veneer, solid oak legs, brass hardware",
    inStock: true,
    popularity: 88
  },
  {
    id: "sofa-haven-boucle",
    name: "Haven Bouclé Sofa",
    slug: "haven-boucle-sofa",
    price: 5390,
    description:
      "A deep, low-profile modular sofa wrapped in textured bouclé, designed for expansive living spaces.",
    category: "sofas",
    images: ["/images/sofa-2.jpg"],
    dimensions: "260 x 110 x 72 cm",
    materials: "Bouclé upholstery, kiln-dried hardwood frame",
    inStock: true,
    popularity: 90
  },
  {
    id: "table-atlas-wood",
    name: "Atlas Dining Table",
    slug: "atlas-dining-table",
    price: 3890,
    description:
      "A monolithic dining table with a subtly tapered edge and book-matched walnut grain.",
    category: "tables",
    images: ["/images/table-2.jpg"],
    dimensions: "200 x 95 x 75 cm",
    materials: "American walnut with clear matte lacquer",
    inStock: true,
    popularity: 86
  },
  {
    id: "chair-orbit-fabric",
    name: "Orbit Dining Chair",
    slug: "orbit-dining-chair",
    price: 890,
    description:
      "An upholstered dining chair with a curved backrest and slender oak legs for effortless comfort.",
    category: "chairs",
    images: ["/images/chair-2.jpg"],
    dimensions: "52 x 58 x 82 cm",
    materials: "Performance fabric, solid oak",
    inStock: true,
    popularity: 84
  }

  
];




export const categories: { id: Category; label: string }[] = [
  { id: "sofas", label: "Sofas" },
  { id: "beds", label: "Beds" },
  { id: "tables", label: "Tables" },
  { id: "chairs", label: "Chairs" },
  { id: "cabinets", label: "Cabinets" }
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

