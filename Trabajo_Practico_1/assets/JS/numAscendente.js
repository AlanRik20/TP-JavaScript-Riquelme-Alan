let num = parseInt(prompt("Ingrese un número"));
let numDos= parseInt(prompt("Ingrese un número"));
let numTres= parseInt(prompt("Ingrese un número"));

console.log(typeof num)

if(isNaN(num) || isNaN(numDos) || isNaN(numTres)){

    console.log("object is not a number");
} else{


    const long= [num, numDos, numTres];
    
    let cant= long.length;
    
    if(cant==3){
    
        console.log(long.sort(function (a, b){
            return a - b;
        }))
    }else{
        console.log("ingrese 3 números");
    }
}



