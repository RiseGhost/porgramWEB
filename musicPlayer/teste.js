console.log("hello world");
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=warframe&key=AIzaSyBo9yC1b1cpXRt44kmCzN0ymxL6yOYiLKA")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        
        let videos = data.items;
        let imagem = document.querySelector("#lista");
        for (video of videos) {
            document.getElementById("lista").innerHTML = document.getElementById("lista").innerHTML + video.snippet.title + "\n";

            imagem.innerHTML += `<img src="${video.snippet.thumbnails.high.url}">` + "\n";

        }
       
    })

