function registo(){
    let number = prompt("Insira o número de registos que pretende criar");
    let array = [];
    for(let i = 0; i < number; i++){
        let name = prompt("Insira o nome do utilizador");
        let age = prompt("Insira a idade do utilizador");
        let user = {
            name: name,
            age: parseInt(age)
        }
        array.push(user);
    }
    
    
    var maior = -1;
    for(let i = 0; i < array.length; i++){
        if(array[i].age > maior){
            maior = array[i].age;
        }
    }
    
    
    let menor = 999999;
    for(let i = 0; i < array.length; i++){
        if(array[i].age < menor){
            menor = array[i].age;
        }
    }


    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i].age;
    }
    console.log("soma: " + soma);
    console.log("array.length: " + array.length);
    let average = soma / array.length;


    document.getElementById("Maximum").innerHTML = document.getElementById("Maximum").innerHTML + maior;
    document.getElementById("Minimum").innerHTML = document.getElementById("Minimum").innerHTML + menor;
    document.getElementById("Average").innerHTML = document.getElementById("Average").innerHTML + average;
    document.getElementById("Number").innerHTML = document.getElementById("Number").innerHTML + array.length;
}