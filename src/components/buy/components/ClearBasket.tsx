import React, { useState } from "react";
import Modal from "./Modal";

const ClearBasket: React.FC = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  return (
    <div className="clear-basket">
      <h1>
        <img src="/Vector.svg" /> Корзина
      </h1>
      <h2 onClick={() => setActiveModal(true)}>
        <img src="/Vector.png" />
        Очистить корзину
      </h2>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
};

export default ClearBasket;
