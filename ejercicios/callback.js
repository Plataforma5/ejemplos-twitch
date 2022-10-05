/* Callback
Debes crear una Función llamada callback
que reciba como Parámetros un número y una Función.
Esta deberá retornar el resultado de esa función pasándole como argumento el número que llega por parámetro.

Teoria de callbacks: click aqui

Un callback (llamada de vuelta) es una función que recibe como argumento otra función y la ejecuta. Así, la función contenedora elige cuándo ejecutar el callback.

Ejemplo:
callback(5, (num)=>{return num*10}) debe retornar 50
callback(25, (num)=>{return num/5}) debe retornar 5
 */

const callback = (num, fun) => {
    //PASAMOS LOS PARAMETROS DE LA FUNCION CALLBACK
  
    return fun(num);
    //RETORNA EL RESULTADO DE ESA FUNCION
  };