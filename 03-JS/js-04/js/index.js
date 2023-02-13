let miVariable = 5;
let miArray = [2, 3, 4, 5, 6, 7];
//let miArray = new Array ();
console.log("miArray" + miArray[0]);
console.log("miArray" + miArray[1]);

let miArray1 = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
];

console.log("miArray1 " + miArray1[0][1]);
console.log("miArray1 " + miArray1[0][2]);
console.log("miArray1 " + miArray1[2][1]);
console.log("miArray1 " + miArray1[1][2]);
console.log("miArray1 " + miArray1[1][0]);

/*********** CICLO for *********** */

let miArray2 = [2, 3, 4, 5, 6, 7];

for (let i = 0; i <= 5; i++) {
    console.log("imprimiendo miArray ->" + miArray[i]);
}

let miArray3 =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("imprimiendo la matriz1 -> " + miArray3[i][j]);
    }
}