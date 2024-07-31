 /**
 * función condición - calcular edad
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */
   //con parametros
   let anioAct=2024
   let calcular
   let mostrar
   function calcularEdad(pAnioNac){
    pAnioNac = pAnioNac
    calcular= anioAct - pAnioNac
    if(calcular>17){
        mostrar= "Es mayor de edad  calculando tu edad en parametros"
    }else{
      mostrar= "Es menor de edad  calculando tu edad en parametros "
    }
    return(mostrar);
   }
   //con expresion
   const calcularEdadExp = function(pAnioNac){
   pAnioNac = pAnioNac
    calcular= anioAct - pAnioNac
    if(calcular>17){
        mostrar= "Es mayor de edad  calculando tu edad en expresion"
    }else{
      mostrar= "Es menor de edad  calculando tu edad en expresion "
    }
    return(mostrar);
   }