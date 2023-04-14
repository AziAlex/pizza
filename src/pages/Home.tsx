import React from "react";
import { Link } from "react-router-dom";
import Sort from "../components/sort/Sort";
import Main from "../components/main/Main";
import Logo from "../components/header/Logo";
import Purchase from "../components/header/Purchase";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="header">
        <Logo />
        <Link to="/buy">
          <Purchase />
        </Link>
      </header>
      <Sort />
      <Main />
    </div>
  );
};

export default Home;
