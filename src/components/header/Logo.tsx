import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src="/logo.png" alt="" />
      <div className="logo-name">
        <h1>REACT PIZZA</h1>
        <h4>самая вкусная пицца во вселенной</h4>
      </div>
    </div>
  );
};

export default Logo;
