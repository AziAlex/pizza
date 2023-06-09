import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { valueFormat } from "../../utils/valueFormat";
import { ISise, IType, Pizza, PizzaState, WidthSise } from "./pizzaTypes";
import { addItem } from "../../redux/buyPizza/buySlice";

const PizzaItem: React.FC<Pizza> = ({ url, name, type, width, price, id }) => {
  const [typePizza, setTypePizza] = useState<IType>({ ...type });
  const [widthPizza, setWidthPizza] = useState<ISise>({ ...width });
  const [typesPizza, setTypesPizza] = useState<number>(0);
  const [sisePizza, setSisePizza] = useState<number>(0);
  const dispatch = useDispatch();
  const pzType: WidthSise = newPizzaTypeSize(typePizza);
  const pzSise: WidthSise = newPizzaTypeSize(widthPizza);

  const pizzaState: PizzaState = {
    count: 1,
    id: id,
    img: url,
    name: name,
    type: pzType.value,
    sise: pzSise.value,
    price: typesPizza + sisePizza + price,
    tottalPrice: typesPizza + sisePizza + price,
  };

  const typePyzzaHandler = (spanState: number) => {
    setTypePizza({
      select1: {
        id: 1,
        select: spanState === 1 ? true : false,
        value: type.select1.value,
      },
      select2: {
        id: 2,
        select: spanState === 2 ? true : false,
        value: type.select2.value,
      },
    });
  };
  const widthPyzzaHandler = (spanState: number) => {
    setWidthPizza({
      select1: {
        id: 1,
        select: spanState === 1 ? true : false,
        value: width.select1.value,
      },
      select2: {
        id: 2,
        select: spanState === 2 ? true : false,
        value: width.select2.value,
      },
      select3: {
        id: 3,
        select: spanState === 3 ? true : false,
        value: width.select3.value,
      },
    });
  };

  function newPizzaTypeSize(obj: ISise | IType) {
    const truePrice = Object.entries(obj).map((i) => i);
    return truePrice.find((i) => i[1].select === true)?.[1];
  }

  useEffect(() => {
    newPrice();
  }, [widthPizza]);
  useEffect(() => {
    finallPrice();
  }, [typePizza]);

  function newPrice() {
    const arr: WidthSise = newPizzaTypeSize(widthPizza);
    if (arr.value === "26 cm") {
      setSisePizza(0);
    } else if (arr.value === "30 cm") {
      setSisePizza(50);
    } else {
      setSisePizza(100);
    }
  }
  function finallPrice() {
    const arr: WidthSise = newPizzaTypeSize(typePizza);
    if (arr.value === "тонкое") {
      setTypesPizza(0);
    } else {
      setTypesPizza(50);
    }
  }

  return (
    <div className="item">
      <img draggable={false} src={url} alt="" />
      <h2>{name}</h2>
      <div className="info-pizza">
        <div className="type-piza">
          <span
            className={typePizza.select1.select ? "type-piza-active" : ""}
            onClick={() => typePyzzaHandler(typePizza.select1.id)}
          >
            {type.select1.value}
          </span>
          <span
            className={typePizza.select2.select ? "type-piza-active" : ""}
            onClick={() => typePyzzaHandler(typePizza.select2.id)}
          >
            {type.select2.value}
          </span>
        </div>
        <div className="width-pizza">
          <span
            className={widthPizza.select1.select ? "type-piza-active" : ""}
            onClick={() => widthPyzzaHandler(widthPizza.select1.id)}
          >
            {width.select1.value}
          </span>
          <span
            className={widthPizza.select2.select ? "type-piza-active" : ""}
            onClick={() => widthPyzzaHandler(widthPizza.select2.id)}
          >
            {width.select2.value}
          </span>
          <span
            className={widthPizza.select3.select ? "type-piza-active" : ""}
            onClick={() => widthPyzzaHandler(widthPizza.select3.id)}
          >
            {width.select3.value}
          </span>
        </div>
      </div>
      <div className="price-block">
        <span>от {valueFormat(typesPizza + sisePizza + price)}</span>
        <button onClick={() => dispatch(addItem(pizzaState))}>
          + Добавить
        </button>
      </div>
    </div>
  );
};

export default PizzaItem;
