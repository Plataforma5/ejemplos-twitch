/* Iterá actoresPrincipales y llevá a actoresVocales aquellos cuyo nombre o apellido comience con una vocal.
  
  let actoresVocales = []
  
  let actoresPrincipales = ['Tom Hanks', Johnny Depp', 'Elizabeth Taylor', Morgan Freeman', 'Jennifer Aniston', 'Meryl Streep', 'Natalie Portman', 'Ashton Kutcher'] */

let actoresPrincipales = [
  "Tom Hanks",
  "Johnny Depp",
  "Elizabeth Taylor",
  "Morgan Freeman",
  "Jennifer Aniston",
  "Meryl Streep",
  "Natalie Portman",
  "Ashton Kutcher",
];
function oscar() {
  let actoresVocales = [];
  let vocales = ["A", "E", "I", "O", "U"];
  actoresPrincipales.forEach((actor) => {
    let palabras = actor.split(" ");
    let nombre = palabras[0];
    let apellido = palabras[1];
    if (vocales.includes(nombre[0]) || vocales.includes(apellido[0])) {
      actoresVocales.push(actor);
    }
  });
  return actoresVocales;
}
oscar();
//////////////////////////////////
