/* Deberás crear una funcion llamada promedio que reciba un array de objetos de alumnos y un ESTADO (aprobado, desaprobado o regular). La funcion calculará el promedioo de cada alumno y filtrará solo a los alumnos con el estado pasado por parametro

Devolverá un nuevo array de objetos

con una key de tipo nombre completo donde esté su nombre y apellido
Otra de tipo estado que diga aprobado, desaprobado o reagular 
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

function promedio(array, estado) {
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

    objeto.promedio > 5
      ? (objeto.estado = "aprobado")
      : (objeto.estado = "desaprobado");

    if (objeto.estado == estado) newArray.push(objeto);
  });

  return newArray;
}

promedio(alumnos, "aprobado");
