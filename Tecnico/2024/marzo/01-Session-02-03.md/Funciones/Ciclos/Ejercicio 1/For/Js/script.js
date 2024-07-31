/**
 * función ciclos - contador
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */

// Parámetros
let resultado = "";
function contar1al5For(pNumero, pContar) {
    pNumero=pNumero;
    pContar=pContar;
    if (pNumero === 1  && pContar === 5) {
        for (let i = pNumero; i <= pContar; i++) {
            resultado += i + " ";
        }
        return resultado;
    } else {
        return "No se puede realizar el ejercicio";
    }
}
//expresion
const  contar1al5ForExp= function(pNumero, pContar) {
    pNumero=pNumero;
    pContar=pContar;
    resultado = ""
    if (pNumero === 1  && pContar === 5) {
        for (let i = pNumero; i <= pContar; i++) {
            resultado += i + " ";
        }
        return resultado;
    } else {
        return "No se puede realizar el ejercicio";
    }
}
