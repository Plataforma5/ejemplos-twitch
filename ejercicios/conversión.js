// Deberás creas una función llamada conversion la cuál reciba una temperatura en grados Fahrenheit pasada por parametro y la pase a Celsius (y vicebersa). Luego deberá mostrar la siguieste información:
/*
==> si la temperatura está entre 14°F/32°F o -10°C/0°C, debe retornar "Temperatura baja"

==> si la temperatura está entre 33°F/68°F o 1°C/20°C, debe retornar "Temperatura adecuada"

==> si la temperatura está entre 69°F/95°F o 21°C/35°C, debe retornar "Temperatura alta"
*/

//EJEMPLO :

/* conversion("15°C")

↓ ↓ ↓ DEBERÁ RETORNAR ↓ ↓ ↓

==> "59°F Temperatura adecuada"


conversion("23°F")

↓ ↓ ↓ DEBERÁ RETORNAR ↓ ↓ ↓

==> "-5°C Temperatura baja"

*/

function conversion(temperatura) {
  if (temperatura.includes("C")) {
    let calculo = Math.round(1.8 * parseInt(temperatura) + 32);
    if (calculo >= 14 && calculo <= 32) {
      return `${calculo}°F, Temperatura baja`;
    } else if (calculo >= 33 && calculo <= 68) {
      return `${calculo}°F, Temperatura adecuada`;
    } else if (calculo >= 69 && calculo <= 95) {
      return `${calculo}°F, Temperatura alta`;
    } else {
      return "Temperatura desconocida";
    }
  } else {
    let calculo = Math.round((parseInt(temperatura) - 32) / 1.8);
    if (calculo >= -10 && calculo <= 0) {
      return `${calculo}°C, Temperatura baja`;
    } else if (calculo >= 1 && calculo <= 20) {
      return `${calculo}°C, Temperatura adecuada`;
    } else if (calculo >= 21 && calculo <= 35) {
      return `${calculo}°C, Temperatura alta`;
    } else {
      return "Temperatura desconocida";
    }
  }
}
