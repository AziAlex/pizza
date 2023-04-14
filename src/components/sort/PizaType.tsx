import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { pizzas } from "../main/dataPizza";
import { useDispatch } from "react-redux";
import { sort } from "../../redux/sortPizza/sortSlice";

const PizaType: React.FC = () => {
  const [pizzaList, setPizzaList] = useState(pizzas);
  const dispatch = useDispatch();

  return (
    <div className="sort-bar">
      <NavLink
        to="/"
        onClick={() => dispatch(sort.SortDefault())}
        className={({ isActive }) =>
          isActive ? "active sort-item" : "sort-item"
        }
      >
        Все
      </NavLink>
      <NavLink
        to="/Мясные"
        onClick={() => dispatch(sort.SortMeat())}
        className={({ isActive }) =>
          isActive ? "active sort-item" : "sort-item"
        }
      >
        Мясные
      </NavLink>
      <NavLink
        to="/Вегетарианская"
        onClick={() => dispatch(sort.SortVegetarian())}
        className={({ isActive }) =>
          isActive ? "active sort-item" : "sort-item"
        }
      >
        Вегетарианская
      </NavLink>
      <NavLink
        to="/Гриль"
        onClick={() => dispatch(sort.SortGrill())}
        className={({ isActive }) =>
          isActive ? "active sort-item" : "sort-item"
        }
      >
        Гриль
      </NavLink>
      <NavLink
        to="/Острые"
        onClick={() => dispatch(sort.Sortsharp())}
        className={({ isActive }) =>
          isActive ? "active sort-item" : "sort-item"
        }
      >
        Острые
      </NavLink>
      <NavLink
        to="/Закрытые"
        onClick={() => dispatch(sort.SortClose())}
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
