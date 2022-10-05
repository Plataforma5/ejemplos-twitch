/*
CreandoLiving

Escribí una función que tenga dos parámetros, en primer lugar un arreglo de objetos y el nombre de una propiedad.
La función tendrá que devolver un nuevo arreglo, pero solo con los valores que esten dentro de la propiedad recibida.

Ejemplo: 

let comedor = [{ nombre: 'Mesa', precio: 5000 }, { nombre: 'Sillas', precio: 2500 }, { nombre: 'Sillon', precio: 10000 }, { nombre: 'Escritorio', precio: 25000 }]
pluck(productos, 'nombre') => ["Mesa", "Sillas", "Sillon", "Escritorio"]
pluck(productos, ‘precio’) => [5000, 2500, 10000, 25000]
*/

// let comedor = [
//   { nombre: "Mesa", precio: 5000 },
//   { nombre: "Sillas", precio: 2500 },
//   { nombre: "Sillon", precio: 10000 },
//   { nombre: "Escritorio", precio: 25000 },
// ];

function creandoLiving(arr, prop) {
    return arr.map((e) => {
      return e[prop];
    });
  }
  creandoLiving(comedor, "nombre");
  creandoLiving(comedor, "precio");
  
  //.push()
  
  // let comedor = [
  //   { nombre: "Mesa", precio: 5000 },
  //   { nombre: "Sillas", precio: 2500 },
  //   { nombre: "Sillon", precio: 10000 },
  //   { nombre: "Escritorio", precio: 25000 },
  // ];
  
  function CreandoLiving(array, prop) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
      nuevoArray.push(array[i][prop]);
    }
    return nuevoArray;
  }
  
  CreandoLiving(comedor, "precio");
  
  //sin metodo .push()
  // let comedor = [
  //   { nombre: "Mesa", precio: 5000 },
  //   { nombre: "Sillas", precio: 2500 },
  //   { nombre: "Sillon", precio: 10000 },
  //   { nombre: "Escritorio", precio: 25000 },
  // ];
  
  function CreandoLiving(array, prop) {
    let nuevo_array = [];
    for (let i = 0; i < array.length; i++) {
      nuevo_array[i] = array[i][prop];
    }
    return nuevo_array;
  }
  CreandoLiving(comedor, "precio");

