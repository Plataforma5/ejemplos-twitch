/* Separador
Debemos crear una función que reciba dos parámetros, un arreglo de números y un divisor que va a decirnos que numeros del arreglo son divisibles por ese segundo parametro. Esta deberá retornar un arreglo con esos numeros!
 */
//Ejemplo:

console.log(separador([1, 2, 3, 4, 5, 6], 2)); //debe retornar  [2, 4, 6]
console.log(separador([1, 2, 3, 4, 5, 6], 3)); //debe retornar  [3, 6]

function separador(arr, num) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % num === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//El metodo Filter() : nos permite filtrar solo los elementos que deseamos y devolverlos en un nuevo array.

let separador = (arr, divisor) => {
  return arr.filter((el) => el % divisor == 0);
};
separador([1, 2, 3, 4, 5, 6], 2);
