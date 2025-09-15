//ejercicio 1-1
let alumno = {
    nombre: "Emma",
    apellido: "Meca",
    edad: 25,
    carrera: "web"
};

console.log(alumno.nombre)
console.log(alumno.edad)
console.log(alumno.carrera)
console.log(alumno.apellido)

//ejercicio 1-2
const { nombre, edad, carrera, apellido } = alumno;
console.log(nombre);
console.log(edad);
console.log(carrera);
console.log(apellido);

//ejercicio 1-3
alumno.print = function () {
    crossOriginIsolated.log(`Nombre: ${this.nombre},  Edad: ${this.edad}, Carrera: ${this.carrera}`);
}
alumno.print();

//ejercicio 2-1
const alumno2 = { ...alumno }
console.log(alumno2)

// ejercico 2-2
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [array1, array2];
console.log(array3);

//ejercicio 2-3
function suma(...numeros) {
    return numeros.reduce((acc, curr) => acc + curr, 0);
}

console.log(suma(1, 2, 3, 4, 5));

//ejercicio 2-4
const { nombre: NombreAlumno, ...restoDatos } = alumno;
console.log(NombreAlumno); //Juan"
console.log(restoDatos); //{edad: 20, carrera: "Ingeniería"}

const [primero, ...restoArry] = array3;
console.log(primero); //[1]`
console.log(restoArry); //[2, 3, 4, 5, 6]

//ejercicio 3-1
const parrafo = document.getElementsByiD('parrafo');
parrafo.textConstent = `Nombre: ${alumno.nombre}, Edad: ${alumno.edad}, Carrera: ${alumno.carrera}`;

//ejercicio 3-2
const lista = document.getElementsByiD('lista');
const li = `<li>Uno</li><li>Otro</li>`;
lista.innerHTML = li;

//ejercicio 3-3
parrafo.addEventListener('click', () => {
    parrafo.style.color = 'red';
});

//ejercicio 3-4
const boton = document.getElementsByiD('boton');
boton.addEventListener('click', () => {
    lista.innerHTML = '';
});

//ejercicio 3-5
const contador = document.getElementsByiD('contador');
const boton2 = document.getElementsByiD('boton2');
let count = 0;

boton2.addEventListener('click', () => {
    count++;
    contador.textConstent = count;
});