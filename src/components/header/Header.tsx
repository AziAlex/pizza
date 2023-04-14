import React from "react";
import Purchase from "./Purchase";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.png" alt="" />
        <div className="logo-name">
          <h1>REACT PIZZA</h1>
          <h4>самая вкусная пицца во вселенной</h4>
        </div>
      </div>
      <Purchase />
    </div>
  );
};

export default Header;
