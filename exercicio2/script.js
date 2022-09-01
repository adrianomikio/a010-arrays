const arrayDeNumeros = [1, 5, 2, 3, 8]
const arrayDeStrings = ["trigo", "feijão", "semente de canola"]
const arrayDeNumerosStringsBooleanos = [1, 3, "glúten", "pimenta", 1 === "1", "dois" === `dois`]

console.log(arrayDeNumeros.length, arrayDeNumeros[0], arrayDeNumeros.includes(5))
console.log(arrayDeStrings.length, arrayDeStrings[0])
console.log(arrayDeNumerosStringsBooleanos.length, arrayDeNumerosStringsBooleanos[0],
            arrayDeNumerosStringsBooleanos.includes(4))