import React from "react";
import { Link } from "react-router-dom";

const Buy: React.FC = () => {
  return (
    <div className="buy-block">
      <Link to="/">
        <button>
          <img src="/_Path_.svg" />
          Вернуться назад
        </button>
      </Link>
      <button>Оплатить сейчас</button>
    </div>
  );
};

export default Buy;
