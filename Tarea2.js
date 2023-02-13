
/*/Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/
let fechaNac = new Date(1996, 8, 17);

const lista={
          nombre:"Debany Moreno", 
          edad: 26, 
          Desarrollador: true,
          cumpleanos: fechaNac, 
          Libro:{
                    titulo: "Realidad Aumentada",
                    autor:"Bruno Nievas",
                    link:"www.amazonlibros.com"
          }}

console.log(lista);
