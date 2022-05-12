let FURL = window.location.search
let music = ""

for(let i = 0; i < FURL.length; i++){
    if(i > 6){
        if(FURL[i] == "+"){
            music += " "
        }   else{
            music += FURL[i]
        }
    }
}

document.getElementById("pesquisa").value = music

let search = document.getElementById("search").value;
fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyBo9yC1b1cpXRt44kmCzN0ymxL6yOYiLKA`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let videos = data.items;
        let list = document.getElementById("lista");
        list.innerHTML = videos[0].snippet.title;
    })
