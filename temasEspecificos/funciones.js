function suma(num) {
  return num + num;
}

console.log(`Esta es a funcion suma que devuelve ${suma(3)}`);

const resta = (num) => num - 10;

console.log(`Esta es a funcion resta que devuelve ${resta(30)}`);

//CALLBACK
//FUNCIONES COMO PARAMETROS

const funcionAEjecutar = (func, paramUno, paramDos) => func(paramUno, paramDos);

function callback(paramUno, paramDos, func) {
  return func(paramUno, paramDos);
}

/* const resta = (numUno, numDos) => numUno - numDos; */
const multiplicar = (numUno, numDos) => numUno * numDos;

console.log(funcionAEjecutar(resta, multiplicar, 5, 5));

//EJERCICIO 11
const arreglos = {
  join: (array, parametro) => {},
  pop: (array) => array[array.length - 1],
  filter: (array, func) => {},
  map: (array, func) => {},
};

arreglos[pop];

const pop = (array) => {
  let posicion = array.length - 1;
  console.log(posicion, "<--- soy la posicioon");
  return array[posicion];
};
const join = () => {};
const filter = () => {};

pop([1, 2, 3, 4, 5]);

/////////////////////////////////

function canto() {
  console.log("feliz cumpleaños a ti");
  console.log("feliz cumpleaños a ti");
  console.log("feliz cumpleaños querido pledu");
  console.log("feliz cumpleaños a ti");
}

const datosPersonales = (nombre, apellido, edad) => {
  console.log(`Hola ${nombre} ${apellido}, un gusto tenerte aquí`);
  console.log(`Bienvenid@ a los ${edad} años`);
};

let staffDeP5 = ["Santi", "Lucia", "Gigi", "Abigail"];
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
  }
}

let numeros = [1, 2, 3, 4, 5];
function problema(num, array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArray.push(element + num);
  }
  return newArray;
}
problema(2, numeros);

let i = 0;
while (i < frase.length) {
  //codigo
  const element = frase[i];
  console.log(element, "<--- WHILE");
  //CONDICION DE CORTE
  i++;
}

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

const contador = (inicio, fin) => {
  for (let i = inicio; i <= fin; i++) {
    console.log(i);
  }
};

let staff = ["Santi", "Lucia", "Gigi", "Abigail"];
staff.forEach((element) => console.log(element));

let inicio = 1;
let maximo = 5;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

/////////////////////////////////////////
//variable GLOBLAL

/* let primerNombre = "Florencia";

function saludar(nombre, apellido) {
  //variable LOCAL
  let edad = 24;
  console.log(`Hola ${nombre} ${apellido}, cómo estás? Tu edad es de ${edad}`);
  console.log(primerNombre, "<--- soy primerNombre DENTRO de la funcion");
  console.log(edad, "<-- soy edad DENTRO DE LA FUNCION"); */

/* function chau(param) {
  console.log(param);
} */

/* const chau = (param) => param;

console.log(chau("arrow function")); */

/* function areaTriangulo(base, altura) {
  console.log((base * altura) / 2);
}

function saludarTres(nombre1, nombre2, nombre3) {
  console.log(`Hola ${nombre1}`);
  console.log(`Hola ${nombre2}`);
  console.log(`Hola ${nombre3}`);
} */

/* function cantarCumple(persona, regalo) {
  console.log(`Feliz Cumpleaños ${persona}`);
  console.log(`Tu regalo es ${regalo}`);
}

let nombre = prompt("Como te llamas?");
let presente = prompt("Que te gustaría recibir");
cantarCumple(nombre, presente); */

/* function cuadrado(numero) {
    numero + 1
  return numero * numero;
}

let resultado = cuadrado(5);
console.log(resultado, "<--- soy el console.log del return"); */

/* function sumarLosTres(num1, num2, num3) {
  return num1 + num2 + num3;
} */

const sumarLosTres = (num1, num2, num3) => num1 + num2 + num3;
console.log(sumarLosTres(1, 2, 3));

/* function cuadrado(num) {
  return num * num;
} */

const cuadrado = (num) => num * num;
console.log(cuadrado(5));

/* function decirHola() {
  console.log("¡Hola!");
} */

let decirHola = () => console.log("Hola!");
decirHola();

// 6 SIMILAR .SPLIT()
function split(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    array.push(element);
  }
  return array;
}


// 8 MOVER CEROS
function moveZeros(array) {
  NewArray = array;
  for (let i = 0; i < NewArray.length; i++) {
    //const element = array[i];
    if (NewArray[i] === 0) {
      let splice = NewArray.splice(i, 1);
      NewArray.push(Number(splice));
    }
  }
  return NewArray;
}