<?php

$xml= simplexml_load_file('pauta.xml');


$dom = new DOMDocument('1.0', 'utf-8');

for ($i = 0; $i <= 4; $i++){
    echo 'Número: ' .$xml->cd[$i]->number."\n";
    echo 'Nome: ' .$xml->cd[$i]->name."\n";
    echo 'Nota Frequência 1: ' .$xml->cd[$i]->Exam1."\n";
    echo 'Nota Frequência 2: ' .$xml->cd[$i]->Exam2."\n";
    echo "\n";
}
?>
