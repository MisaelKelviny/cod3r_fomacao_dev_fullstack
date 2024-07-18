import ShoppingCartContext from "@/data/context/contextShoppingCart";
import Product from "@/data/model/Product";
import Image from "next/image";
import { useContext } from "react";

export interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  const { name, description, price, image } = props.product;
  const { add } = useContext(ShoppingCartContext);

  return (
    <div className="flex flex-col w-72 bg-zinc-900">
      <div className="w-72 h-52 relative">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <h2 className="text-xl font-bold text-white">{name}</h2>
        <p className="flex-1 text-sm text-zinc-400">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold mt-2 text-zinc-200">R$ {price}</p>
          <button
            className="text-zinc-200 border rounded-full px-5 py-1 text-sm"
            onClick={() => add(props.product)}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
