import { Product } from "@/data/products";
import { ProductCard } from "@/components/product-card";

type Props = {
  products: Product[];
};

export function ProductGrid({ products }: Props) {
  if (!products.length) {
    return (
      <p className="text-sm text-muted-foreground">
        No pieces match your selection yet. Try adjusting the filters.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

