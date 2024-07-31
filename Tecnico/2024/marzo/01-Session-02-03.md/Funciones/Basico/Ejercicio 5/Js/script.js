   /**
 * función - promedio tres notas
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */

   //con paremtros
   function promedioTresNotas(paNot1,paNot2,paNot3,){
    paNot1=paNot1 
    paNot2=paNot2
    paNot3=paNot3
    let suma = paNot1+ paNot2 + paNot3
    let promedio = suma /3 ;
    return(  "El promedio de las tres notas son con parametros es  " + promedio )
   }   
   //en expresion
   const promedioTresNotasConstante = function(paNot1,paNot2,paNot3,){
    paNot1=paNot1 
    paNot2=paNot2
    paNot3=paNot3
    let suma = paNot1+ paNot2 + paNot3
    let promedio = suma /3 ;
    return(  "El promedio de las tres notas en una constante es  " + promedio )
   }