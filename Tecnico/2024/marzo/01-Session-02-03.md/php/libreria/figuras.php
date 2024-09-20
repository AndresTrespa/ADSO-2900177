<?php
include ('areasGeometricasphp/lado.php');
include ('areasGeometricasphp/altura.php');
include ('areasGeometricasphp/base.php');
class figuras{
    private $lado;
    private $altura;
    private $base;
    public $cuadrado;
    public $rectangulo;
    public $triangulo;
    public function __construct(Lado $lado, Base $base, Altura $altura){
        $this->lado = $lados;
        $this->base = $bases;
        $this->altura = $alturas;
    }
    public function Cuadrado(){
        $this->areaCuadrado =  $this->lado->getLado() * $this->lado->getLado();
        return $this->areaCuadrado;
    }
    public function Rectangulo(){
        $this->areaRectangulo =  $this->base->getBase() * $this->altura->getAltura();
        return $this->areaRectangulo;
    }
    public function Triangulo(){
        $this->areaTriangulo =  $this->base->getBase() * $this->altura->getAltura()/2;
        return $this->areaTriangulo;
    }
}
?>
