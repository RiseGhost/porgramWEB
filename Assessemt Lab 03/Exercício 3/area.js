const pi = 3.14159;

function area(r){
    return Math.floor(pi * r * r);
}

function calculateArea(){
    let r = document.getElementById("raio").value;
    
    document.getElementById("resultado").innerText = "A área do cículo é: " + area(r);
}

function text(){
    for (var i = 2; i <= 10; i++) {
        document.getElementById("text").value = document.getElementById("text").value + area(i) + "\n";
    }
}

function ciclo(){
    for (var i = 2; i <= 10; i++){
        console.log(area(i));
    }
}