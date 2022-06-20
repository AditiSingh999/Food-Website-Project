import React from "react";
import CartProvider from "../Context/CartContext";
import { AboutUs } from "./AboutUs";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { Navbar } from "./Navbar";
import { OrderNow } from "./OrderNow";
import { PopularDishes } from "./PopularDishes";
import { Review } from "./Review";
import { Welcome } from "./Welcome";

export const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <PopularDishes />
      <AboutUs />
      <Menu />
      <Review />
      <OrderNow />
      <Footer />
      {/* <Welcome/> */}
    </React.Fragment>
  );
};
