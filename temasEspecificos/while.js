let minutos = 3;
let minutero = 1;
let segundos = 60;
let segundero = 1;

while (minutero <= minutos) {
  while (segundero <= segundos) {
    if (segundero == 60) {
      console.log(`${minutero} minutos`);
    } else {
      console.log(`${minutero} minutos, ${segundero} segundos`);
    }
    segundero++; // Esta es la condición de corte o medida de seguridad del loop anidado.
  }
  segundero = 1; // Reestablecemos el valor de la variable para que vuelva a ser true.
  minutero++; // Esta es la condición de corte o medida de seguridad del loop madre.
}

/* let input = prompt("Escriba su edad, por favor.");

while (!input) {
  alert("No recibimos la información.");
  input = prompt("Danos algun nombre");
}

alert(`¡Gracias! Su nombre es: ${input}.`); */

let num = 1;
while (num <= 30) {
  //codigo
  console.log(num);

  //CONDICION DE CORTE
  num++
}

console.log("Ya sali del loop");

// ++ SUMA DE AS UNO
// += SUMA E IGUALA UNA VARIABLE

var invitadosActuales = 1;
var maximoInvitados = 5;
while(invitadosActuales <= maximoInvitados){
    var mensaje = "¡Bienvenido, " + invitadosActuales + "!";
    var invitadosPresentes = 1;
    while(invitadosPresentes < invitadosActuales){
        if(invitadosPresentes == 1){
            mensaje += " Te presento a 1";
        }else if(invitadosPresentes == invitadosActuales-1){
            mensaje = mensaje + " y a " + invitadosPresentes + ".";
        }else{
            mensaje = mensaje + ", a " + invitadosPresentes;
        }
        invitadosPresentes++;
    }
    console.log(mensaje)
    invitadosActuales++;
}

/////////////////////////
let contador = 1;
let n = 8;
while(contador <= n){
let contador2 = 1;
let str, str2; //Declaramos multiples vairables en una sola linea
if(contador>1){ 
  str="Welcome "+ contador+ ",";
  str2=" meet ";
}
else {
  str="Welcome "+ contador;
  str2="";
}
while(contador2<contador ){
  if(contador===2){
    str2+= contador2;
  }
  else if(contador2===contador-1){
    str2+= " and " + contador2;
  }
  else if(contador2===contador-2){
    str2+= contador2;
  }
  else{ 
    str2+= contador2 + ", ";
  }
  contador2++
}
console.log(str + str2);
contador++
}