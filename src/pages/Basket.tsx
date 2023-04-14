import { Route, Routes, Link } from "react-router-dom";
import Logo from "../components/header/Logo";
import Main from "../components/buy/Main";

const Basket: React.FC = () => {
  return (
    <div className="basket-block">
      <header className="header">
        <Link to="/">
          <Logo />
        </Link>
      </header>
      <Main />
    </div>
  );
};

export default Basket;
