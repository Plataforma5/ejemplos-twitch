/*TO TIME :
Crea una funcion llamada toTime() que tome como argumento un numero entero (segundos)
La funcion debe convertir el valor recibido en un string ("") que describa cuantas horas y minutos comprenden esa cantidad de segundos
El resultado debe tener el siguiente formato: "X hora (s) y X minuto (s)"

Ejemplos: 

toTime(3600) ==> "1 hour(s) and 0 minutes(s)"
toTime(3500) ==> "0 hour(s) and 58 minutes(s)"
toTime(323500) ==> "89 hour(s) and 51 minutes(s)"

*/

//primero llevar segundo a horas y despues llevar segundos a minutos ; tenemos que hacer las dos operaciones

function toTime(segundos) {
    //pasamos los segundos a horas
    let horas = Math.floor(segundos / 3600);
  
    //pasamos los segundos a minutos
    let minutos = Math.floor((segundos % 3600) / 60);
  
    return horas + " hora(s) y " + minutos + " minutos(s)";
    
  }
  