import { Link, Stack } from "@fluentui/react";
import React from "react";
import { CartPage } from "./CartPage";
import { LoginPage } from "./LoginPage";
import logo from "../images/logo.jpg";

export const Navbar: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const [cart, setCart] = React.useState(false);

  return (
    <React.Fragment>
      <Stack
        horizontal
        horizontalAlign="space-around"
        tokens={{ childrenGap: 20 }}
        style={{
          padding: "15px 1%",
          boxShadow: "0 0 15px #ddd",
          position: "sticky",
          top: "0",
          background: "#fff",
          zIndex: "2",
        }}>
        <Link
          style={{
            fontSize: "25px",
            color: "#666",
            fontWeight: "500",
            textTransform: "capitalize",
          }}>
          <img
            src={logo}
            alt="logo"
            height={60}
            width={120}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <Stack
          horizontal
          horizontalAlign="space-between"
          tokens={{ childrenGap: 5 }}>
          <Link className="navBarLink active">Home</Link>
          <Link className="navBarLink" href="/#dishes">
            Dishes
          </Link>
          <Link className="navBarLink" href="/#about">
            About
          </Link>
          <Link className="navBarLink" href="/#menu">
            Menu
          </Link>
          <Link className="navBarLink" href="/#review">
            Review
          </Link>
          <Link className="navBarLink" href="/#order">
            Order
          </Link>
        </Stack>
        <Stack
          horizontal
          horizontalAlign="space-between"
          tokens={{ childrenGap: 15 }}>
          <Link className="active" onClick={(e: any) => setShow(!show)}>
            Login
          </Link>
          <Link className="active" onClick={(e: any) => setCart(!cart)}>
            Cart
          </Link>
        </Stack>
      </Stack>
      {show && <LoginPage />}
      {cart && <CartPage />}
    </React.Fragment>
  );
};
