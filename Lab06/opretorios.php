<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $operator = $_POST['operator'];
        $result = 0;

        if($operator = 'Adicao'){
            $result = $num1 + $num2;
            echo ($result);
        }else if($operator = 'Subtracao'){
            $result = $num1 - $num2;
            echo ($result);
        }else if($operator = 'Multiplicacao'){
            $result = $num1 * $num2;
            echo ($result);
        }else if($operator = 'Divisao'){
            $result = $num1 / $num2;
            echo ($result);
        }
    ?>
</body>
</html>