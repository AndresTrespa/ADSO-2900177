
let eventos = [];

function mostrarEventos() {
    let lista = "Lista de Eventos:\n";
    eventos.forEach(evento => {
        lista += `Nombre: ${evento.nombre}, Fecha: ${evento.fecha}, Ubicación: ${evento.ubicacion}, Descripción: ${evento.descripcion}\n`;
    });
    alert(lista);
}

function agregarEvento() {
    let nombre = prompt("Ingrese el nombre del evento:");
    if (nombre === null) { 
        return;
    }
    
    let fecha = prompt("Ingrese la fecha del evento (YYYY-MM-DD):");
    if (fecha === null) {
        return;
    }
    
    let ubicacion = prompt("Ingrese la ubicación del evento:");
    if (ubicacion === null) {
        return;
    }
    
    let descripcion = prompt("Ingrese una breve descripción del evento:");
    if (descripcion === null) {
        return;
    }

    eventos.push({
        nombre: nombre,
        fecha: fecha,
        ubicacion: ubicacion,
        descripcion: descripcion
    });

    alert("Evento agregado correctamente.");
}

function buscarEventoPorNombre() {
    let nombreBusqueda = prompt("Ingrese el nombre del evento a buscar:");
    let eventosEncontrados = eventos.filter(evento => evento.nombre.toLowerCase().includes(nombreBusqueda.toLowerCase()));

    if (eventosEncontrados.length > 0) {
        let lista = "Eventos encontrados:\n";
        eventosEncontrados.forEach(evento => {
            lista += `Nombre: ${evento.nombre}, Fecha: ${evento.fecha}, Ubicación: ${evento.ubicacion}, Descripción: ${evento.descripcion}\n`;
        });
        alert(lista);
    } else {
        alert("No se encontraron eventos con ese nombre.");
    }
    
}

let opcion;
do {
    opcion = prompt("eleccione una opción:\n1. Agregar evento\n2. Explorar eventos\n3. Buscar evento por nombre\n4. Salir");
    switch (opcion) {
        case "1":
            agregarEvento();
            break;
        case "2":
            mostrarEventos();
            break;
        case "3":
            buscarEventoPorNombre();
            break;
        case "4":
            alert("¡Hasta luego!");
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción válida.");
    }
} while (opcion !== "4");
