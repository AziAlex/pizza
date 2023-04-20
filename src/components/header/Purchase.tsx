import React from "react";
import { useSelector } from "react-redux";
import { valueFormat } from "../../utils/valueFormat";
import { RootState } from "../../redux/store";

const Purchase: React.FC = () => {
  const allitems = useSelector((state: RootState) => state.buyBasket.buyItems);
  const tottalPrice = allitems.reduce((acc, item) => acc + item.tottalPrice, 0);
  const tottalBuy = allitems.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className="basket">
      <span className="price">{valueFormat(tottalPrice)}</span>
      <span className="line"></span>
      <span className="count">
        <img src="/basket.svg" alt="Buy" />
        {tottalBuy}
      </span>
    </div>
  );
};

export default Purchase;
