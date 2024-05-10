let nota = parseInt(prompt("ingrese su nota de examen"));
let nota2 = parseInt(prompt("ingrese su segunda nota de examen"));
let nota3 = parseInt(prompt("ingrese su tercer nota de examen"));

let prom = parseInt((nota + nota2 + nota3) / 3)


switch (prom) {
    case 10:
        calificacion = "Sobresaliente";
        break;
    case 9:
    case 8:
        calificacion = "nota muy buena";
        break;
    case 7:
    case 6:
        calificacion = "nota buena";
        break;
    case 5:
    case 4:
        calificacion = "regular";
        break;
    case 3:
    case 2:
    case 1:
        calificacion = "insuficiente";
        break;
    default:
        // Cualquier otro caso
        calificacion = "Nota ingresada inválida, porfavor ingrese un número";
        break;
}


console.log("su calificacion es: ", calificacion);