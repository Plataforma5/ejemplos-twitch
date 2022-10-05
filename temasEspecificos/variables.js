let nombre = prompt("Cómo es tu nombre?");
let apellido = prompt("Cómo es tu apellido?");

let edad = Number(prompt("Cuál es tu edad?"));

let nombreEnMayuscula = nombre.toUpperCase();

alert(`Hola ${nombreEnMayuscula} ${apellido} tu edad es de ${edad} años`);

alert(`En 7 años vas a tener ${edad + 7}`);

console.log(nombre.concat(apellido));
//abigailsalas

/* let nombre = prompt("Como te llamas?");

alert(`Hola ${nombre}, ésto es javascript`);

let edad = parseInt(prompt("que edad tenés?"));

alert(`En 5 años vas a tener ${edad + 5}`);

let añoQueNaciste = 2022 - edad;

alert(`Vos naciste en el año ${añoQueNaciste}`); */

/* let numero = parseInt(prompt("Tirate un número y te digo si es par o no"));

if (numero % 2 === 0) {
  alert("Es par, ñeri");
} else {
  alert("Es impar, pa");
} */

let lugar = prompt("a dónde te vas??");

let pasaje = parseInt(prompt("cuanto sale el pasaje de ida y vuelta"));

let comida = prompt("que vas a comer aproximadamente");

let cantidadDeComida = parseInt(prompt("cuantas veces al dia vas a comer"));

let plataParaLaComida = parseInt(prompt("cuanto pensas gastar por comida"));

let tiempo = parseInt(prompt("cuantos dias te pensas quedar"));

let calculoDiario = plataParaLaComida * cantidadDeComida;

let calculoFinal = calculoDiario * tiempo;

alert(
  `Si te vas a ${lugar}, necesitas un presupuesto aproximado de ${
    calculoFinal + pasaje
  } para viajar y no morirte de hambre los ${tiempo} dias que te vas`
);

let string = prompt("Por favor, ingresa un texto");

let cantidadDeCaracteres = string.length;

alert(string.length);

console.log(cantidadDeCaracteres, "<--- SOY LA CANTIDAD DE CARACTERES");
