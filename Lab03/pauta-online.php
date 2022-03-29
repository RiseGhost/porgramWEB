<!DOCTYPE html>
<html>
    <head>
    <link rel="stylesheet" href="./style.css">
    </head>

    <body>
        <h2>Pauta das Notas</h2>
        <?php
        $xml= simplexml_load_file('pauta.xml');

        $NotaFinal = 0;
        for ($i = 0; $i <= 4; $i++){
            echo 'Número: ' .$xml->cd[$i]->attributes()."<br>";
            echo 'Nome: ' .$xml->cd[$i]->name."<br>";
            echo 'Nota Frequência 1: ' .$xml->cd[$i]->Exam1."<br>";
            echo 'Nota Frequência 2: ' .$xml->cd[$i]->Exam2."<br>";
            $NotaFinal = ($xml->cd[$i]->Exam1 + $xml->cd[$i]->Exam2)/2;
            echo 'Nota Final: ' .$NotaFinal."<br>";
            ?>
            <div id="Aprovado">
                <?php
                if($NotaFinal >= 10){
                    echo "Aluno aprovado.\n";
                }
                ?>
            </div>
            <div id="Reprovado">
                <?php
                if($NotaFinal < 10){
                    echo "Aluno reprovado.\n";
                }
                ?>
            </div>
            <div>
                <?php
                echo "<br>";
                }
                ?>
            </div>
    </body>
</html>