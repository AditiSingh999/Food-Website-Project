import React from "react";
import { Stack, Text } from "@fluentui/react";
import { DishCard } from "../Components/DishCard";
import dish1 from "../images/dish-1.png";
import dish2 from "../images/tikka.jpg";
import dish3 from "../images/dish-3.png";
import dish4 from "../images/dish-4.png";
import dish5 from "../images/fdgfd.jpg";
import dish6 from "../images/garlicBread.jpg";
import dish7 from "../images/noodles.jpg";
import dish8 from "../images/combos.jpg";

export const PopularDishes: React.FC = () => {
  return (
    <React.Fragment>
      <Stack id="dishes">
        <Stack style={{ background: "#eee" }} className="main-container">
          <Text className="sub-heading">Our Dishes</Text>
          <Text className="heading">POPULAR DISHES</Text>
          <Stack
            horizontal
            horizontalAlign="space-around"
            style={{ paddingTop: "35px" }}>
            <DishCard img={dish1} id={1} title="Burger" price={	3.99} />
            <DishCard img={dish2} id={2} title="Paneer Tikka" price={	2.52} />
            <DishCard img={dish3} id={3} title="Chicken" price={3.65} />
            <DishCard img={dish4} id={4} title="Pizza" price={8.99} />
          </Stack>
          <Stack
            horizontal
            horizontalAlign="space-around"
            style={{ paddingTop: "35px" }}>
            <DishCard img={dish5} id={5} title="French Fries" price={5} />
            <DishCard img={dish6} id={6} title="Garlic Bread" price={6} />
            <DishCard img={dish7} id={7} title="Noodles" price={0.62} />
            <DishCard img={dish8} id={8} title="Combo's" price={9} />
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};
