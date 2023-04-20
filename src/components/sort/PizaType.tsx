import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { pizzas } from "../main/dataPizza";
import { useDispatch, useSelector } from "react-redux";
import { sort } from "../../redux/sortPizza/sortSlice";
import { ISortItems } from "./types";
import { RootState } from "../../redux/store";
import { setActiveLink } from "../../redux/sortPizza/sortBarSlice";

const PizaType: React.FC = () => {
  const dispatch = useDispatch();
  const sortBar = useSelector((state: RootState) => state.sorts.sort);
  const activeLinkHanler = (id: number, fun: unknown) => {};

  return (
    <ul className="sort-bar">
      <li
        onClick={() => {
          dispatch(setActiveLink(sortBar.link1.id)),
            dispatch(sort.SortDefault());
        }}
        className={sortBar.link1.select ? "active sort-item" : "sort-item"}
      >
        Все
      </li>
      <li
        onClick={() => {
          dispatch(setActiveLink(sortBar.link2.id)), dispatch(sort.SortMeat());
        }}
        className={sortBar.link2.select ? "active sort-item" : "sort-item"}
      >
        Мясные
      </li>
      <li
        onClick={() => {
          dispatch(setActiveLink(sortBar.link3.id)),
            dispatch(sort.SortVegetarian());
        }}
        className={sortBar.link3.select ? "active sort-item" : "sort-item"}
      >
        Вегетарианская
      </li>
      <li
        onClick={() => {
          dispatch(setActiveLink(sortBar.link4.id)), dispatch(sort.SortGrill());
        }}
        className={sortBar.link4.select ? "active sort-item" : "sort-item"}
      >
        Гриль
      </li>
      <li
        onClick={() => {
          dispatch(setActiveLink(sortBar.link5.id)), dispatch(sort.Sortsharp());
        }}
        className={sortBar.link5.select ? "active sort-item" : "sort-item"}
      >
        Острые
      </li>
      <li
        onClick={() => {
          dispatch(setActiveLink(sortBar.link6.id)), dispatch(sort.SortClose());
        }}
        className={sortBar.link6.select ? "active sort-item" : "sort-item"}
      >
        Закрытые
      </li>
    </ul>
  );
};

export default PizaType;
