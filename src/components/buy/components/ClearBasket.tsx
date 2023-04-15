import React from "react";
import { useDispatch } from "react-redux";
import { deleteAllItems } from "../../../redux/buyPizza/buySlice";

const ClearBasket: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="clear-basket">
      <h1>
        <img src="/Vector.svg" /> Корзина
      </h1>
      <h2 onClick={() => dispatch(deleteAllItems())}>
        <img src="/Vector.png" />
        Очистить корзину
      </h2>
    </div>
  );
};

export default ClearBasket;
