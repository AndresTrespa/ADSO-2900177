<?php
include'libreria/operacion.php';
$num1 = new numero(10);
$num2 = new numero(10);
$resultado = new operacion($num1,$num2);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>operaciones</h1>
    <p>
    <p><strong>Suma</strong><?php echo $resultado->Suma();?></p>
    <p><strong>Resta</strong><?php echo $resultado->Resta();?></p>
    <p><strong>Multiplicacion</strong><?php echo $resultado->Multiplicar();?></p>
    <p><strong>Division</strong><?php echo $resultado->Dividir();?></p>
    </p>
</body>
</html>
