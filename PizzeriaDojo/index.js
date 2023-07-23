function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
  var pizzas = {};
  pizzas.tipoCorteza = tipoCorteza;
  pizzas.tipoSalsa = tipoSalsa;
  pizzas.quesos = quesos;
  pizzas.salsas = salsas;
  return pizzas;
}
var pizza1 = pizzaOven(
  "estilo Chicago",
  "tradicional",
  ["mozzarella", "pepperoni"],
  "salchicha"
);
var pizza2 = pizzaOven(
  "lanzada a mano",
  "marinara",
  ["mozzarella", "feta"],
  ["champiñones", "aceitunas", "cebollas"]
);
var pizza3 = pizzaOven("delgada", "pesto", "mozzarella", [
  "champiñones",
  "jamon",
  "pepperoni",
]);
var pizza4 = pizzaOven(
  "tradicional",
  "marinara",
  ["parmensano", "pecorino", "provolone"],
  ["jamon"]
);
console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
