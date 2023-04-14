export interface Pizza {
  id?: string;
  url: string;
  name: string;
  price: number;
  type: {
    select1: { id: number; select: boolean; value: string };
    select2: { id: number; select: boolean; value: string };
  };
  width: {
    select1: { id: number; select: boolean; value: string };
    select2: { id: number; select: boolean; value: string };
    select3: { id: number; select: boolean; value: string };
  };
}
