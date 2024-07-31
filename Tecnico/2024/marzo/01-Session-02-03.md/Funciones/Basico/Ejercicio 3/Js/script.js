/**
 * función - multiplicación y division
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */

// parametros
function resultaYdivi(pResutado1, pResultado2, pnum1, pnum2){
    let num1 = pnum1;
    let num2 = pnum2;
    pResutado1 = num1 * num2;
    pResultado2 = num1 / num2;
    return ("La multiplicación en parámetros es " + pResutado1 + "\n" + 
    "La división en parámetros es " + pResultado2 + "\n" );
}
// expresion 
const resultaYdiviExp=function(pResutado1,pResultado2,pnum1,pnum2){
    let num1 = pnum1;
    let num2 = pnum2;
    pResutado1 = num1 * num2;
    pResultado2 = num1 / num2;
    return ("La multiplicación en expresion es " + pResutado1 + "\n" + 
    "La expresion en parámetros es " + pResultado2 + "\n" );
}