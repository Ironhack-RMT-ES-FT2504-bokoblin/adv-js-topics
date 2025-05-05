
console.log("probando")


//* Funciones y metodos con formato flecha en una sola linea

// const saludar = (persona) => {
//   return `Buenos días ${persona}`
// }

const saludar = (persona) => `Buenos días ${persona}`

// const saludar = persona => `Buenos días ${persona}`

// Existen varias reducciones sintaxicas cuando una funcion de flecha solo tiene una linea de código.
//1. podemos poner toda la linea en la misma que se creo la funcion. Las llaves no son necesarias.
//2. si esa linea es un return, entonces queda implicito, no hay que agregarlo.
//3. si la funcion tiene un solo parametro, los parentesis de los parametros son opcionales.

console.log( saludar("bob") )
console.log( saludar("Álvaro") )
console.log( saludar("Pablo") )


const people = ["natanael", "alba", "mackenzie", "amalia", "maria", "gaëlle"]

// filtrar solo los nombres que empiezar por a

// let filteredPeople = people.filter((eachPerson) => {
//   return eachPerson[0] === "a"
// })

let filteredPeople = people
.filter( eachPerson => eachPerson[0] === "a" )
.map( eachPerson => eachPerson[0].toUpperCase() + eachPerson.slice(1) )
.forEach( eachPerson => console.log( saludar(eachPerson) ) )

// console.log(filteredPeople)

//* OBJECT PROPERTY SHORTHAND

let username = "Rocío"
let job = "Program Manager"




// const user = {
//   username: username,
//   job: job
// }

const user = {
  username,
  job,
  id: "1234"
}

// cuando al crear objetos, el nombre de la propiedad, es el mismo que el nombre del cual viene el valor. Entonces, escribimos el nombre una sola vez.

console.log(user)



//* DESTRUCTURACION

const unPerritoMuyBonito = {
  name: "Bethoven",
  breed: "San Bernardo",
  age: 6
}

// destructuración es extraer las propiedades de un objeto y hacerlas variables

// let name = unPerritoMuyBonito.name
// let breed = unPerritoMuyBonito.breed
// let age = unPerritoMuyBonito.age

// let { name, breed, age } = unPerritoMuyBonito

// console.log( `El perrito ${name} de raza ${breed} es muy majo. Tiene ${age} añitos de edad` )

// console.log( `Este perrito ${name} tiene puntuación 11/10` )


function describirPerrito({ name, breed = "mestizo", age }) {

  // breed = "mestizo" // indica que tendrá este valor predeterminado en caso que no exista

  // const { name, breed, age } = perrito

  console.log( `El perrito ${name} de raza ${breed} es muy majo. Tiene ${age} añitos de edad` )

  console.log( `Este perrito ${name} tiene puntuación 11/10` )

}

describirPerrito( unPerritoMuyBonito )

const otroPerrito = {
  name: "Layka",
  breed: "Dobberman",
  age: 10
}

describirPerrito( otroPerrito )

const tercerPerrito = {
  name: "Pancho",
  age: 2
}

describirPerrito( tercerPerrito )


//* DESTRUCTURACION en arrays


const misTresLibrosFavoritosDelMundo = ["MundoDisco", "Dragonlance", "Dresden Files"]



// creamos los nombres de las variables al momento de destructurarlas
const [ libro1, libro2, libro3 ] = misTresLibrosFavoritosDelMundo

console.log( `mis tres libros favoritos son: ${libro1}, ${libro2} y ${libro3}` )