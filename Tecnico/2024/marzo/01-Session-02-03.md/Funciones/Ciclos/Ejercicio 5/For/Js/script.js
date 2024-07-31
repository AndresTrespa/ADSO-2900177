/**
 * función ciclos - tabla de multiplicar par, impar imprimir "Buzz" y "Bass"
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */


let pares = 0;
let impares = 0;
let mostrar = "";
let resultado;
function tablaDel1al5For(paNum, paLimite) {
     paNum=paNum
     paLimite=paLimite
    for (let numero = paNum; numero <= paLimite; numero++) {
        for (let multiplicador = 1; multiplicador <= 5; multiplicador++) {
            resultado = numero * multiplicador;
            if (resultado % 2 === 0) {
                mostrar += numero + " X " + multiplicador + " = " + resultado + " (Buzz en parametros For)  \n";
                pares++;
            } else {
                mostrar += numero + " X " + multiplicador + " = " + resultado + " (Bass en parametros For) \n";
                impares++;
            }
        }
    }
    return mostrar + "\nCantidad de pares: " + pares + "\nCantidad de impares: " + impares;
}
//expresion

const  tablaDel1al5ForExp = function(paNum, paLimite){
    paNum=paNum
    paLimite=paLimite
    let pares = 0;
    let impares = 0;
    let mostrar = "";
    let resultado;

   for (let numero = paNum; numero <= paLimite; numero++) {
       for (let multiplicador = 1; multiplicador <= 5; multiplicador++) {
           resultado = numero * multiplicador;
            if (resultado % 2 === 0) {
               mostrar += numero + " X " + multiplicador + " = " + resultado + " (Buzz en expresión For)  \n";
               pares++;
           } else {
               mostrar += numero + " X " + multiplicador + " = " + resultado + " (Bass en expresión For) \n";
               impares++;
           }
       }
   }
   return mostrar + "\nCantidad de pares: " + pares + "\nCantidad de impares: " + impares;
}