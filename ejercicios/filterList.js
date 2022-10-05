  /* 
  FILTERLIST: 
      Crea una funcion llamada filterList() que tome como argumento un array de strings y numeros
      La función debe retornar un nuevo array solo con los numeros.
      Si el arreglo filtrado no posee números, retornar elsiguiente mensaje: "lista de numeros vacía"
      No se puede usar el metodo filter() !!
  
      Ejemplos: 
  
      filterList([1, 2, "a, "b]) ==> [1, 2]
      filterList([1, "a", "b", 0, 15]) ==> [1,0,15]
      filterList(["x", "y", "z"]) ==> "lista de numeros vacía"
  
      */
     
  //.filter(): nos permite mediante una condicion establecer que valoreS si o que valores no, van a formar parte de un nuevo arreglo, yo apartir de un nuevo arreglo podria al filter decirle que evalue el typeOf() o tipo de dato de ese valor y que me devuelva un nuevo arreglo solamente con lo que sean string o solo con numeros o solo lo elementos que cumplan solo cierta condicion
  
  //.push(): nos sirve para agregar al final del elemento ese nuevo elemento que recibimos por parametro
  
  //El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo. operando es la cadena, variable, palabra clave u objeto para el que se devolverá su tipo. Los paréntesis son opcionales.
  
  const filterListt = function (array) {
    
    //definir arreglo resultado en donde se va almacenar los valores que coinciden
    let resultado = [];
  
    //acceder a cada elemento con un for
    for (let i = 0; i < array.length; i++) {
      //ya tengo acceso a cada uno de los valores
  
      //evaluar el typeOf de cada elemento
      if (typeof array[i] === "number") {
        //distinguir cual es un numero y cual una cadena de caracteres, lo que nos pide el ejercicio, evaluar si el ejericcios es un numero
        //guardamos el elemento en el arreglo final, lo pushiamos
        resultado.push(array[i]);
      }
    }
    //evaluar si el resultado(que es mi arreglo) es menor a 1 (que el elemento esta vacio) que me retorne otra cosa
    if (resultado.length < 1) {
      return "lista de numeros vacía";
    }
  
    return resultado;
  };
  //-------------------------------------------------------------------------------------------------------
  /* REFACOTRIZAR CODIGO */
  
  const filterList = function (array) {
    let resultado = [];
  
    for (let i = 0; i < array.length; i++) {
  
  
      //CONDICIONALES CON IF TERNARIOS
      // && : si la condicion de la izquiera y derecha se cumplen, es verdadero
      // || : nos dice que si se cumple 1 operación de las dos que tengamos es verdadero y pasa
      // !== : el operador de desigualdad es cuando un elemento es distinto a otro
  
      //asignación por operador logico , ejemplo &&, ||, !==
      typeof array[i] === "number" && resultado.push(array[i]);
    }
  
    return resultado.length < 1 ? "lista de numeros vacía" : resultado ;
  
  };
   