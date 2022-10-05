// ESTOY CONDICIONANDO LA EDAD PARA EL BAR
let edad = Number(prompt("Ingrese su edad."));
let nombre = prompt("cómo te llamas");
let cumpleaniero = "jaime";

if (cumpleaniero === nombre) {
  alert("BIENVENIDO JAIME A TU CUMPLEAÑOS");
} else {
  alert("Hola amigo de jaime");
}

//TERNARIO
//condicion              ?                   TRUE                  :               FALSE
cumpleaniero === nombre
  ? alert("BIENVENIDO JAIME A TU CUMPLEAÑOS")
  : alert("Hola amigo de jaime");

/* if (edad >= 18) {
  alert("Bienvenido al Bar");
  if (edad < 20) {
    alert("Podes pasar pero no podés ingerir alcohol");
  } else {
    alert("Discfruta de la bebida");
  }
} else {
  alert("No podés ingresar al bar");
} */

/* if (edad > 21) {
  //Me falta termina la condicion del saludo a los de 20 años
  alert("Bienvenido al bar");
} else if (edad === 17) {
  alert("te falta poco para entrar ");
} else if (edad == 15) {
  alert("Feliz 15 años");
} else {
  alert("no pdoes entrar");
} */

// = DECLARAR
let n = "pepito";
let apellido = "torrez";

// == COMPARACION
nombre == apellido;

// === COMPARACION ESTRICTA
nombre === nombre;

//OPERADORES DE NEGACION

console.log("true" === false);

let x = 3;
let y = 8;

!(x == "3" || x === y) && !(y !== 8 && x <= y);
