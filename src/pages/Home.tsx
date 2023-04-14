import React from "react";
import Header from "../components/header/Header";
import Sort from "../components/sort/Sort";
import Main from "../components/main/Main";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Sort />
      <Main />
    </div>
  );
};

export default Home;
