var clickedTime = 0;
var reactionTime = 999999999;
var createdTime = 0;

function randomShape() {
    var randomNumber = Math.floor(Math.random() * 2);
    switch (randomNumber) {
        case 0:
            return "square";
        case 1:
            return "circle";
    }
}

function randomColor() {
    return randomNumber = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}

function makebox() {
    var shape = randomShape();
    var game = document.getElementById("divbox");
    game.style.display = "block";
    if(shape == "square") {
        game.style.borderRadius = "0px";
    }   else {
        game.style.borderRadius = "100%";
    }
    game.style.marginLeft = Math.floor(Math.random() * 600) + "px";
    game.style.marginTop = Math.floor(Math.random() * 300) + "px";
    game.style.backgroundColor = randomColor();
    createdTime = Date.now();
}

function validate(){
    clickedTime = Date.now();
    var timeDifference = (clickedTime - createdTime) / 1000;
    if(timeDifference < reactionTime) {
        reactionTime = timeDifference;
        document.getElementById("recordTime").innerHTML = reactionTime + " Novo Recorde!";
    }   else{
        document.getElementById("recordTime").innerHTML = reactionTime;
    }
    document.getElementById("reactionTime").innerHTML = timeDifference;
    clickedTime = 0;
}
