<?php

$xml= simplexml_load_file('pauta.xml');

$NotaFinal = 0;
for ($i = 0; $i <= 4; $i++){
    echo 'Número: ' .$xml->cd[$i]->number."\n";
    echo 'Nome: ' .$xml->cd[$i]->name."\n";
    echo 'Nota Frequência 1: ' .$xml->cd[$i]->Exam1."\n";
    echo 'Nota Frequência 2: ' .$xml->cd[$i]->Exam2."\n";
    $NotaFinal = ($xml->cd[$i]->Exam1 + $xml->cd[$i]->Exam2)/2;
    echo 'Nota Final: ' .$NotaFinal."\n";
    if($NotaFinal >= 10){
        echo "Aluno aprovado.\n";
    }   else{
        echo "Aluno reprovado.\n";
    }
    echo "\n";
}
?>
