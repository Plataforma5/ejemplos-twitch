/* let producto1 = "iphone";
let producto2 = "smart tv";
let producto3 = "ipad";
let producto4 = "samsung"; */

/* let coleccionRandom = [
  "Hola",
  22,
  true,
  null,
  function () {
    console.log("hello");
  },
  ["hola", "chau", ["compu", "camara", "teclado"]],
  () => {
    console.log("soy una arrow function");
  },
];

console.log(coleccionRandom[5][2][1]);

let grupoDeAmigos = [
  ["Harry", "Ron", "Hermione"],
  ["Spiderman", "Hulk", "Ironman"],
  ["Penélope Glamour", "Pierre Nodoyuna", "Patán"],
]; */

let bariloche = ["Abigail", "Lucas", "Ramiro", "Florencia"];
/* console.log(bariloche, "<--- array original");

let elementosEliminados = [];

let eliminado = bariloche.pop();
elementosEliminados.push(eliminado);

console.log(elementosEliminados, "<--- LOS ELIMINADOS");
console.log(bariloche, "<--- array modificado"); */

console.log(bariloche, "<--- array original");

//METODO .PUSH(parametro) ==> AGREGA UN ELEMENTO AL FINAL DEL ARRAY
//bariloche.push("Eduardo", "Manuel", "Lautaro");
//console.log(bariloche, "<--- array PUSH");

//METODO .POP() ==> QUITA EL ÚLTIMO ELEMENTO DEL ARRAY
//bariloche.pop();
//console.log(bariloche, "<--- array POP");

//METODO .UNSHIFT(parametro) ==> AGREGA ELEMENTOS AL INICIO DEL ARRAY
//bariloche.unshift("Lautaro", "Cesar", "Patricia");
//console.log(bariloche, "<--- array UNSHIFT");

//METODO .SHIFT() ==> QUITA EL PRIMER ELEMENTO DEL ARRAY
//bariloche.shift();
//console.log(bariloche, "<--- array SHIFT");

//METODO .indexOf(parametro) ==> verifica la posición de un elemento de un Arreglo y nos devuelve su Índice.
//console.log(bariloche.indexOf("Lucas"), "<---INDEX OFF");

//METODO .SLICE() ==> CLONA EL ARRRAY ORIGINAL
// let newArray = bariloche.slice(1, 3);
// console.log(newArray, "<---NEWAARRAY");
// console.log(bariloche, "<---BARILOCHE");

//METODO .SPLICE() ==> REMUEVE DIFERENTES ELEMENTOS DEL ARRAY
// let eliminado = bariloche.splice(2, 2);
// console.log(bariloche);
// console.log(eliminado);

//METODO .JOIN(parametro) ==> JUNTAR LOS ELEMENTOS EN BASE AL VALOR DE LA VARIABLO Y LO CONVIERTE EN UN STRING
// let string = bariloche.join();
// console.log(bariloche);
// console.log(string);

//METODO .SPLI() ==> CORTAR LOS ELEMENTOS EN BASO AL VALOR DEL PARAMETRO Y LO CONVIERTE EN UN ARRAY
// let string = "Hola Plataforma 5";
// console.log(string.split(" "));

//iteracion de arreglos
let colores = ["Rojo", "Azul", "Verde", "Amarillo", "Morado", "Cian"];
let string = "LES ESTOY CHORIANDO";

//FOR LOOP
for (let i = 0; i < colores.length; i++) {
  const element = colores[i];
  console.log(element, "<-- FOR LOOP");
}

//FOR EACH
colores.forEach((parametro) => console.log(parametro, "<--- FOR EACH"));

("------------------------------CLASE FOR EACH------------------------------");

// El metodo forEach(): ejecuta la funcion indicada una vez por cada elemento del array.

// const array = ["a", "b", "c"];

array.forEach((element) => console.log(element));

// output esperado: "a"
// output esperado: "b"
// output esperado: "c"

/* 
NOTA: No hay forma de detener o cortar un bucle forEach() ; si nosotros necesitamos que se produzca este comportamiento, vamos a necesitar un iteración simple!

El bucles forEach() en JS, y en general en muchos lenguajes, es un bucle que simplemente recorre los objetos de un array!
*/

/* --------------------------------------------------------------------------------- */

// const array = ["a", "j", "f", "k"];

array.forEach(function (element, index, arreglo) {
  console.log(element);
  console.log(index);
  console.log(arreglo);
});

//aca lo que estamos mandando a imprimir en la consola es el elemento, la posicion y el arreglo en total!

/* ------------------------------------------------------------------------------------ */

const arreglo = [2, 4, 6, 8];

arreglo.forEach((element) => console.log(element * 2));

/* ------------------------------------------------------------------------------------------ */

/* Tenemos un array de números, y queremos crear un array nuevo con todos los números elevados al cuadrado.
let array = [1, 3, 5] ==> [1, 9, 25] */

let array = [1, 3, 5];

function elevado(array) {
  let newArray = [];
  array.forEach(function (n) {
    newArray[i] = n * n;
  });
  return newArray;
}
elevado(array);

/* 
Tenemos un array de números en la variable numbers.
Necesitamos calcular la suma total de todos los números en el array, 
utilizando forEach.
let numbers = [6, 1, 34, 94, 3, 17] ==> 155 */

/* let numbers = [2, 4, 10, 20]; //=> 36 */

let sumaTotal = (numero) => {
  //CREAMOS LA VARIABLE sumaTotal y como valor le pasamos una arrow function
  let acumuladora = 0;
  numero.forEach(function (num) {
    //a nuestro parametro numbers le instaciamos el metodo forEach() para que recorra y haga un bucle en todos los elementos del arreglo!
    acumuladora += num;
  });
  return acumuladora;
};
sumaTotal(numbers);

/* let numbers = [6, 1, 34, 94, 3, 17]; */

function sumaTotal(numbers) {
  //craemos la funcion le dimos como nombre "sumaTotal", y le passamos un parametro
  let total = 0; // creamos la variable "total" y la estamos utilizando como acumuladora!

  numbers.forEach(function (num) {
    //a nuestro parametro numbers le instaciamos el metodo forEach() para que recorra y haga un bucle en todos los elementos del arreglo!
    total += num;
  });
  return total; //en ultima instancia pedimos que retorne la variable en donde tiene la suma total de todos los elementos!
}
sumaTotal(numbers);


("---------------CLASE MAP------------------");

/* 
El METODO MAP, es una pieza fundamental para la programacion funcional!!

Que es lo que hace?
 Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. Se puede usar en los arreglos de JAVASCRIPT

 El método map() nos permite devolver un nuevo arreglo de datos partiendo de un arreglo, dicho así, NO CAMBIAMOS los datos del arreglo original, ahora tenemos un nuevo arreglo con los valores que queremos como resultado.

SINTAXIS:

arreglo.map(function(elementoActual, indice, arregloOriginal) {  ... código });

map() recibe como parámetro una función la cual recibe 3 parámetros, el elemento actual, indice del elemento actual y el arreglo original.

Sintaxis
var nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg])

value: El elemento actual del array que se esta procesando.
index: El elemento actual del array que se esta procesando
array: El array sobre el que se esta produciendo el metodo map
thisArg: ES un valor opcional, podemos usarlo como this al ejecutar la funcion
*/

//EJERCICIOS DE PRUEBA:

/* TRIPLICADOR

Tenemos un arreglo de numeros y necesitamos obtener un nuevo arreglo con todos los elementos del original multiplicados por 3.

let numeros = [3, 10, 20, 50] => [9, 30, 60, 150]
*/

// let numeros = [3, 10, 20, 50];
//el metodo map recibe la funcion transformadora y a su vez, recibe los parametros que va a transformar.
const triplicador = numeros.map(function (numero) {
  return numero * 3;
});
console.log(triplicador);
/* ------------------------------------------------- */
//MULTIPLICADOR
//arrow function
// let numeros = [2, 20, 40];

const multiplicador = numeros.map((numero) => numero * 2);
console.log(multiplicador);


("-----------------CLASE FILTER---------------");
/* 
El metodo Filter() : nos permite filtrar solo los elementos que deseamos y devolverlos en un nuevo array.

Es como una maquina que va agarrando cada elemento y decide si pasa o no al nuevo array, si algun elemento no cuenta con cierta condicion es totalmente descartado!

 El metdo Filter toma una Función que comprueba cada elemento del array para ver si cumple la condición (también llamada predicado). Retorna true si el elemento la cumple o en caso contrario retornará false.

*/

//EJERCICIO SIMPLE:

// const ciudades = ["Madrid", "Buenos Aires", "Nueva York"];

/* const newArray = ciudades.filter((ciudad) => {
  console.log(ciudad);
})

("-----------------------------------------------");

// const ciudades = ["Madrid", "Buenos Aires", "Nueva York"];

const newArray = ciudades.filter((ciudad) => {
  console.log(ciudad);
  return ciudad.length > 6;
});
console.log(newArray); */

/* ------------------------------------------- */

/* 
NUMEROS PARES
Filtrar solamente los numeros pares del siguiente arreglo!

Utils: let numbers = [3, 7, 6, 13, 2, 24, 99];
*/

let numbers = [3, 7, 6, 13, 2, 24, 99];

let numeros = numbers.filter((arr) => {
  if (arr % 2 == 0) {
    return arr;
  } 
});
console.log(numeros)

/* 
EJERCICIO:

Pongamos un ejemplo muy sencillo, de la siguiente lista de números, queremos obtener solamente los mayores que 10.

Utils:
let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]


LO QUE PODRIAMOS HACER DE MANERA SIMPLE SERIA LO SIGUIENTE:

*/

