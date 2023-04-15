import { vId } from "../../utils/valueFormat";
import { Pizza } from "./pizzaTypes";

export const pizzas: Pizza[] = [
  {
    id: vId(),
    url: "/pizza/img1.png",
    name: "Чизбургер-пицца",
    price: 395,
    type: {
      select1: { id: 1, select: true, value: "тонкое" },
      select2: { id: 2, select: false, value: "обычное" },
    },
    width: {
      select1: { id: 1, select: true, value: "26 cm" },
      select2: { id: 2, select: false, value: "30 cm" },
      select3: { id: 3, select: false, value: "40 cm" },
    },
  },
  {
    id: vId(),
    url: "/pizza/img2.png",
    name: "Сырная",
    price: 395,
    type: {
      select1: { id: 1, select: true, value: "тонкое" },
      select2: { id: 2, select: false, value: "обычное" },
    },
    width: {
      select1: { id: 1, select: true, value: "26 cm" },
      select2: { id: 2, select: false, value: "30 cm" },
      select3: { id: 3, select: false, value: "40 cm" },
    },
  },
  {
    id: vId(),
    url: "/pizza/img3.png",
    name: "Креветки по-азиатски",
    price: 395,
    type: {
      select1: { id: 1, select: true, value: "тонкое" },
      select2: { id: 2, select: false, value: "обычное" },
    },
    width: {
      select1: { id: 1, select: true, value: "26 cm" },
      select2: { id: 2, select: false, value: "30 cm" },
      select3: { id: 3, select: false, value: "40 cm" },
    },
  },
  {
    id: vId(),
    url: "/pizza/img4.png",
    name: "Сырный цыпленок",
    price: 395,
    type: {
      select1: { id: 1, select: true, value: "тонкое" },
      select2: { id: 2, select: false, value: "обычное" },
    },
    width: {
      select1: { id: 1, select: true, value: "26 cm" },
      select2: { id: 2, select: false, value: "30 cm" },
      select3: { id: 3, select: false, value: "40 cm" },
    },
  },
];
