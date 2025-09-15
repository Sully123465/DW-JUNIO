console.log("Ejercicio 1 - 1");
let array = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
console.log(array);

console.log("Ejercicio 1 - 2");
console.log(array[3]);
console.log(array[6]);

console.log("Ejercicio 1 - 3");
console.log(array.length);

console.log("Ejercicio 1 - 4");
array.unshift(0);
console.log(array);

console.log("Ejercicio 1 - 5");
array.push(11);
console.log(array);

console.log("Ejercicio 1 - 6");
array.splice(5, 2);
console.log(array);

console.log("Ejercicio 2 - 1");
let pos = array.indexOf(7);
console.log(pos);

console.log("Ejercicio 2 - 2");
array.reverse();
console.log(array);

console.log("Ejercicio 2 - 3");
let text = array.join(", ");
console.log(text);

console.log("Ejercicio 2 - 4");
let array2 = text.split(", ");
console.log(array2);

console.log("Ejercicio 2 - 5");
array.forEach((num, i) => {
    console.log(`El numero ${num} esta en la posicion ${i}`);
});

console.log("Ejercicio 2 - 6");
array.forEach((num, i) => {
    console.log(num + "Es un numero");
});

console.log("Ejercicio 3 - 1");


console.log("Ejercicio 3 - 2");
let filter = array.filter(num => num > 5);
console.log(filter);

console.log("Ejercicio 3 - 3");
let sum = array.reduce((acc, num) => acc + num, 0);
console.log(sum);

console.log("Ejercicio 3 - 4");
let array3 = [5, 6, 7]
let [a, b, c] = array3;
console.log(a, b, c);

console.log("Ejercicio 3 - 5");
let array4 = ["perro", "gato", "raton", "caballo", "vaca", "oveja", "cerdo"];
let lista = document.getElementById("lista");
let lis = array4.map( animal1 => {
    let li = document.createElement("li");
    li.textContent = animal1;
    return li;
});

lis.forEach(li => lista.appendChild(li));