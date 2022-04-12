function poli(){
    var a = "";
    var b = "gono";
    var name = document.getElementById("poligno").value;
    switch (name) {
        case "3":
            a = "Triângulo";
            b = "";
            break;
        case "4":
            a = "Quadrilátero";
            b = "";
            break;
        case "5":
            a = "Penta";
            break;
        case "6":
            a = "Hexa";
            break;
        case "7":
            a = "Hepta";
            break;
        case "8":
            a = "Octa";
            break;
        case "9":
            a = "Nona";
            break;
        case "10":
            a = "Deca";
            break;
        case "11":
            a = "Undeca";
            break;
        default:
            a = "Não é um polígono";
            break;
    }
    document.getElementById("final").innerText = a + b;
}