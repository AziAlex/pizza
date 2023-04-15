import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/header/Logo";

const BasketNotFound: React.FC = () => {
  return (
    <div className="basket-notfaund-block">
      <header className="header">
        <Link to="/">
          <Logo />
        </Link>
      </header>
      <main className="not-basket">
        <div>
          <h1>Корзина пустая 😕</h1>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
        </div>
        <img src="/basket-gol.png" />
        <Link className="back" to="/">
          Вернуться назад
        </Link>
      </main>
    </div>
  );
};

export default BasketNotFound;
