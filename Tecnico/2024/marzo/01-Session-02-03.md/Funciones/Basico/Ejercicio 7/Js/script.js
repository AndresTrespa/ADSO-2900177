/**
 * función - area cuadrado
 * Autor: Andres Felipe Trespalacios
 * Fecha: 10/04/2024
 */

//en parametros
let plado1; //globales
let plado2; //globales
function areasCuadrado(plado1) {
    plado1 = plado1
    let areaCuadrado = plado1 * plado1;
    return("El area del cuadrado en parametros es " + areaCuadrado) 
}
function areasRectangulo(plado1,plado2){
    plado1 = plado1
    plado2 = plado2
    let areaRectangulo = plado1 * plado2
    return("El area del rectangulo en parametros es " + areaRectangulo)
}
function areasTriagulo(plado1,plado2){
    plado1 = plado1
    plado2 = plado2
    let areaTriangulo = (plado1*plado2)/2
    return("El area del triangulo en parametros es " + areaTriangulo)
}
//la condicional  en parametros
function saberArea(plado1, plado2, pArea) {
    plado1 = plado1;
    plado2 = plado2;
    pArea = pArea;
    let area;
    if (pArea == "Cuadrado") {
        area = areasCuadrado(plado1);
    } else if (pArea == "Rectangulo") {
        area = areasRectangulo(plado1, plado2);
    } else if (pArea == "Triangulo") {
        area = areasTriagulo(plado1, plado2);
    } else {
        area = "Error, esta area geometrica no se encuentra";
    }
    return area;
}
// expresion 
const areasCuadradoConst= function(plado1){
    plado1 = plado1
    let areaCuadrado = plado1 * plado1;
    return("El area del cuadrado en expresion es " + areaCuadrado)
}
const  areasRectanguloConst = function(plado1,plado2){
    plado1 = plado1
    plado2 = plado2
    let areaRectangulo = plado1 * plado2
    return("El area del rectangulo en expresion es " + areaRectangulo)
}
const  areasTriaguloConst =  function(plado1,plado2){
    plado1 = plado1
    plado2 = plado2
    let areaTriangulo = (plado1*plado2)/2
    return("El area del triangulo en expresion es " + areaTriangulo)
}

//la condicional  en expresion
const saberAreasConst =  function (plado1, plado2, pArea){
    plado1 = plado1;
    plado2 = plado2;
    pArea = pArea;
    let area;
    if (pArea == "Cuadrado") {
        area = areasCuadradoConst(plado1);
    } else if (pArea == "Rectangulo") {
        area = areasRectanguloConst(plado1, plado2);
    } else if (pArea == "Triangulo") {
        area = areasTriaguloConst(plado1, plado2);
    } else {
        area = "Error, esta area geometrica no se encuentra";
    }
    return area;
}

