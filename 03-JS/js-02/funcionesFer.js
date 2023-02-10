function resta() {
}

suma();

function suma() {
    let valor1 = 5;
    let valor2 = 10;
    let suma = valor1 + valor2;
}
suma();

let x = function() {
    let valor1 = 5;
    let valor2 = 10;
    let suma = valor1 + valor2;
    console.log("Esta función anónima: ",suma);
}

x();

var saludo = function() {
    console.log("Hola Generation!, ¿cómo están? Los saludo desde una función anónima");
}

saludo();

var numero1 = 30;