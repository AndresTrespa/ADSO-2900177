<?php
include 'libreria/nomina.php';
$empleado = new Nomina();
echo $empleado->nombre = "Andres Trespalacios";
echo $empleado->salario = 1300000;
echo $empleado->diasTrabajados = 20;
echo $empleado->auxilioTransporte = 100000;

echo $empleado->calcularTotalDevengado();
echo $empleado->calcularDeducciones();
echo $empleado->calcularNetoPagado();
echo $empleado->mostrarNomina();
?>
