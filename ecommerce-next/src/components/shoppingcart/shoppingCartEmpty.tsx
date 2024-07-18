import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function ShoppingCartEmpty() {
  return (
    <div className="flex flex-col items-center gap-4 text-zinc-500">
      <ShoppingCart size={150} />
      <div>
        <h2 className="text-3xl ">Seu carrinho está vazio</h2>
        <p>Adicione produtos clicando no botão abaixo</p>
      </div>
      <Link href="/" className="bg-green-500 text-white rounded-sm px-4 py-2">
        Ver produtos
      </Link>
    </div>
  );
}
