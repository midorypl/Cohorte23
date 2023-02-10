// if (condition) {
//      Bloque Código
// } else

let edad = parseInt(prompt("Escribe tu edad"));

if (edad <= 17) {
    document.write("<h2>tas chiquitin</h2>");
} else if (edad === 18) {
    document.write("<h2>eres mayor de edad</h2>");
} else if (edad > 18) {
    document.write("<h2>tas rucon</h2>");
} else {
    document.write("<h2>este no es un número válido</h2>");
}
