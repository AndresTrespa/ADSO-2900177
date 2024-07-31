/**
 * función - suma
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */
//Con parametros 
function sumarNumeros(pnum1,pnum2,psuma){
    let num1 = pnum1;
    let num2 = pnum2;
    let suma = psuma;
    suma = num1 + num2  +" La suma en Parametros";
    return(suma);
}
// expresion
const sumarNumerosexp = function(pnum1, pnum2) {
    pnum1=pnum1
    pnum2=pnum2
    let psumar = pnum1 + pnum2;
    psumar = "La suma de los números en expresión es " + psumar;
    return psumar;
}