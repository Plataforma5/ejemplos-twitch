let edad = prompt("¿Qué edad tenés?");

// ESTOY CONDICIONANDO LAS EDADES DEL BAR
if (edad >= 18) {
  //codigo
  console.log("Ya sos mayor de edad");

  if (edad <= 20) {
    console.log("Podés pasar al bar pero no podés ingerir alcohol");
  } else if (edad == 21) {
    console.log("Bienvenid@ a la mayoria de edad! Tenés una bebida gratis");
  } else {
    console.log("Podés pasar al bar y tomar una bebida");
  }
} else {
  //codigo
  console.log("Aún sos menor, NO PODÉS PASAR AL BAR");
}

//TERNARIOS
// condicion ? true : false

edad >= 18 ? console.log("Ya sos legal") : console.log("Todavía sos menor");

// DECLARACION ==> =
let x = 130;
x = "Hola";

// OPERADORES

//COMPARADORES DE IGUALDAD BLANDA--> ==
23 == "23";

//COMPARADORES DE IGUALDAD ESTRICTA --> ===
23 === "23";

// < > >= <=
34 > 23;
98 < 9;
45 <= 45;
12 >= 0;

//COMPARADORES DE DESIGUALDAD BLANDA -->
"Hola" != "hola";

//COMPARADORES DE DESIGUALDAD ESTRICTA -->
54 !== "54";

//LOGICOS --> || , &&
//BASTA CON QUE UN LADO DE true PARA QUE EL CODIGO SEA true
false || true;

//LOS DOS LADOS DEBEN SER true PARA QUE EL CODIGO SEA true
true && true;

//NEGACIÓN
!true;
!!false;

//PRACTICA

let z = 10;
let y = 35;
let str = "";
let saludo = "hola";

!(z !== 21 && y > 34) && !(z == "10" || z >= y);

"10" === z || "" == str;

!(z == "3" || z === y) && y !== 8 && z <= y;
