//Siempre Hambriento //
let Arreglo = [3.14, "comida", "pastel", true, "comida"];

function siempreHambriento() {
  for (i = 0; i < Arreglo.length; i++) {
    if (Arreglo[i] === "comida") {
      console.log("Delicioso");
    } else {
      console.log("Tengo Hambre");
    }
  }
}

siempreHambriento();

// Filtro paso alto//

let filteredArr = [];
let NewArray = [];
let cutoff;
function highPass(filteredArr, cutoff) {
  for (var i = 0; i < filteredArr.length; i++) {
    if (filteredArr[i] > cutoff) {
      NewArray.push(filteredArr[i]);
    }
  }
  return NewArray;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//Average//

function betterThanAverage(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  var avg = sum / arr.length;
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
      count++;
    }
  }
  return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vueltacopy

//funcion reversa //

function reverse(arr) {
  var left = 0;
  var right = arr.length - 1;
  while (left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

//Fibonacci//
function fibonacciArray(n) {
  var fibArr = [0, 1];
  while (fibArr.length < n) {
    var actual = fibArr[fibArr.length - 1];
    var anterior = fibArr[fibArr.length - 2];
    fibArr.push(anterior + actual);
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result);
