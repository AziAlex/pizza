export function valueFormat(num: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  }).format(num);
}

export function vId() {
  return Math.floor(Math.random() * 999999999999).toString();
}
