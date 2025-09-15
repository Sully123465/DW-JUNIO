// Ejercicio 1

let a = 3;
let result = 'Menor a 0'

if (a >= 0) {
    result = 'Mayor a 0'
}

console.log(result)

// Ejercicio 2
const mayorEdad = 5;
if (mayorEdad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// Ejercicio 3
let x =51;

if (x < 70) {
    console.log("Es mayor a 50");
} else if (x < 5) {
    console.log("Es menor a 5");
} else {
    console.log("Está entre 5 y 50");
}

// Ejercicio 4
const mascota = '';
switch (mascota) {
    case "perro":
        console.log("Tengo un perro");
        break;
    case "gato":
        console.log("Tengo un gato");
        break;
    case "loro":
        console.log("Tengo un loro");
        break;
    default:
        console.log("No tengo mascota");
        break;
}

// Ejercicio 5
let str = '';

for (let i = 0; i < 16; i++) {
    STR = str + i;
}
console.log(STR);

// Ejercicio 6
let n = 0;

while (n < 3) {
    n++;
}

console.log(n);

// Ejercicio 7
//let result = '';
//let i = 0;

//do {
    //i =i + 1;
    //result = result + i;
//} while (i < 5);

//console.log(result);

// Ejercicio 8
const array1 = ['a' , 'b' , 'c'];

array1.forEach(element => console.log(element));