import React, { useRef, useState } from "react";
// import { pizzas } from "./dataPizza";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Main: React.FC = () => {
  const [value, setValue] = useState<string>("Все пиццы");
  const refElement = useRef<HTMLDivElement>(null);
  const newSortPizza = useSelector(
    (state: RootState) => state.newPizzaList.allPizza
  );
  setTimeout(() => {
    const typePuzza = document.querySelector(".active")?.textContent;
    setValue(`${typePuzza} пиццы`);
  }, 20);

  return (
    <main className="main">
      <h1 ref={refElement}>{value}</h1>
      <div className="pizza-box">
        {newSortPizza.length ? (
          newSortPizza.map((pizza) => (
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
          <h1>нету пицц</h1>
        )}
      </div>
    </main>
  );
};

export default Main;
