import { ShoppingCartProvider } from "@/data/context/contextShoppingCart";

export default function Layout(props: any) {
  return (
    <ShoppingCartProvider>
      <div>{props.children}</div>
    </ShoppingCartProvider>
  );
}
