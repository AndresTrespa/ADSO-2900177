<?php
include 'libreria/nomina.php';
$empleado = new Nomina();
$empleado->nombre = "Andres Trespalacios";
$empleado->salario = 1300000;
$empleado->diasTrabajados = 20;
$empleado->auxilioTransporte = 100000;

$empleado->calcularTotalDevengado();
$empleado->calcularDeducciones();
$empleado->calcularNetoPagado();
$empleado->mostrarNomina();
?>
