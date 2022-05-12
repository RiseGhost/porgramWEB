let FURL = window.location.search
let music = ""

for (let i = 0; i < FURL.length; i++) {
    if (i > 6) {
        if (FURL[i] == "+") {
            music += " "
        } else {
            music += FURL[i]
        }
    }
}



document.getElementById("pesquisa").value = music;
console.log(music)
fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${music}&key=AIzaSyBo9yC1b1cpXRt44kmCzN0ymxL6yOYiLKA`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let videos = data.items;
        console.log(videos);
        let list = document.getElementById("list");
        for(let i = 1; i < videos.length; i++){

            let br = document.createElement("br");

            let div = document.createElement("div");
            div.className = "item";

            let label = document.createElement("Label");
            label.innerHTML = videos[i].snippet.title;
            let img = document.createElement("img");
            img.src = videos[i].snippet.thumbnails.medium.url;

            div.appendChild(img);
            div.appendChild(label);
            div.appendChild(br);
            list.appendChild(div);

            
            list.appendChild(label);
            list.appendChild(img);
            list.appendChild(br);
        }
    })

