let tarea = [];
//VALIDACIÓN PARA CARACTERES ESPECIALES
const regex = /^\S+$/; 
let lista = prompt("Elija una opción:\n 1. Agregar tarea \n 2. Mostrar lista \n 3. Editar tarea \n 4. Eliminar tarea \n 0. Terminar con el bucle");

// SE DECLARAN LAS FUNCIONES A UTILIZAR 
function agregarTarea(nombre) {
    tarea.push(nombre)
}

function listado() {
    let mensaje = "";
    for (let i = 0; i < tarea.length; i++) {
        mensaje += tarea[i] + "\n";
    }
    alert(mensaje);
}

function eliminarTarea(nombre) {
    const indice = tarea.indexOf(nombre);
    if (indice !== -1) {
        tarea.splice(indice, 1);
        alert("Se eliminó la tarea.");
    } else {
        alert("No se encontró la tarea.");
    }
}

function modificar(nombre, nombreNuevo) {
    const indice = tarea.indexOf(nombre);
    if (indice !== -1) {
        tarea[indice] = nombreNuevo;
        alert("Se editó la tarea");
    } else {
        alert("No se encontró la tarea.");
    }

}

// EL BUCLE SE REPITE HASTA QUE SE INGRESE UN 0
while (lista !== "0") {
    if (lista.trim() === "" || isNaN(lista) || parseInt(lista) < 0 || parseInt(lista) > 4) {
        alert("Opción no válida. Por favor, ingrese una opción válida.");
    } else {
        // ACCIÓN QUE TOMARÁ EL CÓDIGO EN CASO DE QUE SE INGRESE UN NUMERO ENTRE 1-4
        switch (parseInt(lista)) {
            case 1:
                nombre = prompt("Ingrese el nombre de la tarea");
                if (nombre.trim() && isNaN(nombre)) { //se utiliza "nombre.trim()" para que se pueda ingresar un nombre con espacio y no lo cuente como inválido
                    agregarTarea(nombre);
                } else {
                    alert("El nombre de la tarea es inválido.");
                }
                break;

            case 2:
                if (tarea.length > 0) {
                    listado();
                } else {
                    alert("No hay tareas para mostrar.");
                }
                break;

            case 3:
                if (tarea.length > 0) {
                    nombre = prompt("Ingrese el nombre de la tarea a editar");
                    const indice = tarea.indexOf(nombre.trim()); 
                    if (indice !== -1) {
                        nombreNuevo = prompt("Ingrese el nuevo nombre de la tarea");
                        if (nombreNuevo.trim() !== "") {
                            modificar(nombre, nombreNuevo);
                        } else {
                            alert("No se puede ingresar datos vacíos");
                        }
                    } else {
                        alert("No se encontró la tarea en la lista.");
                    }
                } else {
                    alert("No hay tareas para editar.");
                }
                break;

            case 4:
                if (tarea.length > 0) {
                    nombre = prompt("Ingrese el nombre de la tarea a eliminar");
                    if (nombre.trim() !== "" && nombre.trim() && isNaN(nombre)) {
                        eliminarTarea(nombre);
                    } else {
                        alert("El nombre de la tarea es inválido");
                    }
                } else {
                    alert("No hay tareas para eliminar.");
                }
                break;

            default:
                break;
        }
    }

    lista = prompt("1. Agregar tarea\n2. Mostrar lista\n3. Editar tarea\n4. Eliminar tarea\n0. Terminar con el bucle");
}
