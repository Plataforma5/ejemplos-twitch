// esta function recibe un array como parámetro y devuelve los dos números más chicos
// se podria usar un sort y devolver los dos primeros

function caracteresMinimos(array) {
    array.sort((a, b) => a - b);
    console.log(array[0], array[1]);
  }
  
  caracteresMinimos([2, 65, 3, 86, 12, 56, 4, 12, 0, 5]);