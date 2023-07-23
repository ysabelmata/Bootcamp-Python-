// Imprimir impares //

for (let i=1 ; i<=20 ; i++){
    if (i % 2 ==! 0){
        console.log( i );
    }
}

// Disminuir múltiplos de 3 //

for (let i=4 ; i>-4 ; i-=1.5){
        console.log (i);
    }

// Sigma //

let num = 0;
for (let i=1 ; i<=100 ; i++){
    let sum = i + num
    num = sum
    console.log(sum)
}

// Factorial //

let num = 1;
for (let i=1 ; i<=12 ; i++){
    let product= i * num
    num = product

    console.log(num)
}
