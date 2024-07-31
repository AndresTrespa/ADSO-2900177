/**
 * función condición - calcula el pago total de la persona
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */
//parametros
let salarioMin=1500000
let salud
let pension
let arl
let deducible
function calcularSalario(paSalario){
    paSalario=paSalario
    console.log("El salario de la persona " + paSalario)
    if(paSalario>salarioMin*2){
        paSalario=paSalario + 162000
    }else{
        paSalario=paSalario + 0
    }
    salud=paSalario* 0.12
    pension=paSalario* 0.16
    arl=paSalario*0.052
    deducible=salud+pension+arl
    if(paSalario>salarioMin*4){
        paSalario = paSalario*0.04
        }else{
            paSalario = paSalario+0
        }
    paSalario=paSalario-deducible
    return("El salario de la persona calculada en parametros es " + paSalario)
}

//expresion
const calcularSalarioExp = function(paSalario){
    paSalario=paSalario
    console.log("El salario de la persona " + paSalario)
    if(paSalario>salarioMin*2){
        paSalario=paSalario + 162000
    }else{
        paSalario=paSalario + 0
    }
    salud=paSalario* 0.12
    pension=paSalario* 0.16
    arl=paSalario*0.052
    deducible=salud+pension+arl
    if(paSalario>salarioMin*4){
        paSalario = paSalario*0.04
        }else{
            paSalario = paSalario+0
        }
    paSalario=paSalario-deducible
    return("El salario de la persona calculada en expresion es " + paSalario)
}