// Deben crear una función llamada paresEimpares
// que reciba 3 parámetros
// los dos primeros que sean números y el tercero una palabra (string)
// la función tiene que mostrar en la consola los números entre el cero y el primer parámetro que recibe
// pero debe en primer lugar mostrar todos los números pares
// y luego los impares
// además, cuando el número sea divisible por el segundo parámetro pasado a la función, en vez de loggearlo, debe imprimir la palabra que recibe como tercer parámetro.

const paresEImpares = (parametroUno, parametroDos, string) => {
  for (let i = 0; i <= parametroUno; i++) {
    /* if (i % 2 === 0) {
        console.log(i);
      } else {
        console.log(i);
      } */

    //TERNARIOS
    //  condicion ? TRUE : FALSE
    i % parametroDos == 0 ? console.log(string) : console.log(i);
  }
};

paresEImpares(100, 7, "plataforma");
