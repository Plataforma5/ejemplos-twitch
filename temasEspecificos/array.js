
let productoUno = "Samsung";
let productoDos = "Ipad";
let productoTres = "Iphone";

let productos = ["samsung", "ipad", "iphone", "samrt tv"];

//CANTIDAD DE ELEMENTOS DE UN ARREGLO
productos.length;
//devuelve ==> 4

//ACCEDER A CADA ELEMENTO DEL ARREGLO
// ==> INICIA CONTANDO DESDE 0
productos[0];
//devuelve ==> "samsung"

let elementos = [
  "Buen día",
  22,
  -45,
  0.5,
  true,
  null,
  function () {
    console.log("soy una funcion");
  },
  ["perro", "gato", "loro", "conejo", ["Rocky", "Toto", "Toby", "Firu"]],
  () => {
    console.log("soy una arrow function");
  },
];

//ACCEDER AL ÚLTIMO ELEMENTO DE UN ARREGLO
let ultimoElemento = elementos.length - 1;
elementos[ultimoElemento];

///////////////////////////////
let nombres = ["Luca", "Daniel"];
console.log(nombres);

//METODO array.PUSH(parametro) ==> AGREGA UN ELEMENTO AL FINAL DEL ARRAY
nombres.push("Ayelen");
nombres.push("Danira", "Carlos", "Laira");

//METODO array.POP() ==> QUITA EL ÚLTIMO ELEEMNTO DEL ARRAY
//se puede guardar el elemento eliminado en una variable
let eliminado = nombres.pop();
console.log(eliminado);

//METODO array.UNSHIFT(parametro) ==> AGREGA ELEMENTOS AL INICIO DEL ARRAY
nombres.unshift("Walter");
nombres.unshift("Susana", "Isabel", "Roman");

//METODO array.SHIFT() ==> QUITA EL PRIMER ELEMENTO DEL ARRAY
nombres.shift();
let primerEliminado = nombres.shift();

//METODO array.SLICE() ==> CLONA EL ARRAY ORIGINAL
let newNombres = nombres.slice(1, 4);

//METODO array.SPLICE(posicion, cantidadDeElementosABorrar) ==> REMUEVE DIFERENTES ELEMENTOS DEL ARRAY
let borrado = nombres.splice(2, 2);

//METODO arra.JOIN(parametro) ==> JUNTAR LOS ELEMENTOS EN BASE AL VALOR DE LA VARIABLE Y LO CONVIERTE EN UN STRING
nombres.join(" ");
//devuelve ==> 'Roman Walter Ayelen Danira Carlos Laira'
nombres.join("-");
//devuelve ==> 'Roman-Walter-Ayelen-Danira-Carlos-Laira'

//METODO string.SPLIT() ==> CORTAR LOS ELEMENTOS EN BASE AL VALOR DEL PARAMETRO
let saludo = "Hola a todos";
saludo.split("");
//devuelve ==> ['H', 'o', 'l', 'a', ' ', 'a', ' ', 't', 'o', 'd', 'o', 's']
saludo.split(" ");
//devuelve ==> ['Hola', 'a', 'todos']

//METODO array.indexOf(parametro) ==> VERIFICA LA POSICION DE UN ELEMENTO DEL ARRAY  Y NOS DEVUELVE SU INDICE
nombres.indexOf("Danira");
//devuelve ==> 3

//METODO array.INCLUDES(parametro) ==> VERIFICA SI EL PARAMETRO EXISTE DENTRO DEL ARRAY
//TIRA TRUE SI SI EXISTE Y FALSE SI NO EXISTE
nombres.includes("Carlos");

//METODO array.FILTER(function)
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

//////////////////////////////////////

//ITERACION DE ARREGLOS

let colores = ["Morado", "Bordo", "Cian", "Azul", "Verde", "Amarillo", "Rojo"];

//WHILE
let inicio = 0;
while (inicio < colores.length) {
  console.log(colores[inicio]);
  inicio++;
}

//FOR LOOP
for (let i = 0; i < colores.length; i++) {
  const element = colores[i];
  console.log(element);
}

//FOR EACH
/* 
NOTA: No hay forma de detener o cortar un bucle forEach() ; si nosotros necesitamos que se produzca este comportamiento, vamos a necesitar un iteración simple!

El bucles forEach() en JS, y en general en muchos lenguajes, es un bucle que simplemente recorre los objetos de un array!
*/
colores.forEach((parametro) => console.log(parametro));

//MAP
/* El METODO MAP, es una pieza fundamental para la programacion funcional!!

Que es lo que hace?
 Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. Se puede usar en los arreglos de JAVASCRIPT

 El método map() nos permite devolver un nuevo arreglo de datos partiendo de un arreglo, dicho así, NO CAMBIAMOS los datos del arreglo original, ahora tenemos un nuevo arreglo con los valores que queremos como resultado.

SINTAXIS:

arreglo.map(function(elementoActual, indice, arregloOriginal) {  ... código });

map() recibe como parámetro una función la cual recibe 3 parámetros, el elemento actual, indice del elemento actual y el arreglo original.
 */

colores.map((parametro) => console.log(parametro));
