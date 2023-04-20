import React from "react";
import ClearBasket from "./components/ClearBasket";
import Price from "./components/Price";
import Item from "./components/Item";
import Buy from "./components/Buy";

const Main: React.FC = () => {
  return (
    <main className="main-basket">
      <ClearBasket />
      <Item />
      <Price />
      <Buy />
    </main>
  );
};

export default Main;
