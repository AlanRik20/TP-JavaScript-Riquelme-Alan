let nota = parseInt(prompt("ingrese su nota de examen"));
let nota2 = parseInt(prompt("ingrese su segunda nota de examen"));
let nota3 = parseInt(prompt("ingrese su tercer nota de examen"));

let prom = parseInt((nota + nota2 + nota3) / 3)


switch (true) {
    case prom>=1 && prom<4:
        calificacion = "insuficiente";
        break;
    case prom >=4 && prom <6:
        calificacion = "regular";
        break;
    case prom >=6 && prom <8:
        calificacion = "nota buena";
        break;
    case prom >=8 && prom <10:
        calificacion = "regular";
        break;
    case prom ==10:
        calificacion = "sobresaliente";
        break;
    default:
        // Cualquier otro caso
        calificacion = "Nota ingresada inválida, porfavor ingrese un número";
        break;
}


console.log("su calificacion es: ", calificacion);