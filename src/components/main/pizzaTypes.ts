export interface IType {
  select1: WidthSise;
  select2: WidthSise;
}

export interface ISise {
  select1: WidthSise;
  select2: WidthSise;
  select3: WidthSise;
}
export interface WidthSise {
  id: number;
  select: boolean;
  value: string;
}

export interface Pizza {
  id: string;
  url: string;
  name: string;
  price: number;
  type: IType;
  width: ISise;
}

export interface PizzaState {
  id: string;
  img: string;
  name: string;
  type: string;
  sise: string;
  price: number;
}
