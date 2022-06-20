import { DefaultButton, Stack, Text } from "@fluentui/react";
import React from "react";
import homeimg from "../images/home-img-1.png";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Stack
        horizontal
        horizontalAlign="space-between"
        tokens={{ childrenGap: 15 }}
        className="main-container">
        <Stack style={{ padding: "100px 55px" }}>
          <Text
            style={{ fontSize: "25px", fontWeight: "500", color: "#27ae60" }}>
            Like Mom’s house.
          </Text>
          <Text
            style={{
              fontSize: "70px",
              fontWeight: "bolder",
              color: "#192a56",
            }}>
            Yummie Wheels..!!
          </Text>
          <Text
            style={{ fontSize: "22px", padding: "5px 0", color: "#666666" }}>
            One thousand flavors in one place.
          </Text>
          <DefaultButton
            text="Order Now"
            style={{
              width: "20%",
              marginTop: "15px",
              borderRadius: "15px",
              background: "#192a56",
              color: "#fff",
            }}
          />
        </Stack>
        <Stack>
          <img style={{ width: "90%" }} alt="" src={homeimg} />
        </Stack>
      </Stack>
    </React.Fragment>
  );
};
