/* 
    ABBREVNAME: 
  
    crea una funcion llamada "abbrevName" que reciba como parametro un string ("") el string recibido siempre tiene que incluir un espacio la funcion debería convertir el string recibido en iniciales
  
    Ejemplos: 
  
    abbrevName("Sam Harris") ==> "S.H"
    abbrevName("Evan Cole") ==> "E.C"
    abbrevName("David Mendieta") ==> "D.M"
    */
  /* El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
  
    El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
     */
    function abbrevName(fullname) {
        let nombreYApellido = fullname.toUpperCase().split(" "); //["nombre", "apellido"] con mi .split() : lo que hago es traerme los dos nombres que me pasan como ejemplo
        // con mi .toUpperCase(): lo que hago es poner en mayuscula las iniciales que va a traer las variables nombre y la variable apellido
      
        let nombre =
          nombreYApellido[0] /* nos trae el nombre que este en la posicion 0 */[0]; /* nos trae el primer caracter de cada elemento */
        let apellido =
          nombreYApellido[1] /* nos trae el apellido, osea el elemento en la primera posicion */[0]; /* nos trae el primer caracter de cada elemento */
      
        return nombre + "." + apellido;
      }
      
      abbrevName("Sam Harris");
      
    
    
    //-----------------------------------------------------------------------------------------------------------------------------