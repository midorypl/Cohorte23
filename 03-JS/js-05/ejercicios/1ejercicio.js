//Exercise #1
//You have a list of names: var names = ["Maria", "Antony", "Joy", "Juan"]
//Part 1
//Write a function to insert a name to the end of the list. Add your own name to the end of the list.
var names = ["Maria", "Anthony", "Joy", "Juan"];
names.push("Midory");
console.log(names);

//Part 2
//Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.
function checkNames(name, arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
        if (arreglo[i] === name) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}
checkNames("Ana", names);

//Part 3
//Write a function that takes in a list of names. This function should compare the list taken into the names list you currently have. The function should pass back an array with the names that are in both lists.
var compareList = [];
function compareThem(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                compareList.push(array1[i]);
            }
        }
    }
    return compareList;
}

console.log(names);
let names2 = ["Jorge", "Maria", "Antony", "Joy"];
console.log(compareThem(names, names2));
console.log(compareList);

//Part 4
//Write a function that takes in a list of names and returns a list of Integers with the length of the names in the same order as received. Hint use the push function.
var namesLen=[];
var count=0;
function namesLength(anyArray){
    for (let i = 0; i < anyArray.length; i++) {
        namesLen.push(anyArray[i].length);
}
    return namesLen;
}

console.log(names)
console.log(namesLength(names));