import React from "react";
import PizaType from "./PizaType";
import SortAmoubt from "./SortAmoubt";

const Sort: React.FC = () => {
  return (
    <aside className="sort-block">
      <PizaType />
      <SortAmoubt />
    </aside>
  );
};

export default Sort;
