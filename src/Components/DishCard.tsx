import { DefaultButton, Stack, Text } from "@fluentui/react";
import React from "react";
import { CartContext, ICartContext } from "../Context/CartContext";

interface IDishCardProps {
  id: any;
  img: any;
  title: string;
  price: Number;
}

export const DishCard: React.FC<IDishCardProps> = ({
  id,
  img,
  title,
  price,
}: IDishCardProps) => {
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
        style={{
          background: "#fff",
          padding: "25px",
          textAlign: "center",
          borderRadius: "15px",
          width:'20%'
        }}>
        <img className="dishCardImg" alt="" src={img} />
        <Text
          style={{
            textAlign: "center",
            fontSize: "25px",
            padding: "10px 0",
            fontWeight: "700",
            color: "#192a56",
          }}>
          {title}
        </Text>
        <Stack
          horizontal
          horizontalAlign="space-evenly"
          style={{ padding: "5px 0" }}>
          <Text
            style={{ fontSize: "25px", color: "#27ae60", fontWeight: "700" }}>
            ${price}
          </Text>
          <DefaultButton
            text="Add To Cart"
            style={{
              background: "#192a56",
              color: "#fff",
              borderRadius: "25px",
            }}
            onClick={() => addItem({ id, item: title, price, quantity: 1 })}
          />
        </Stack>
      </Stack>
    </React.Fragment>
  );
};
