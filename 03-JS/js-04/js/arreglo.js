let lista = [12,5,80,34,7];

//
let nueva = lista.map(
    function(valor){
        return valor * 2
    }
);
console.log(nueva);


//
lista.sort(
    function(valor1,valor2) {
         return valor1 > valor2;
    }
);
console.log(lista);

//
lista.sort();
console.log(lista);

//
let remover = lista.splice (1,2);
console.log(remover);
console.log(lista);
lista.splice(2,0,100,200,300);
console.log(lista);

//
lista.shift();

//
let masE = lista.concat(100,200,300);
console.log(masE);

//
lista.push(100);
console.log(lista);

//
let msj = lista.join("-");
console.log (msj);

//
let listaNueva = lista.slice(1, 4);
console.log (msj);

//console.Log (lista.lenght);
for (let i = 0; i<lista.length; i++){
    console.log("-->"+lista[i]);
}
console.log(lista);

