/*var taco1 = {
    "tortilla": "tortilla suave de maíz",
    "protein":  "tinga de pollo",
    "cheese":   "queso cotija",
    "toppings": ["lechuga", "pico de gallo", "guacamole"]
}

console.log("Tortilla: " + taco1.tortilla);
console.log("Protein:  " + taco1.protein);
console.log("Cheese:   " + taco1.cheese);
console.log("Toppings: " + taco1.toppings);

var taco1 = {
    "tortilla": "tortilla suave de maíz",
    "protein":  "tinga de pollo",
    "cheese":   "queso cotija",
    "toppings": ["lechuga", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + taco1.tortilla);
        console.log("Protein:  " + taco1.protein);
        console.log("Cheese:   " + taco1.cheese);
        console.log("Toppings: " + taco1.toppings);
    }
}
    
// ahora podemos obtener toda la deliciosa información de taco de
taco1.tacoInfo(); // nota que llamamos esto como a una función porque es una función

var taco1 = {
    "tortilla": "tortilla suave de maíz",
    "protein":  "tinga de pollo",
    "cheese":   "queso cotija",
    "toppings": ["lechuga", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}
    
// todavía podemos obtener toda la deliciosa información de
taco1.tacoInfo(); // nota que tacoInfo se llama como a una función aún


var sandwich = {
    pan:    "masa madre",
    proteína:  "asado",
    queso:   "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};
    
console.log(sandwich);

var sandwich = {
    pan:    "masa madre",
    proteína:  "asado",
    queso:   "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};
    
console.log(sandwich);

function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);*/



    function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas){
        var pizzas= {};
        pizzas.tipoCorteza = tipoCorteza;
        pizzas.tipoSalsa = tipoSalsa;
        pizzas.quesos = quesos;
        pizzas.salsas= salsas;
        return pizzas;
    }
    var pizza1 = pizzaOven( "estilo Chicago", "tradicional", ["mozzarella" ,"pepperoni"], "salchicha");
    var pizza2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"] , ["champiñones", "aceitunas", "cebollas"]);
    var pizza3 = pizzaOven("delgada" , "pesto" , "mozzarella" , ["champiñones", "jamon", "pepperoni"]);
    var pizza4 = pizzaOven("tradicional" , "marinara" , ["parmensano","pecorino", "provolone"] , ["jamon"]);
    console.log(pizza1);
    console.log(pizza2);
    console.log(pizza3);
    console.log(pizza4);

    


