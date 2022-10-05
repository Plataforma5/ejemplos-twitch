/* 
DEVOLVIENDO LA MAYOR SUMA

Debemos crear una función que reciba el arreglo de números desordenados que se pasa en utils y devuelva la suma entre los dos números más grandes que existan.

Utils: 
[10, 105, 4, 3, 1, 2, 73, 86, 10, 3]

Ejemplo: 

minSum([ 6, 5, 4, 3, 10, 2, 1]) ==> 16
minSum([10, 105, 4, 3, 1, 2, 73, 86, 10, 3]) ==> 191
 */

//metodo .sort(): ordenar los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado
//function minSum (){}

let minSum = function (array) {
  array = array.sort((a, b) => b - a);
  return array[0] + array[1];
};

minSum([6, 5, 4, 3, 10, 2, 1]);
