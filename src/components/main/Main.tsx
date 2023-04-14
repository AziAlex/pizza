import React from "react";
import { pizzas } from "./dataPizza";
import PizzaItem from "./PizzaItem";

const Main: React.FC = () => {
  return (
    <main className="main">
      <h1>пиццы</h1>
      <div className="pizza-box">
        {pizzas.length ? (
          pizzas.map((pizza) => (
            <PizzaItem
              key={pizza.id}
              url={pizza.url}
              name={pizza.name}
              price={pizza.price}
              type={pizza.type}
              width={pizza.width}
            />
          ))
        ) : (
          <h1>Пиццы не доступны!</h1>
        )}
      </div>
    </main>
  );
};

export default Main;
