/**
 * función - sueldo
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */

//parametros
function sueldoPersona(paDias,paValorDia){
    paDias = paDias;
    paValorDia = paValorDia;
    let sueldo = paDias * paValorDia;
    let salud = sueldo * 0.12;
    let pension = sueldo * 0.16;
    let arl =  sueldo * 0.052;
    let deducible = salud + pension + arl ;
    let totalPagar = sueldo - deducible;
    return ("El sueldo de la persona en total  en parametros es de " + totalPagar)
}
 //expresion
 const sueldoPersonaExp = function(paDias,paValorDia){
    paDias = paDias;
    paValorDia = paValorDia;
    let sueldo = paDias * paValorDia
    let salud = sueldo * 0.12;
    let pension = sueldo * 0.16;
    let arl =  sueldo * 0.052;
    let deducible = salud + pension + arl ;
    let totalPagar = sueldo - deducible;
    return ("El sueldo de la persona en total  en expresion es de " + totalPagar)
}