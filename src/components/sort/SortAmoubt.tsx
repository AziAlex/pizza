import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sort } from "../../redux/sortPizza/sortSlice";

const SortAmoubt: React.FC = () => {
  const [menuState, setMenuState] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="sort-menu">
      <img
        id="sort-burger"
        src="/sort-7.svg"
        onClick={() => setMenuState(!menuState)}
      />
      <ul className={menuState ? "sort active-sort" : "sort"}>
        <li
          onClick={() => {
            setMenuState(!menuState);
            dispatch(sort.SortABC());
          }}
        >
          <img src="/sort-svg/img1.png" /> ABCDE
        </li>
        <li
          onClick={() => {
            setMenuState(!menuState);
            dispatch(sort.SortCBA());
          }}
        >
          <img src="/sort-svg/img2.png" /> EDCBA
        </li>
        <li
          onClick={() => {
            setMenuState(!menuState);
            dispatch(sort.Sort123());
          }}
        >
          <img src="/sort-svg/img3.png" /> 1234
        </li>
        <li
          onClick={() => {
            setMenuState(!menuState);
            dispatch(sort.Sort321());
          }}
        >
          <img src="/sort-svg/img4.png" /> 4321
        </li>
      </ul>
    </div>
  );
};

export default SortAmoubt;
