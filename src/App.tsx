import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import "./scss/app.scss";
import { RootState } from "./redux/store";
import BasketNotFound from "./pages/BasketNotFound";

function App() {
  const items = useSelector((state: RootState) => state.buyBasket.buyItems);
  return (
    <div className="app">
      <div className="wraper">
        <div className="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/buy"
              element={items.length ? <Basket /> : <BasketNotFound />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
