console.log("probando");

//* SPREAD (operador de esparcimiento) ...

const someNumbers = [10, 20, 100, 4, 20, 30]

console.log(someNumbers)
console.log(...someNumbers)
console.log(10, 20, 100, 4, 20, 30)


//* se usa para algunos metodos en donde nos facilita el trabajo
console.log( Math.max( ...someNumbers ) )


//* para unificar arrays/objetos
const students = ["alvaro", "alba", "natanael", "amalia"]
const students2 = ["gaëlle", "pablo", "mackenzie", "maría"]


const everyone = [ ...students, ...students2, "rocio" ]
console.log(everyone)

//* para clonar arrays/objetos
const clone = [ ...everyone ] // clonar arrays/objectos

everyoneReversed = clone.reverse() 

console.log(everyone)
console.log(everyoneReversed)



//* CLONACION

// existen dos tipos de formas de clonar




const people = [
  {
    username: "rocio",
    candy: 10,
    country: "España"
  }, // ref abcd
  {
    username: "ruth",
    candy: 20,
    country: "Irlanda"
  }, // ref trhj
  {
    username: "julie",
    candy: 50,
    country: "Francia"
  } // ref klom
] // ref 1234




//* CLONE SHALLOW (SUPERFICIAL)
// const peopleClone = [ ...people ] // ref 4567. clone para no modificar el array original
// const peopleClone = people.slice(0)
// const peopleClone = people.map((elemento) => elemento)

//* CLONE DEEP (PROFUNDO)
// const peopleClone = JSON.parse(JSON.stringify(people) )
const peopleClone = structuredClone(people)

peopleClone.pop() // esto afecta el primer nivel.

peopleClone[0].candy = 100 // esto afecta el segundo nivel.

console.log(peopleClone)
console.log(people)


//* REST (operador de el resto de) ...


const hobbies = ["sufear", "cocinar", "ver pelis", "leer", "escalar"]

const [ hobby1, hobby2, ...losOtrosHobbies ] = hobbies
// yo quiero una variable que agrupe los 3 ultimos elementos

console.log(hobby1)
console.log(hobby2)
console.log(losOtrosHobbies)

function verificarSiEstudianteAprobo( studentName, ...todasLasNotas ) {

  console.log(todasLasNotas) // esto capta todos los argumentos despues del nombre

  const suma = todasLasNotas.reduce((acc, cadaNota) => {
    return acc + cadaNota
  }, 0)
  const avg = suma / todasLasNotas.length

  if (avg >= 5) {
    console.log(`${studentName} aprobó con nota final de ${avg.toFixed(2)}`)
  } else {
    console.log(`${studentName} no aprobó. La nota final fue de ${avg.toFixed(2)}`)
  }

}

verificarSiEstudianteAprobo("bob", 4, 8, 5)
verificarSiEstudianteAprobo("patricio", 3, 5, 6)
verificarSiEstudianteAprobo("sarah", 4, 5, 5, 10, 10)
verificarSiEstudianteAprobo("rocio", 4, 5, 5, 10, 10, 4, 5, 5, 10, 3, 2, 1, 5, 10, 10)