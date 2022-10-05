/* 
NUMERO PRIMO

Necesitamos crear una calculadora que pida un número entero mayor que 1 y que escriba o que nos devuelva si el número es primo o no.
¿cuando un numero es primo?
Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/

let num = parseInt(prompt("Introduce un número")); //creamos la variable num para guardar en su valor el numero que introduzca el usuario

//logica del ejercicio averiguar entre que numeros da una divicion exacta ; para saber si un numero es primo o no, es si la division exacta sea entre si mismo o la unidad

//una forma de imprimir los numeros primos seria crear la variable divisores
let divisores = 0;
//como buena practica, antes del bucle sacamos el numero 1 y no se ejecute
if (num === 1) console.log("El número no es válido");
else {
  //creamos un bucle para recorrer todos los numeros desde 2 hasta el numro que da el usuario ; 2 es el primer numero primo
  for (let i = 2; i < num; i++) {
    //si entra a este bloque de codigo del condicional significa que no es primo
    if (num % i == 0) {
      console.log(`${num} / ${i} = ${num / i} No es primo`);
      divisores++;
      break; //para que se rompa el bucle
    }
  }
}
//preguntamos si divisores es = a 0 que se consologuee el numero primo
if (divisores == 0 && numero !== 1) console.log(`${num} es primo`);
