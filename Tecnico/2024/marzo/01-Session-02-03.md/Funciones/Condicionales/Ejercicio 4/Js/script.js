/**
 * función condición - imprimir area de tres cuadrados
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */
//parametros
let areaCua1
let areaCua2
let areaCua3
let mostrar
function calcularAreas(paLado1,paLado2,paLado3){
    paLado1 = paLado1;
    paLado2 = paLado2;
    paLado3 = paLado3
    areaCua1 = paLado1 * paLado1;
    areaCua2 = paLado2 * paLado2;
    areaCua3 = paLado3 * paLado3;
    if(areaCua1 == areaCua2 && areaCua1 == areaCua3){
        mostrar = "Las areas de los cuadrados son iguales, calculando mediante parametros"
    }else{
        if (areaCua1 > areaCua2 && areaCua1 > areaCua3){
            mostrar = "El area del cuadrado 1 es mayor,calculando mediante parametros "
        }else{
            if (areaCua2 > areaCua1 && areaCua2 > areaCua3){
                mostrar = "El area del cuadrado 2 es mayor,calculando mediante parametros "
            }else{
                mostrar = "El area del cuadrado 3 es mayor,calculando mediante parametros "
            }
        }
    }
    return(mostrar)
}


//expresion
const calcularAreasExp = function(paLado1,paLado2,paLado3){
    paLado1 = paLado1;
    paLado2 = paLado2;
    paLado3 = paLado3
    areaCua1 = paLado1 * paLado1;
    areaCua2 = paLado2 * paLado2;
    areaCua3 = paLado3 * paLado3;
    if(areaCua1 == areaCua2 && areaCua1 == areaCua3){
        mostrar = "Las areas de los cuadrados son iguales, calculando mediante expresion"
    }else{
        if (areaCua1 > areaCua2 && areaCua1 > areaCua3){
            mostrar = "El area del cuadrado 1 es mayor,calculando mediante expresion "
        }else{
            if (areaCua2 > areaCua1 && areaCua2 > areaCua3){
                mostrar = "El area del cuadrado 2 es mayor,calculando mediante expresion "
            }else{
                mostrar = "El area del cuadrado 3 es mayor,calculando mediante expresion "
            }
        }
    }
    return(mostrar)
}