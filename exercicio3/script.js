const arrayDeNumeros = [1, 5, 2, 3, 8]
const arrayDeStrings = ["trigo", "feijão", "semente de canola"]
const arrayDeNumerosStringsBooleanos = [1, 3, "glúten", "pimenta", 1 === "1", "dois" === `dois`]

const arrayDeNumerosCopia = arrayDeNumeros.slice()
const arrayDeStringsCopia = arrayDeStrings.slice()
const arrayDeNumerosStringsBooleanosCopia = arrayDeNumerosStringsBooleanos.slice()

arrayDeNumeros.push(21)
console.log(arrayDeNumeros, arrayDeNumerosCopia)

arrayDeStrings.pop()
console.log(arrayDeStrings, arrayDeStringsCopia)

arrayDeNumerosStringsBooleanos.splice(1, 1)
console.log(arrayDeNumerosStringsBooleanos, arrayDeNumerosStringsBooleanosCopia)