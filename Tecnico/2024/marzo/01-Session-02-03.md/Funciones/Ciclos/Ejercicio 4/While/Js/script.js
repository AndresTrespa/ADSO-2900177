/**
 * función ciclos - tabla de multiplicar del 9
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */

//parametros
let resultado
let mostrar

function tablaDel9(paNumero,paMulti){
    paNumero = paNumero;
    paMulti = paMulti;
    mostrar = "";
    if(paNumero === 1 && paMulti === 9){
        while(paNumero<=paMulti){
            resultado = paNumero * paMulti
            if(resultado%2 === 0){
                mostrar += paNumero + "X" + paMulti + "=" + resultado + " Es par en parametros \n" 
            }else{
                mostrar += paNumero + "X" + paMulti + "=" + resultado + " Es impar en parametros \n"
            }
           paNumero++
        }
    }else{
        mostrar = "Error"
    }
    return(mostrar)
}

//expresion
const  tablaDel9Exp = function(paNumero,paMulti){
    paNumero = paNumero;
    paMulti = paMulti;
    mostrar = "";
    if(paNumero === 1 && paMulti === 9){
        while(paNumero<=paMulti){
            resultado = paNumero * paMulti
            if(resultado%2 === 0){
                mostrar += paNumero + "X" + paMulti + "=" + resultado + " Es par en expresion \n" 
            }else{
                mostrar += paNumero + "X" + paMulti + "=" + resultado + " Es impar en expresion \n"
            }
           paNumero++
        }
    }else{
        mostrar = "Error"
    }
    return(mostrar)
}