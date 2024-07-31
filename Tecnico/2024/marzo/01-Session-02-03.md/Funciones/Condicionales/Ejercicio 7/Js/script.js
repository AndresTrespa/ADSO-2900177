/**
 * función condición - Promedio de tres notas
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */
//parametros
let notaTotal
let por1
let por2
let por3
let mostrar
let mostrarFinal
function promedioTresNotas(paNota1,paNota2,paNota3){
    paNota1=paNota1
    paNota2=paNota2
    paNota3=paNota3
    por1=paNota1*0.2
    por2=paNota2*0.35
    por3=paNota3*0.45
    notaTotal=por1+por2+por3
    if(notaTotal>4.5){
        mostrar="La nota es superior en parametros"
    }else{
        if(notaTotal<=4.5  ||  notaTotal> 3.5){
        mostrar="La nota es buena en parametros"
        }else{
            if(notaTotal<=3.5 || notaTotal>=3.0){
            mostrar="La nota es media en parametros"
            }else{
                mostrar="La nota es mala en parametros"
            }
        }
    }
    mostrarFinal="La nota 1 es: " + por1  + "\n" + 
    "la nota 2 es: " + por2 + "\n"  + 
    "La nota 3 es: " + por3 +  "\n"  +
    "La nota Final es:  " + notaTotal +  "\n"  +
    mostrar
    return(mostrarFinal)
}
//expresion
const notasExp=function(pnota1,pnota2,pnota3){
    let nota1=pnota1;
    let nota2=pnota2;
    let nota3=pnota3;
    let porcentaje1,porcentaje2,porcentaje3,suma;
    porcentaje1=nota1*0.2;
    console.log("El porcentaje de la nota "+nota1+" es "+porcentaje1);
    porcentaje2=nota2*0.35;
    console.log("El porcentaje de la nota "+nota2+" es "+porcentaje2);
    porcentaje3=nota3*0.45;
    console.log("El porcentaje de la nota "+nota3+" es "+porcentaje3);
    suma=porcentaje1+porcentaje2+porcentaje3;
    console.log("La suma de los porcentajes de las notas es "+suma);

    if(suma>4.5){
        return "La nota es superior";
    }else if(suma>3.5){
        return "La nota es buena";
    }else if(suma>3){
        return "La nota es media";
    }else{
        return "La nota es mala";
    }
}