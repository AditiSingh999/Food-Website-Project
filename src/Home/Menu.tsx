import { PrimaryButton, Stack, Text } from "@fluentui/react";
import React from "react";
import { MenuCard } from "../Components/MenuCard";
import data from "../Home/data";
import menu6 from "../images/menu-6.jpg";

export const Menu: React.FC = () => {
  return (
    <React.Fragment>
      <Stack
        style={{ background: "#eee" }}
        className="main-container"
        id="menu">
        <Text className="sub-heading">Our Menu</Text>
        <Text className="heading">TODAY'S SPECIALITY</Text>
        <Stack
          horizontal
          horizontalAlign="space-evenly"
          wrap
          style={{ paddingTop: "35px", margin: "15px" }}>
          {data.map((menuData) => {
            return (
              <MenuCard
                id={menuData.id}
                img={menuData.img}
                heading={menuData.heading}
                content={menuData.content}
                price={menuData.price}
              />
            );
          })}
        </Stack>
      </Stack>
    </React.Fragment>
  );
};
