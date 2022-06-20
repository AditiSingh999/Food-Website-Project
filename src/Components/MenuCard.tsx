import { DefaultButton, Stack, Text } from "@fluentui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { CartContext, ICartContext } from "../Context/CartContext";

interface IMenucard {
  id: Number;
  img: any;
  heading: string;
  content: string;
  price: Number;
}

export const MenuCard: React.FC<IMenucard> = ({
  id,
  img,
  heading,
  content,
  price,
}: IMenucard) => {
  const { cart, setCart } = React.useContext(CartContext) as ICartContext;

  const addItem = (item: any) => {
    let cartCopy = [...cart];

    let { id } = item;

    let existingItem: any = cartCopy.find(
      (cartItem: any) => cartItem.id === id
    );

    if (existingItem) {
      console.log(existingItem);

      existingItem.quantity += item.quantity;
      existingItem.price = existingItem.quantity * existingItem.price;
    } else {
      cartCopy.push(item);
    }

    setCart(cartCopy);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };
  return (
    <React.Fragment>
      <Stack
        className="box"
        style={{ height: "350px", width: "350px", marginBottom: "15px" }}>
        <Stack className="image">
          <img alt="" src={img} />
        </Stack>
        <Text
          style={{
            fontSize: "25px",
            padding: "5px 0.5rem",
            fontWeight: "700",
            color: "#192a56",
          }}>
          {heading}
        </Text>
        <p style={{ padding: "0 0.5rem" }}>{content}</p>
        <Stack
          horizontal
          horizontalAlign="space-evenly"
          style={{ padding: "5px 0" }}>
          <DefaultButton
            text="Add To Cart"
            style={{
              background: "#192a56",
              color: "#fff",
              borderRadius: "25px",
            }}
            onClick={() => addItem({ id, item: heading, price, quantity: 1 })}
          />
          <Text
            style={{ fontSize: "25px", color: "#27ae60", fontWeight: "700" }}>
            ${price}
          </Text>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};
