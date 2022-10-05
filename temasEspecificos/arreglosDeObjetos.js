/* let nombre1 = "Daira";
let nombre2 = "Abigail";
let nombre3 = "Ricardo"; */

let nombres = ["Daira", "Ricardo"];

//CANTIDAD DE ELEMENTOS DEL ARREGLO
nombres.length;
//devuelve --> 5

//ACCEDER A CADA ELEMENTO DEL ARREGLO
// ** inicia contando desde la posicion 0
nombres[0];
//devuelve --> "Daira"

//ACCEDER AL ÚLTIMO ELEMENTO DEL ARREGLO
let ultimoElemento = nombres.length - 1;
nombres[ultimoElemento];
//devuelve --> "Carlos"

let elementos = [
  "Pledu",
  12,
  -23,
  true,
  (e) => {
    console.log(`Hola ${e}`);
  },
  { nombre: "Rocky", raza: "Ratonero", edad: 4 },
];

//METODO array.push(parametro) ==> AGREGAR UN ELEMENTO AL FINAL DEL ARREGLO
nombres.push("Martina");
nombres.push("Abigail", "Carlos", "Laira");
//devuelve la cantidad actual de elementos

//METODO array.pop() ==> QUITA EL ÚLTIMO ELEMENTO DEL ARREGLO
let eliminado = nombres.pop();
console.log(eliminado);
//devuelve el último elemento eliminado

//METODO array.splice(posicion, cantidadDeElementosABorrar) ==> REMUEVE DIFERENTES ELEMENTOS DEL ARRAY
let borrado = nombres.splice(1, 2);

//METODO array.slice() ==> CLONAR EL ARRAY ORIGINAL
let newNombres = nombres.slice();
//devuelve el arreglo completo clonado
let array = nombres.slice(1, 3);
//devuelve --> ['Ricardo', 'Martina']

//METODO array.indexOf(parametro) ==> VERIFICA LA POSICION DEL ELEMENTO EN EL ARRAY Y DEVUELVE SU INDICE
nombres.indexOf("Abigail");

//METODO array.filter(funcion) ==> FILTRA DE ACUERDO A LO PASADO EN LA FUNCION
nombres.filter((e) => {
  return e.length < 6;
});

//ITERACION DE ARREGLOS

let colores = ["Violeta", "Cian", "Bordo", "Azul", "Verde", "Amarillo", "Rojo"];

//WHILE
let inicio = 0;
while (inicio < colores.length) {
  //codigo
  console.log(colores[inicio]);
  //condicion de corte
  inicio++;
}

//FOR LOOP
for (let i = 0; i < colores.length; i++) {
  const element = colores[i];
  console.log(element);
}

//FOR EACH
colores.forEach((element) => {
  console.log(element);
});

//MAP
colores.map((element) => console.log(element));

/////////////////////////////////////////////////////////////////////

///OBJETOS

let mascota = {
  nombre: "Rocky",
  raza: "Ratonero",
  edad: 7,
  ruido: () => "guau guau",
  limpio: false,
};

//ACCEDER A LOS VALORES
// ==> BRACKET NOTATION <==
mascota["nombre"];
mascota["ruido"]();
// ==> DOT NOTATION <==
mascota.raza;

//MODIFICAR LOS VALORES
// ==> BRACKET NOTATION <==
mascota["nombre"] = "Poli";
// ==> DOT NOTATION <==
mascota.raza = "Galgo";

//AGREGAR PROPIEDADES Y VALORES
// ==> BRACKET NOTATION <==
mascota["colores"] = ["Negro", "Blanco", "Marron"];
// ==> DOT NOTATION <==
mascota.dueño = { nombre: "Abigail", edad: 22 };

//RECORRER UN OBJETO
for (const key in mascota) {
  console.log(key, "<-- SOY LA KEY");
  console.log(mascota[key], "<-- SOY LOS VALORES");
}

/////////////////////////////////////////////////

//EJERCICIOS

/* Deberás crear una funcion llamada promedio que reciba un array de objetos de alumnos y un ESTADO (aprobado o desaprobado ). La funcion calculará el promedioo de cada alumno y filtrará solo a los alumnos con el estado pasado por parametro

Devolverá un nuevo array de objetos

con una key de tipo nombre completo donde esté su nombre y apellido
Otra de tipo estado que diga aprobado o desaprobado 
Y una última donde esté su promedio



promedio(alumnos, "aprobados")

↓ ↓ ↓ DEBERÁ RETORNAR ↓ ↓ ↓

==> [
  { nombreCompleto: "Mariano Damian Hernandez", promedio: 8, estado: "aprobado" },
  { nombreCompleto: "Romina Almeda", promedio: 7, estado: "aprobado" },
  { nombreCompleto: "Denis Tolaba", promedio: 10, estado: "aprobado" },
];*/

let alumnos = [
  {
    nombre: "Mariano Damian",
    apellido: "Hernandez",
    notas: [8, 7, 9, 10, 6],
  },
  {
    nombre: "Ramiro",
    apellido: "Diaz",
    notas: [1, 3, 8, 2, 1],
  },
  {
    nombre: "Ana",
    apellido: "Armella",
    notas: [5, 7, 9, 4, 2],
  },
  {
    nombre: "Romina",
    apellido: "Almeda",
    notas: [10, 6, 7, 5, 9],
  },
  {
    nombre: "Denis",
    apellido: "Tolaba",
    notas: [10, 10, 9, 9, 10],
  },
  {
    nombre: "Hugo",
    apellido: "Castellano",
    notas: [2, 3, 3, 6, 1],
  },
  {
    nombre: "Analia Daiana",
    apellido: "Fonseca",
    notas: [4, 3, 4, 5, 2],
  },
  {
    nombre: "Francisco Daniel",
    apellido: "Samir",
    notas: [5, 5, 6, 4, 2],
  },
];

const promedio = (array, estado) => {
  let newArray = [];

  array.forEach((element) => {
    let notas = element.notas;
    let i = 0;
    notas.map((e) => (i += e));
    let promedio = i / notas.length;

    let objeto = {
      nombreCompleto: `${element.nombre} ${element.apellido}`,
      promedio: Math.round(promedio),
    };

    /*  if (objeto.promedio > 5) {
      objeto.estado = "aprobado";
    } else {
      objeto.estado = "desaprobado";
    } */

    objeto.promedio > 5
      ? (objeto.estado = "aprobado")
      : (objeto.estado = "desaprobado");

    if (objeto.estado == estado) newArray.push(objeto);
  });

  return newArray;
};

promedio(alumnos);

///////////////
/* Tenés un array de objetos con el nombre y la edad de distintas personas. Este arreglo debe ser ordenado agregando una propiedad llamada posicion. Esta propiedad ubica a las personas en su posición adecuada, de menor a mayor. */

let personas = [
  { nombre: "Alba", edad: 15 },
  { nombre: "Estrella", edad: 30 },
  { nombre: "Belen", edad: 20 },
  { nombre: "Santiago", edad: 4 },
  { nombre: "Katherine", edad: 55 },
];

function posicionAdecuada(array) {
  let newArray = array.slice();

  newArray.sort(function (a, b) {
    return a.edad - b.edad;
  });

  for (let i = 0; i < newArray.length; i++) {
    const element = newArray[i];
    element.posicion = i;
  }

  return newArray;
}

posicionAdecuada(personas);

////////////////
/* Creá una Función llamada doubleFilter que reciba como parámetro un Arreglo de Objetos, un ARTICULO, y un PRECIO. La Función filtra el Arreglo solo con los nombres que sean del articulo pasado por parámetro, y además, los que su precio sea mayor o igual a la del último parámetro.

Devolverá un Objeto:

con una key ‘nombres’ que tendrá como valor un arreglo con los nombres de los articulos;
y otra llamada ‘precio total’ cuyo valor sea la suma de los precios de los articulos filtrados. */

/* doubleFilter (hogar, "muebles", 3000) 
//debe retornar 
{nombres: ["sillas", "cama"],
precio total: 34000
} */

let hogar = [
  {
    nombre: "sillas",
    articulo: "mueble",
    precioUnidad: 5000,
  },
  {
    nombre: "camas",
    articulo: "mueble",
    precioUnidad: 10000,
  },
  {
    nombre: "escritorios",
    articulo: "mueble",
    precioUnidad: 8000,
  },
  {
    nombre: "mesas",
    articulo: "mueble",
    precioUnidad: 9000,
  },
  {
    nombre: "heladera",
    articulo: "electrodomestico",
    precioUnidad: 32000,
  },
  {
    nombre: "lavarropa",
    articulo: "electrodomestico",
    precioUnidad: 45000,
  },
  {
    nombre: "secarropa",
    articulo: "electrodomestico",
    precioUnidad: 20000,
  },
];

function doubleFilter(array, articulo, precio) {
  let objeto = {
    nombre: [],
    precioTotal: 0,
  };

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element.articulo == articulo && element.precioUnidad >= precio) {
      objeto.nombre.push(element.nombre);
      objeto.precioTotal += element.precioUnidad;
    }
  }

  return objeto;
}

doubleFilter(hogar, "mueble", 2000);

/////////////
// crea una función encuentraAlPrimero que reciba dos parámetros, un array de objetos, y un lenguaje de programación y encuentre al primer dev en la lista y devuelva un string con el nombre y el país al que pertenece.
//  Si no lo encuentra debe devolver `No hay desarrolladores en lenguaje`

let lista = [
  {
    nombre: "Pedro",
    apellido: "P.",
    pais: "Cuba",
    edad: 22,
    lenguaje: "JavaScript",
  },
  {
    nombre: "Victoria",
    apellido: "V.",
    pais: "Puerto Rico",
    edad: 30,
    lenguaje: "Python",
  },
  {
    nombre: "Emma",
    apellido: "B.",
    pais: "Argentina",
    edad: 19,
    lenguaje: "Clojure",
  },
  {
    nombre: "Laira",
    apellido: "V.",
    pais: "Salvador",
    edad: 30,
    lenguaje: "Python",
  },
  {
    nombre: "Pablo",
    apellido: "G.",
    pais: "Uruguay",
    edad: 29,
    lenguaje: "JavaScript",
  },
  {
    nombre: "Hector",
    apellido: "C.",
    pais: "Argentina",
    edad: 23,
    lenguaje: "C++",
  },
];

const encuentraAlPrimero = (array, lenguaje) => {
  let developer = array.find((element) => element.lenguaje == lenguaje);

  return developer
    ? `${developer.nombre} ${developer.apellido}, ${developer.pais}`
    : `No se encontraron desarroladortes en el lenguaje ${lenguaje}`;
};

encuentraAlPrimero(lista, "Python");
