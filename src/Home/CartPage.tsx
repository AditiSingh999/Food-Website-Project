import { PrimaryButton, Stack, Text } from "@fluentui/react";
import React from "react";
import { useEffect } from "react";
import { CartContext, ICartContext } from "../Context/CartContext";

export const CartPage: React.FC = () => {
  const { cart, setCart } = React.useContext(CartContext) as ICartContext;

  let localCart: any = localStorage.getItem("cart");

  useEffect(() => {
    localCart = JSON.parse(localCart);

    if (localCart) setCart(localCart);
    else setCart([]);
  }, []);

  const removeItem = (itemID: Number) => {
    let cartCopy = [...cart];

    cartCopy = cartCopy.filter((item) => item.id !== itemID);

    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  return (
    <React.Fragment>
      <Stack className="cartPage">
        <h4 style={{ textAlign: "center" }}>Your Cart</h4>
        <Stack tokens={{ childrenGap: 10 }}>
          {cart.map((itm: any) => {
            return (
              <Stack
                horizontal
                horizontalAlign="space-between"
                tokens={{ childrenGap: 10 }}
                style={{ width: "100%" }}>
                <Text
                  style={{ fontSize: "20px", fontWeight: "500", width: "50%" }}>
                  {itm.item}
                </Text>
                <Text>x{itm.quantity}</Text>
                <Text style={{ fontSize: "18px", fontWeight: "500" }}>
                  ${itm.price}
                </Text>
                <PrimaryButton
                  className="deleteButton"
                  onClick={() => removeItem(itm.id)}>
                  DELETE
                </PrimaryButton>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </React.Fragment>
  );
};
