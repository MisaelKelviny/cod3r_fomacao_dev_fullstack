import ShoppingCart from "../shoppingcart/shoppingCart";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-zinc-800 px-10 h-20">
      <Logo />
      <ShoppingCart />
    </header>
  );
}
