import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { valueFormat } from "../../../utils/valueFormat";

const Price: React.FC = () => {
  const allitems = useSelector((state: RootState) => state.buyBasket.buyItems);
  const tottalPrice = allitems.reduce((acc, item) => acc + item.tottalPrice, 0);
  const tottalBuy = allitems.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className="price-block">
      <h2 className="tottal-count">
        Всего пицц: <span>{tottalBuy}</span>
      </h2>
      <h2 className="tottal-price">
        Сума заказа: <span>{valueFormat(tottalPrice)}</span>
      </h2>
    </div>
  );
};

export default Price;
