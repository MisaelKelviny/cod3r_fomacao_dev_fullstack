import ShoppingCartContext from "@/data/context/contextShoppingCart";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

export default function ShoppingCart() {
  const { quantityItens } = useContext(ShoppingCartContext);

  return (
    <Link
      href={"/shoppingcart"}
      className="flex items-center justify-end relative"
    >
      <ShoppingCartIcon className="text-gray-300 size-8" />
      <div className="absolute w-6 h-6 -top-2 -right-3 rounded-full bg-red-500 text-white text-xs text-center flex items-center justify-center font-semibold">
        {quantityItens}
      </div>
    </Link>
  );
}
