let dia=+prompt("Ingrese un día de la semana")

switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2: 
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Ingrese un número del 1 al 7.");
}