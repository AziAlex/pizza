import React, { useRef, useState } from "react";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Main: React.FC = () => {
  const [value, setValue] = useState<string>("Все пиццы");
  const newSortPizza = useSelector(
    (state: RootState) => state.newPizzaList.allPizza
  );

  setTimeout(() => {
    const typePuzza = document.querySelector(".active")?.textContent;
    setValue(`${typePuzza} пиццы`);
  });

  return (
    <main className="main">
      <h1>{value}</h1>
      <div className="pizza-box">
        {newSortPizza.length ? (
          newSortPizza.map((pizza) => (
            <PizzaItem
              key={pizza.id}
              id={pizza.id}
              types={pizza.types}
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
