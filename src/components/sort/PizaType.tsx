import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { pizzas } from "../main/dataPizza";

const PizaType: React.FC = () => {
  const [pizzaList, setPizzaList] = useState(pizzas);

  const DefaultSort = () => {
    setPizzaList(pizzas);
  };
  const MeatSort = () => {
    setPizzaList(
      pizzaList.filter(
        (pizza) => pizza.name.toLowerCase() === "cырный цыпленок"
      )
    );
  };

  return (
    <div className="sort-bar">
      <NavLink
        to="/"
        onClick={DefaultSort}
        className={({ isActive }) =>
          isActive ? "active sort-item" : "sort-item"
        }
      >
        Все
      </NavLink>
      <NavLink
        to="/Мясные"
        onClick={MeatSort}
        className={({ isActive }) =>
          isActive ? "active sort-item" : "sort-item"
        }
      >
        Мясные
      </NavLink>
      <NavLink
        to="/Вегетарианская"
        className={({ isActive }) =>
          isActive ? "active sort-item" : "sort-item"
        }
      >
        Вегетарианская
      </NavLink>
      <NavLink
        to="/Гриль"
        className={({ isActive }) =>
          isActive ? "active sort-item" : "sort-item"
        }
      >
        Гриль
      </NavLink>
      <NavLink
        to="/Острые"
        className={({ isActive }) =>
          isActive ? "active sort-item" : "sort-item"
        }
      >
        Острые
      </NavLink>
      <NavLink
        to="/Закрытые"
        className={({ isActive }) =>
          isActive ? "active sort-item" : "sort-item"
        }
      >
        Закрытые
      </NavLink>
    </div>
  );
};

export default PizaType;
