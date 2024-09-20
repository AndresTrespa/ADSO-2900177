<?php
include('numero.php');
class operacion{
    private $num1;
    private $num2;
    public $suma;
    public $resta;
    public $multiplicacion;
    public $division;
    public function __construct(numero $numeroUno, numero $numeroDos){
        $this->num1 = $numeroUno;
        $this->num2 = $numeroDos;
    }
    public function Suma(){
        $this->sumar =  $this->num1->getValor() + $this->num2->getValor();
        return $this->sumar;
    }
    public function Resta(){
        $this->restar =  $this->num1->getValor() - $this->num2->getValor();
        return $this->restar;
    }
    public function Multiplicar(){
        $this->multiplicar =  $this->num1->getValor() * $this->num2->getValor();
        return $this->multiplicar;
    }
    public function Dividir(){
        $this->dividir =  $this->num1->getValor() + $this->num2->getValor();
        return $this->dividir;
    }
}
?>