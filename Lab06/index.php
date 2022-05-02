<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        $my_array = array("Class01","Class02","Class03","Class04","Class05","Class06","Class07","Class08","Class09","Class10");
        foreach($my_array as $value){
            echo $value."<br>";
        }

        function coinToss(){
            $toss = rand(0,1);
            if($toss == 0){
                return "Heads";
            }else{
                return "Tails";
            }
        }

        echo coinToss();
    ?>
</body>
</html>