
/*let estaLLoviendo = false;
let estaSoleado = true;

if (estaSoleado) {
    console.log("Ocupa bloqueador");
}
if (estaLLoviendo) {
    console.log("Trae Paraguas");
}

if (estaSoleado == true) {
    console.log("Ademas utiliza gorro");
}

var today = new Date();
if (today.getDate() == 1) {
    console.log("Odio los Lunes");

} else if (today.getDate() == 3) {
    console.log("Viernes? ¡Más bien bien-res!");

} else {
    console.log("¡Hoy es un buen dia!");

var today = new Date();
if(today.getDay() == 1) {
    console.log("Odio los lunes");
} else if(today.getDay() == 5) {
    console.log("Viernes? ¡Más bien bien-res!");
} else {
    console.log("¡Hoy está bien!");
}

var today = new Date();
if(today.getDay() == 1) {
    console.log("Odio los lunes");
}
    
if(today.getDay() != 1) {
    console.log("¡Hoy está bien!");
}

var temperatura = 60;
var estaLLoviendo = false;

/*if (temperatura >= 50){
    if (!estaLLoviendo){
        console.log("¡Es un buen dia para salir!");
    }
}

if (temperatura >= 50 && !estaLLoviendo){
    console.log("¡Es un buen dia para salir!");
}else{
        console.log("Mejor no salgas");
    }

    var es5par = 5 % 2 == 0;
    var es500par = 500 % 2 == 0;
    var es78DivisiblePor3 = 78 % 3 == 0;
        
    console.log( es5par );   // false
    console.log( es500par ); // true
    console.log(es78DivisiblePor3); // true
    

for(var i=1; i<3; i++){
    console.log(i);
} 

for(var i=12; i>3; i-=2) {
    console.log(i);
}
// esto imprimirá 12, 10, 8, 6, 4
    
for(var i=0.25; i<3; i+=0.5) {
    console.log(i);
}
// esto imprimirá 0.25, 0.75, 1.25, 1.75, 2.25, 2.75
var i=0;
while(i<3){
    console.log(i);
    i++;
}

var start = 0;
var end = 10;
    
while(start <= end) {
    console.log("start: " + start + ", end: " + end);
    start++;
    end--;
}

for(var i=1; i<=100; i++){
    if(i % 3 == 0) {
        console.log("Fizz");
    } else if(i % 5== 0) {
        console.log("Buzz");
    } 
    if(i % 3== 0 && i % 5== 0 ){
            console.log("FizzBuzz");
    }
    else 
    console.log (i);
}*/
     
var comprasSemanaFeb15 = [
    12.88,
    44.50,
    34.29,
    5.83,
    10.00,
    // ...más compras
];
/*var númeroDeCompras = comprasSemanaFeb15.length;
console.log( númeroDeCompras);
for (i = 0; i<comprasSemanaFeb15.length; i++){
    total=comprasSemanaFeb15[i];
}
    console.log(var total = 0;
        for(var i=0; i<comprasSemanaFeb15.length; i++) {
            total += comprasSemanaFeb15[i];
        }
        console.log("El gasto total fue: $" + total)
    }

/*var valorÚltimaCompra = comprasSemanaFeb15[númeroDeCompras-1];
console.log("el costo de la última compra: $" + valorÚltimaCompra);

var valorÚltimaCompra = comprasSemanaFeb15[númeroDeCompras-1];
console.log("el costo de la última compra: $" + valorÚltimaCompra);*/

var total = 0;
for(var i=0; i<comprasSemanaFeb15.length; i++) {
    total += comprasSemanaFeb15[i];
}
console.log("El gasto total fue: $" + total);

