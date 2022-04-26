var BtnPlay = document.getElementById("btnPlay");
var Music = document.getElementById("music");
var Disco = document.getElementById("disco");

function play(){
    Music.play();
    Disco.style = "animation-play-state: running";
    if(Music.currentTime == Music.duration){
        Disco.style = "animation-play-state: paused";
    }
    
    //search music on youtube
    var search = document.getElementById("search");
    var searchBtn = document.getElementById("searchBtn");
    var searchValue = "cat";
    var url = "https://www.youtube.com/results?search_query=" + searchValue;
    console.log();
}
