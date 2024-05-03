let num = prompt("Ingrese un número");
let numDos= prompt("ingrese otro número");
let numTres= prompt("ingrese un último número")


const long= [num, numDos, numTres];

let cant= long.length;

if(cant===3){

    console.log(long.sort(function (a, b){
        return a - b;
    }))
}else{
    console.log("ingrese 3 números");
}
