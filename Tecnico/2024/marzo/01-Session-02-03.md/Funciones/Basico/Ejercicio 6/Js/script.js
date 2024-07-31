/**
 * función - promedio de porcentaje de tres notas
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */

// con parametros
function promedioDeNotasPorcentaje(pnota1,pnota2,pnota3,){
    pnota1=pnota1;
    pnota2=pnota2;
    pnota3=pnota3;
    let porcentaje1= pnota1*0.3;
    let porcentaje2= pnota2*0.3;
    let porcentaje3= pnota3*0.4;
    let sumaPor= porcentaje1+ porcentaje2 + porcentaje3;
    sumaPor = sumaPor.toFixed(2);
    return("La suma de notas con sus porcentajes son en parametros " + sumaPor);
}
// expresion
const promedioPorcenConstante = function(pnota1,pnota2,pnota3,){
    pnota1=pnota1;
    pnota2=pnota2;
    pnota3=pnota3;
    let porcentaje1= pnota1*0.3;
    let porcentaje2= pnota2*0.3;
    let porcentaje3= pnota3*0.4;
    let sumaPor= porcentaje1+ porcentaje2 + porcentaje3;
    sumaPor = sumaPor.toFixed(2);
    return("La suma de notas con sus porcentajes en expresion es  " + sumaPor);
}