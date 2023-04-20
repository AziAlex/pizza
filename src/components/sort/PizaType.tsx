import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { pizzas } from "../main/dataPizza";
import { useDispatch, useSelector } from "react-redux";
import { sort } from "../../redux/sortPizza/sortSlice";
import { ISortItems } from "./types";
import { RootState } from "../../redux/store";

const initialState: ISortItems = {
  link1: { id: 1, select: true },
  link2: { id: 2, select: false },
  link3: { id: 3, select: false },
  link4: { id: 4, select: false },
  link5: { id: 5, select: false },
  link6: { id: 6, select: false },
};

const PizaType: React.FC = () => {
  const [activeLink, setActiveLink] = useState(initialState);

  const sortItems = useSelector(
    (state: RootState) => state.newPizzaList.allPizza[0].types
  );
  console.log(sortItems);

  const dispatch = useDispatch();

  const activeLinkHanler = (id: number, fun: unknown) => {
    setActiveLink({
      link1: { id: 1, select: 1 === id ? true : false },
      link2: { id: 2, select: 2 === id ? true : false },
      link3: { id: 3, select: 3 === id ? true : false },
      link4: { id: 4, select: 4 === id ? true : false },
      link5: { id: 5, select: 5 === id ? true : false },
      link6: { id: 6, select: 6 === id ? true : false },
    });
  };

  return (
    <div className="sort-bar">
      <a
        href="#"
        onClick={() =>
          activeLinkHanler(initialState.link1.id, dispatch(sort.SortDefault()))
        }
        className={activeLink.link1.select ? "active sort-item" : "sort-item"}
      >
        Все
      </a>
      <a
        onClick={() =>
          activeLinkHanler(initialState.link2.id, dispatch(sort.SortMeat()))
        }
        className={activeLink.link2.select ? "active sort-item" : "sort-item"}
      >
        Мясные
      </a>
      <a
        onClick={() =>
          activeLinkHanler(
            initialState.link3.id,
            dispatch(sort.SortVegetarian())
          )
        }
        className={activeLink.link3.select ? "active sort-item" : "sort-item"}
      >
        Вегетарианская
      </a>
      <a
        onClick={() =>
          activeLinkHanler(initialState.link4.id, dispatch(sort.SortGrill()))
        }
        className={activeLink.link4.select ? "active sort-item" : "sort-item"}
      >
        Гриль
      </a>
      <a
        onClick={() =>
          activeLinkHanler(initialState.link5.id, dispatch(sort.Sortsharp()))
        }
        className={activeLink.link5.select ? "active sort-item" : "sort-item"}
      >
        Острые
      </a>
      <a
        onClick={() =>
          activeLinkHanler(initialState.link6.id, dispatch(sort.SortClose()))
        }
        className={activeLink.link6.select ? "active sort-item" : "sort-item"}
      >
        Закрытые
      </a>
    </div>
  );
};

export default PizaType;
