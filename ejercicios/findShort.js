/*FINDSHORT
  
  crea una funcion findShort() que tome como argumento un string
  La funcion debe devolver la longitud de la palabra mas corta
  Si se recibe un string vacio, retornar 0.
  
  Ejemplos:
  
  findShort("plataforma 5") ==> 1
  findShort("la mostaza es el mejor aderezo") ==> 2
  findShort("bootcamp") ==> 8
  */

function findShort(string) {
  //dividir las palabras de la cadena : .split()
  let palabras = string.split(" "); //llevamos a nuestro parametro string a un arreglo de palabras, spliteando con las comillas y el espacio
  let menorValor = palabras[0]; //guardamos en una variable complementaria el menor valor, en este caso el primer valor de lo que generamos anteriormente
  //recorrer el arreglo de palabras e identificar cual es la menor
  for (let i = 0; i < palabras.length; i++) {
    //luego recorrimos con el ciclo for
    // guardar el menor valor
    if (palabras[i].length < menorValor.length) {
      //si el elemento de longitud era menor al que ya teniamos guardado lo suplantara
      menorValor = palabras[i]; //de esta forma nos aseguramos que entre a todos los valores del arreglo y quedarnos con el menor valor
    }
  }

  return menorValor.length; //y como ultima opcion retornamos el menor valor de la cadena de string
}
//-----------------------------------------------------------------------------------------------
//REFACTORIZACIÓN: USANDO METODOS DE ARRAYS

//El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
//cadena.split([separador][,limite])
/* 
  El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. arr.sort([compareFunction])
  
  Para comparar números en lugar de strings, la función de comparación puede simplemente restar b de a. La siguiente función ordena el array de modo ascendente:
  
  function compareNumbers(a, b) {
    return a - b;
  }
   */

function findShortRefactorizada(string) {
  return string
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .pop().length;
}
