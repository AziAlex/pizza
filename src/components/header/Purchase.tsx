import React from "react";
import { valueFormat } from "../../utils/valueFormat";

const Purchase: React.FC = () => {
  return (
    <div className="basket">
      <span className="price">{valueFormat(123)}</span>
      <span className="line"></span>
      <span className="count">
        <img src="/basket.svg" />3
      </span>
    </div>
  );
};

export default Purchase;
