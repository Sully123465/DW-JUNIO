//Ejercico 1-1
let primerParrafo = document.querySelector("#primer-parrafo");
primerParrafo.innerText = "Hola Mundo";

//Ejercicio 1-2
const segundoParrafo = document.querySelector("#segundo-parrafo");
segundoParrafo.style.color = "blue";
segundoParrafo.style.fontSize = "20px";

//Ejercicio 1-3
const buton1 = document.querySelector("#buton1");
const buton2 = document.querySelector("#buton2");
const tercerParrafo = document.querySelector("#tercer-parrafo");

buton1.addEventListener("click", () => {
    tercerParrafo.style.color = "red";
});

buton2.addEventListener("click", () => {
    tercerParrafo.style.color = "green";
});

//Ejercicio 2-1
const PI = 3.1416;
let radio = 5;

function areaCirculo(r) {
    return PI * r * r;
}

console.log("El área del círculo es: " + areaCirculo(radio));

//Ejercicio 3-1
const buton3 = document.querySelector("#buton3");
buton3.addEventListener("click", () => {
    alert("Has hecho click en el botón");
});