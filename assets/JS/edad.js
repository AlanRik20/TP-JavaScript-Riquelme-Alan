let edad = +prompt("Ingrese su edad");

if (edad>=0 && edad<=12){
    console.log("usted es un niño");
}else if(edad>12 && edad<=19){
    console.log("usted es un adolescente");
}else if(edad>19 && edad<=59){
    console.log("usted es un adulto");
}else if(edad>59 && edad<=120){
    console.log("usted es un adulto mayor");
}