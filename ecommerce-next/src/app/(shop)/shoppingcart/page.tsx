"use client";
import ShoppingCartEmpty from "@/components/shoppingcart/shoppingCartEmpty";
import ShoppingCartTotal from "@/components/shoppingcart/shoppingCartTotal";
import ShoppingCartItem from "@/components/shoppingcart/shoppintCartItem";
import Page from "@/components/template/page";
import ShoppingCartContext from "@/data/context/contextShoppingCart";
import { useContext } from "react";

export default function PageShoppingCart() {
  const { itens, add, remove } = useContext(ShoppingCartContext);

  return (
    <Page className="flex flex-col gap-10">
      {itens.length === 0 ? (
        <ShoppingCartEmpty />
      ) : (
        <>
          <div className="flex flex-col gap-5">
            {itens.map((item) => (
              <ShoppingCartItem
                key={item.product.id}
                item={item}
                add={() => add(item.product)}
                remove={() => remove(item.product)}
              />
            ))}
          </div>
          <ShoppingCartTotal itens={itens} />
        </>
      )}
    </Page>
  );
}
