"use client";
import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import ItemCart from "../model/ItemCart";
import Product from "../model/Product";

export interface ShoppingCartContextProps {
  itens: ItemCart[];
  add: (item: Product) => void;
  remove: (item: Product) => void;
  quantityItens: number;
}

const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);

export function ShoppingCartProvider(props: any) {
  const [itens, setItens] = useState<ItemCart[]>([]);
  const { set, get } = useLocalStorage();
  const CART_KEY = "cart";

  useEffect(() => {
    const carrinho = get(CART_KEY);
    if (carrinho) {
      setItens(carrinho);
    }
  }, [get]);

  function add(product: Product) {
    const index = itens.findIndex((i) => i.product.id === product.id);

    if (index === -1) {
      setItens([...itens, { product, quantity: 1 }]);
    } else {
      const newItens = [...itens];
      newItens[index].quantity++;
      setItens(newItens);
    }
  }

  function remove(product: Product) {
    const novosItens = itens
      .map((i) => {
        if (i.product.id === product.id) {
          i.quantity--;
        }
        return i;
      })
      .filter((i) => i.quantity > 0);
    changeItens(novosItens);
  }

  function changeItens(newItens: ItemCart[]) {
    setItens(newItens);
    set(CART_KEY, newItens);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        itens,
        add,
        get quantityItens() {
          return itens.reduce((total, item) => total + item.quantity, 0);
        },
        remove,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
