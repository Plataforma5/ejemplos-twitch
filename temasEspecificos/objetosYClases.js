let objetoPerro = {
  nombre: "Rocky",
  raza: "Ratonero",
  color: "marron",
  sonido: function () {
    console.log("guau guau");
  },
};

let objetoOtroPerro = {
  nombre: "Poli",
  raza: "Galgo",
  color: "Negro",
  sonido: function () {
    console.log("guau guau");
  },
};

class Mascotas {
  constructor(nombre, raza, color, sonido, sucio) {
    this.nombre = nombre;
    this.raza = raza;
    this.color = color;
    this.sonido = sonido;
    this.sucio = sucio;
  }
  presentacion() {
    console.log(`Hola soy ${this.nombre} y soy de raza ${this.raza}`);
  }
  baniarALaMascota() {
    this.sucio = false;
  }
}

let perro = new Mascotas(
  "Rocky",
  "Ratonero",
  "Marron",
  function () {
    console.log("guau guau");
  },
  true
);

let gato = new Mascotas(
  "Toto",
  "minino",
  "blanco",
  () => {
    console.log("miau");
  },
  true
);

class Pedido {
  constructor(titulo, autor, direccion) {
    this.cargarItems(titulo, autor, direccion);
  }
}

class Libros {
  constructor(titulo, autor, direccion) {
    this.titulo = titulo;
    this.autor = autor;
    this.direccion = direccion;
  }
  mensaje() {
    console.log(
      `✓ El libro titulado ${this.titulo}, del autor ${this.autor} será llevado a la dirección ${this.direccion}`
    );
  }
}

let libroUno = new Libros("Asylum", "Madeleine Roux", "Salta");

let libroDos = new Libros("El Soberbio Orinoco", "Julio Verne", "Jujuy");

/////////////////////////////////////////////////////////////////////

let mascota = {
  nombre: "Rocky",
  raza: "Ratonero",
  edad: 7,
  ruido: () => "guau guau",
  veterinario: "Dr Gonzales",
};
//console.log(mascota, "<--- ORIGINAL");

//RECORRER UN OBJETO
/* for (const key in mascota) {
  console.log(key, "<---KEY");
  console.log(mascota[key], "<---- valores");
} */

//console.log(mascota, "<--- ORIGINAL");

//ACCEDER A LOS VALORES

// ==> BRACKET NOTATION <==
/* mascota["nombre"];
console.log(mascota["ruido"](), "<--- function BRACKET");
console.log(mascota["el veterinario"], "<--- BRACKET"); */

// ==> DOT NOTATION <==
/* mascota.raza;
console.log(mascota.ruido(), "<----function DOT"); */

//MODIFICAR LOS VALORES

// ==> BRACKET NOTATION <==
/* mascota["nombre"] = "Poli";
console.log(mascota, "<---  modificado BRACKET"); */

// ==> DOT NOTATION <==
/* mascota.edad = 10;
console.log(mascota, "<---  modificado DOT"); */

//AGREGAR PROPIEDADES Y VALORES

// ==> BRACKET NOTATION <==
/* mascota["color"] = "marron";
console.log(mascota, "<--- agregado BRACKET"); */

// ==> DOT NOTATION <==
/* mascota.dueño = "Plataforma5";
console.log(mascota, "<--- agregado DOT"); */

/* let auto = {
  marca: "Tesla",
  modelo: "Model Y",
  kilometros: 0,
  nuevo: true,
  arrancar: function () {
    console.log("el auto se enciende!");
  },
  partes: [
    { nombre: "bateria", estado: "nuevo" },
    { nombre: "motor", estado: "usado" },
  ],
};

let array = auto["partes"];
let objeto = array[0];
let producto = objeto.nombre;
console.log(array);
console.log(objeto);
console.log(producto);

console.log(auto["partes"][0].nombre, "<---- ultimo"); */

//EJERCICIO
let usuario = prompt("Decime tu nombre");
let edad = Number(prompt("que edad tenés"));
let direccion = prompt("Cual es tu direccion");
let fechaDeNacimiento = prompt("cuando naciste");
let contraseña = prompt("pone una contraseña");
let trabajo = prompt("de que laburas");


//DEBE RETORNAR 
// persona= {
//   usuario: "Eliana",
//   edad: 32,
//   direccion: "Colorado",
//   fechaDeNacimiento: "02 de Septiembre",
//   contraseña: "pledu",
// }

//AGREGAR ELEMENTOS AL OBJETO

//MANERA UNO
let newObject = {
  usuario: usuario,
  edad: edad,
  direccion: direccion,
  fechaDeNacimiento: fechaDeNacimiento,
  contraseña: contraseña,
};

//MANERA DOS
let objeto = {};
objeto["usuario"] = usuario;
objeto["edad"] = edad;
objeto["direccion"] = direccion;
objeto["fechaDeNacimiento"] = fechaDeNacimiento; //BRACKET NOTATION
objeto.contraseña = contraseña; //DOT NOTATION
objeto.trabajo = trabajo;

//MANERA TRES
let otherObject = {
  usuario,
  edad,
  direccion,
  fechaDeNacimiento,
  contraseña,
};

console.log(newObject, "<---- MANERA UNO");
console.log(objeto, "<--- MANERA DOS");
console.log(otherObject, "<--- MANERA TRES");
