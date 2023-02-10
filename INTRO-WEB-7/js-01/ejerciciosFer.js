//Ejercicio 1
let numHoras=parseInt(prompt("Cuantas horas trabajó el empleado: "));
let costeHora=parseInt(prompt("Costo por hora: "));
let pagaTotal=numHoras*costeHora;
alert("La paga total del empleado es: " + pagaTotal)

//Ejercicio 2
alert("El resultado de la operación es (3+2)/2*5 es: " + ((3+2)/(2*5)))

//Ejercicio 3
let pesoLibra=parseFloat(prompt("Digita tu peso en libras: "));
let estCm=parseInt(prompt("Difita tu estatura en centímetros: "));
let pesoKg=pesoLibra*0.453592
let estMetro=estCm/100

function obtenerImc(pesoKg,estMetro){
    let imc=(pesoKg/(estMetro**2));
    return imc
}

alert(obtenerImc(pesoKg,estMetro));

