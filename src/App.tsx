import Basket from "./pages/Basket";
import Home from "./pages/Home";
import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="wraper">
        <div className="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Basket />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
