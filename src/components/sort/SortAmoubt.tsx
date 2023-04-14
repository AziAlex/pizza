import React, { useState } from "react";

const SortAmoubt: React.FC = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className="sort-menu">
      <img
        id="sort-burger"
        src="/sort-7.svg"
        onClick={() => setMenuState(!menuState)}
      />
      <ul className={menuState ? "sort active-sort" : "sort"}>
        <li onClick={() => setMenuState(!menuState)}>по цене</li>
        <li onClick={() => setMenuState(!menuState)}>по алфабиту</li>
      </ul>
    </div>
  );
};

export default SortAmoubt;
