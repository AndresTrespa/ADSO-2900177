/**
 * función condición - imprimir la edad de 3 personas
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */
//parametros
let anioAct=2024
let mostrar
let edad1
let edad2
let edad3
let promedio
function calcularTresEdades(paEdad1,paEdad2,paEdad3){ 
    paEdad1=paEdad1
    paEdad2=paEdad2
    paEdad3=paEdad3
    edad1 = anioAct - paEdad1
    edad2 = anioAct - paEdad2
    edad3 = anioAct - paEdad3
    promedio = (edad1+edad2+edad3)/3
    if(promedio>17){
        mostrar="El promedio cumple la  mayoria de edad, mediante parametros"
    }else{
        mostrar="El  promedio no  cumple la  mayoria de edad, mediante parametros"
    }
    return(mostrar)
}

//expresion
const calcularTresEdadesExp= function(paEdad1,paEdad2,paEdad3){
    paEdad1=paEdad1
    paEdad2=paEdad2
    paEdad3=paEdad3
    edad1 = anioAct - paEdad1
    edad2 = anioAct - paEdad2
    edad3 = anioAct - paEdad3
    promedio = (edad1+edad2+edad3)/3
    if(promedio>17){
        mostrar="El promedio cumple la  mayoria de edad, mediante expresion"
    }else{
        mostrar="El  promedio no  cumple la  mayoria de edad, mediante expresion"
    }
    return(mostrar)  
}