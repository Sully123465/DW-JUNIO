const boton1 = document.getElementById("boton1");
const textarea1 = document.getElementById("texto1");
const primerParrafo = document.getElementById("primer-parrafo");

boton1.addEventListener("click", () => {
    const texto = textarea1.value;
    primerParrafo.innerText = texto;
});

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const boton2 = document.getElementById("boton2");
const result = document.getElementById("result");

boton2.addEventListener("click", () => {
  result.innerText = parseFloat(numero1.value) + parseFloat(numero2.value);
});