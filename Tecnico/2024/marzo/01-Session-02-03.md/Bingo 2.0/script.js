document.addEventListener('DOMContentLoaded', function() {
    const tablas = [
        Columnas(Bingo(), 0), 
        Columnas(Bingo(), 1), 
        Columnas(Bingo(), 2), 
        Columnas(Bingo(), 3), 
        Columnas(Bingo(), 4), 
        MarcaX(Bingo())
    ];

    let printResultado = '';

    tablas.forEach((tabla, index) => {
        let numeroTabla = index + 1;
        printResultado += '<div class="accordion-item">';
        printResultado += '<h2 class="accordion-header" id="heading' + numeroTabla + '">';
        printResultado += '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + numeroTabla + '" aria-expanded="false" aria-controls="collapse' + numeroTabla + '">';
        printResultado += 'Bingo #' + numeroTabla;
        printResultado += '</button>';
        printResultado += '</h2>';
        printResultado += '<div id="collapse' + numeroTabla + '" class="accordion-collapse collapse" aria-labelledby="heading' + numeroTabla + '" data-bs-parent="#accordionExample">';
        printResultado += '<div class="accordion-body">';
        printResultado += '<div class="bingo-board">';
        printResultado += Vtabla(tabla);
        printResultado += '</div>';
        printResultado += '</div>';
        printResultado += '</div>';
        printResultado += '</div>';
    });

    document.getElementById('accordionExample').innerHTML = printResultado;
});

function Bingo() {
    const tabla = [];
    for (let iteracionTabla = 0; iteracionTabla < 5; iteracionTabla++) {
        const row = [];
        for (let iteracion = 0; iteracion < 5; iteracion++) {
            row.push({ number: Math.floor(Math.random() * 100) + 1, color: false });
        }
        tabla.push(row);
    }
    return tabla;
}

function Columnas(tabla, col) {
    for (let iteracionTabla = 0; iteracionTabla < 5; iteracionTabla++) {
        tabla[iteracionTabla][col].color = true;
    }
    return tabla;
}

function Diagonal(tabla, Derecha) {
    for (let iteracionTabla = 0; iteracionTabla < 5; iteracionTabla++) {
        if (Derecha) {
            tabla[iteracionTabla][iteracionTabla].color = true;
        } else {
            tabla[iteracionTabla][4 - iteracionTabla].color = true;
        }
    }
    return tabla;
}

function MarcaX(tabla) {
    Diagonal(tabla, true);
    Diagonal(tabla, false);
    return tabla;
}

function Vtabla(tabla) {
    let html = '';
    tabla.forEach(row => {
        row.forEach(cell => {
            html += `<div class="bingo-cell${cell.color ? ' color' : ''}">${cell.number}</div>`;
        });
    });
    return html;
}
