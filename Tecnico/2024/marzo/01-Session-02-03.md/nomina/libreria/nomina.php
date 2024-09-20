<?php
class Nomina {
    public $nombre;
    public $salario;
    public $diasTrabajados; 
    public $auxilioTransporte; 
    public $totalDevengado;
    public $salud;
    public $pension;
    public $totalDeducciones;
    public $netoPagado;
    public $arl;

    public function calcularTotalDevengado() {
        $salarioDiario = $this->salario / 30;
        $this->totalDevengado = ($salarioDiario * $this->diasTrabajados) + $this->auxilioTransporte;
    }

    public function calcularDeducciones() {
        $porcentajeSalud = 0.04;
        $porcentajePension = 0.04; 
        $porcentajeARL = 0.005;

        $this->salud = $this->totalDevengado * $porcentajeSalud;
        $this->pension = $this->totalDevengado * $porcentajePension;
        $this->arl = $this->totalDevengado * $porcentajeARL;

        $this->totalDeducciones = $this->salud + $this->pension + $this->arl;
    }

    public function calcularNetoPagado() {
        $this->netoPagado = $this->totalDevengado - $this->totalDeducciones;
    }

    public function mostrarNomina() {
        echo "Nombre: {$this->nombre}<br>";
        echo "Salario: {$this->salario}<br>";
        echo "Días Trabajados: {$this->diasTrabajados}<br>";
        echo "Auxilio de Transporte: {$this->auxilioTransporte}<br>";
        echo "Total Devengado: {$this->totalDevengado}<br>";
        echo "Deducciones:<br>";
        echo " - Salud: {$this->salud}<br>";
        echo " - Pensión: {$this->pension}<br>";
        echo " - ARL: {$this->arl}<br>";
        echo "Total Deducciones: {$this->totalDeducciones}<br>";
        echo "Neto Pagado: {$this->netoPagado}<br>";
    }
}


?>
