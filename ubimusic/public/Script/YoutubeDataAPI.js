let FURL = window.location.search
let music = ""

for (let i = 7; i < FURL.length; i++) {
    if (FURL[i] == "+") {
        music += " "
    } else {
        music += FURL[i]
    }
}

document.getElementById("pesquisa").value = music;
console.log(music)
//My key -> AIzaSyBo9yC1b1cpXRt44kmCzN0ymxL6yOYiLKA
//Ruben key -> AIzaSyDbn9jFwiiv5x6EleaEDPEdem-AwsLRdTY
fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=150&q=${music}&videoEmbeddable=videoEmbeddableUnspecified&key=AIzaSyDbn9jFwiiv5x6EleaEDPEdem-AwsLRdTY`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let videos = data.items;
        console.log(videos);
        let list = document.getElementById("list");
        for (let i = 1; i < videos.length; i++) {

            let br = document.createElement("br");

            let div = document.createElement("form");
            div.className = "item";
            div.action = "/player/play"
            div.method = "POST"
            let label = document.createElement("Label");
            label.innerHTML = videos[i].snippet.title;
            let videoTittle = document.createElement("input");
            videoTittle.type = "text";
            videoTittle.name = "videoTitle";
            videoTittle.value = videos[i].snippet.title;
            videoTittle.style.display = "none";
            let textid = document.createElement("input");
            textid.type = "text";
            textid.name = "videoid";
            textid.id = "videoid";
            let textImg = document.createElement("input");
            textImg.type = "text";
            textImg.name = "videoImg";
            textImg.id = "videoImg";
            textImg.value = videos[i].snippet.thumbnails.high.url;
            textImg.style.display = "none";
            textid.value = videos[i].id.videoId;
            textid.innerHTML = videos[i].id.videoId;
            textid.innerText = videos[i].id.videoId;
            console.log(textid.innerText);
            console.log(textid.value);
            console.log(textid.innerHTML);
            console.log(textid.name);
            fetch("https://www.googleapis.com/youtube/v3/videos?id=" + videos[i].id.videoId + "&part=contentDetails,status&key=AIzaSyBo9yC1b1cpXRt44kmCzN0ymxL6yOYiLKA").then(function (response) {
                return response.json();    	
            }).then()
            textid.style = "display:none";
            let img = document.createElement("img");
            img.src = videos[i].snippet.thumbnails.medium.url;

            div.appendChild(img);
            div.appendChild(label);
            div.appendChild(textid);
            div.appendChild(br);
            div.appendChild(videoTittle);
            div.appendChild(textImg);

            div.onclick = function () {

                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'c3964790f7mshfa2a25e0441f6cep139428jsn978845572bfe',
                        'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
                    }
                };
                
                fetch('https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D' + document.getElementById("videoid").value + '&format=mp3&responseFormat=json&lang=en', options)
                    .then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        console.log(data)
                        if(data.file != null){
                            music.src = data.file
                            document.getElementById("play").style.display = "inline"
                            document.getElementById("TittleDownload").value = data.file;
                            console.log("Tiitle input -> " + document.getElementById("TittleDownload").value)
                            console.log("File -> " + data.file)
                            document.getElementById("music").autoplay
                        }   else{
                            setTimeout(music_file, 2000)
                        }
                })

                div.submit();
            }

            list.appendChild(div);
        }
    })