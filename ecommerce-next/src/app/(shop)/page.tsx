"use client";
import ProductCard from "@/components/products/productCard";
import Page from "@/components/template/page";
import { products } from "@/data/contants/products";

export default function Home() {
  return (
    <Page>
      <div className="flex gap-5 flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Page>
  );
}
