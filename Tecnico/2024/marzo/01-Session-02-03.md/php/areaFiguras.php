<?php
include('libreria/figuras.php');
$lado = new Lado(4);
$base = new Base(2);
$altura = new Altura(3);
$areaFigura = new figuras(Lado $lado, Base $base, Altura $altura);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Areas de las figuras</h1>
    <p>
    <p><strong>Area del Cuadrado</strong><?php echo $areaFigura->Cuadrado();?></p>
    <p><strong>Area del Rectangulo</strong><?php echo $areaFigura->Rectangulo();?></p>
    <p><strong>Area del Triangulo</strong><?php echo $areaFigura->Triangulo();?></p>
    </p>
</body>
</html>