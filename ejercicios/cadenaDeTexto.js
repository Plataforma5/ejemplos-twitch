//Crear una funcion llamada cadenaDeCaracteres que reciba un texto como parametro. La función deberá generar un array donde cada palabra será un nuevo elemento (no debe contar los espacios). Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra, última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la a la z y las palabras ordenadas de la z a la a. Toda está información se deberá mostrar en console.log independientes.

//EJEMPLO:
/* let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error adipisci autem doloribus beatae, laudantium explicabo ut aperiam aut quam facilis corporis optio velit! Vitae itaque reiciendis incidunt accusamus culpa?"

cadenaDeCaracteres(texto)
 ↓ ↓ ↓ ↓ DEBERÁ RETORNAR  ↓ ↓ ↓ ↓

==> "El texto contiene 30 palabras"

==> "La primera palabra es LOREM"

==> "La última palabra es CULPA?"

==> ['culpa?', 'accusamus', 'incidunt', 'reiciendis', 'itaque', 'Vitae', 'velit!', 'optio', 'corporis', 'facilis', 'quam', 'aut', 'aperiam', 'ut', 'explicabo', 'laudantium', 'beatae,', 'doloribus', 'autem', 'adipisci', 'error', 'Ex', 'elit.', 'adipisicing', 'consectetur', 'amet', 'sit', 'dolor', 'ipsum', 'Lorem'] <== ORDEN INVERSO

==> ['accusamus', 'adipisci', 'adipisicing', 'amet', 'aperiam', 'aut', 'autem', 'beatae,', 'consectetur', 'corporis', 'culpa?', 'dolor', 'doloribus', 'elit.', 'error', 'Ex', 'explicabo', 'facilis', 'incidunt', 'ipsum', 'itaque', 'laudantium', 'Lorem', 'optio', 'quam', 'reiciendis', 'sit', 'ut', 'velit!', 'Vitae'] <== ORDEN ALFABETICO

==> ['Vitae', 'velit!', 'ut', 'sit', 'reiciendis', 'quam', 'optio', 'Lorem', 'laudantium', 'itaque', 'ipsum', 'incidunt', 'facilis', 'explicabo', 'Ex', 'error', 'elit.', 'doloribus', 'dolor', 'culpa?', 'corporis', 'consectetur', 'beatae,', 'autem', 'aut', 'aperiam', 'amet', 'adipisicing', 'adipisci', 'accusamus'] <== ALFABETICO INVERSO 
*/

let texto =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error adipisci autem doloribus beatae, laudantium explicabo ut aperiam aut quam facilis corporis optio velit! Vitae itaque reiciendis incidunt accusamus culpa?";

const cadenaDeCaracteres = (texto) => {
  let newText = texto.split(" ");

  console.log(`El texto contiene ${newText.length} palabras`);

  console.log(`La primera palabra es ${newText[0]}`);

  console.log(`La última palabra es ${newText[newText.length - 1]}`);

  console.log("REVERSA ===>", newText.reverse());

  let ordenAlfabetico = newText.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    return 1;
  });
  console.log("ALFABETICO ===>", ordenAlfabetico);

  console.log("ALFABETICO INVERSO ===>", ordenAlfabetico.reverse());
};

cadenaDeCaracteres(texto);
