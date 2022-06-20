import React from "react";

interface ICart {
  id: Number;
  item: string;
  price: Number;
  quantity: Number;
}

export interface ICartContext {
  cart: ICart[];
  setCart: React.Dispatch<React.SetStateAction<ICart[]>>;
}

export const CartContext = React.createContext<ICartContext | null>(null);

interface IDetailsProviderProps {
  children: any;
}

const CartProvider = ({ children }: IDetailsProviderProps) => {
  const [cart, setCart] = React.useState<ICart[]>([]);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
