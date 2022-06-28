var mussrc = document.getElementById("music")

document.querySelector('#music').autoplay = true;

//Create a progress bar for the music player with event listener:
let musictime = 1
var progressmusic = document.getElementById("music-progress-bar")
music.addEventListener("timeupdate", function () {
    var progress = (music.currentTime / music.duration) * 100
    progressmusic.value = progress
})

progressmusic.addEventListener("click", function (e) {
    var percent = e.offsetX / this.offsetWidth
    music.currentTime = percent * music.duration
})

var trade = 2
var cookie = document.cookie
var icon = document.getElementById("Play-Pause-Icon")
const DecodeCookie = decodeURIComponent(cookie)
var volume = document.getElementById("VolumeBar")
var volume_button = document.getElementById("volume")
console.log("cookie🥮 = " + DecodeCookie)
const videoid = DecodeCookie.substring(DecodeCookie.indexOf("videoID=") + 8, DecodeCookie.indexOf("videoID=") + 20)
console.log("videoid -> " + videoid)

//0d76eeffdemsh34ab09b07f77125p102cf5jsn68da52e5a57f
//0156f135famsh1540e75087bbc2fp1b9a88jsn16ec38d6045d
//12c0a2da15mshc628cc1a59326c4p1747bejsn2a56df30af41
//c3964790f7mshfa2a25e0441f6cep139428jsn978845572bfe

function music_file(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0d76eeffdemsh34ab09b07f77125p102cf5jsn68da52e5a57f',
            'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
        }
    };
    
    fetch('https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D' + videoid + '&format=mp3&responseFormat=json&lang=en', options)
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
}

if(cookie.search("videoID=") != -1){
    music_file()
}


//roxzii.chickenkiller.com


if (DecodeCookie.search("videoTittle") != -1) {
    var tittle = cookie.substring(cookie.search("videoTittle") + 12, cookie.search("videoImg") - 2)
    document.getElementById("Tittle").innerHTML = decodeURI(tittle);
}
var ImageURL = cookie.substring(cookie.search("videoImg") + 9, cookie.indexOf("videoID") - 2).replace("%3A", ":").replace("%2F", "/").replace("%2F", "/").replace("%2F", "/").replace("%2F", "/").replace("%2F", "/")
document.getElementById("music-player").style.backgroundImage = "url(" + ImageURL + ")"
function Play() {
    //Verefica se a radio esta a tocar:
    if (document.getElementById("Play-PauseIcon").innerText == "play_arrow") {
        if (trade % 2 == 0) {
            music.play()
            icon.innerHTML = "pause"
            document.getElementById("music-player").style.animationPlayState = "running"
            trade++;
        }
        else {
            music.pause()
            icon.innerHTML = "play_arrow"
            document.getElementById("music-player").style.animationPlayState = "paused"
            trade++;
        }
        if (trade == 20000) {
            trade = 2
        }
    }
}

//Evento responsável por alterar o volume da musica
volume.addEventListener("change", function(e){
    music.volume = volume.value/10
})

var volume_bar_visible = false

volume_button.addEventListener("click", function (event) {
    if(volume_bar_visible){
        volume.style.display = "none"
        volume_bar_visible = false
        document.getElementById("download").style = "margin-left: 500px;"
    }   else{
        volume.style.display = "inline"
        volume_bar_visible = true
        document.getElementById("download").style = "margin-left: 302px;"
    }
})


function PlayListadd(){
    document.getElementById("btn-group").style.display = "none"
    document.getElementById("Tittle").style.display = "none"
    document.getElementById("music-progress-bar").style.display = "none"
    let music_player = document.getElementById("music-player")
    music_player.style = "background-color: rgb(138, 144, 189);"

    let lista_playlist = document.createElement("div")
    lista_playlist.id = "lista-playlist"
    lista_playlist.style = "width: 85%; height: 85%; background-color: red; position: absolute;"
    music_player.appendChild(lista_playlist)

    let playlist_list = []

    if(cookie.search("videoID=") == -1){
        var playlist = decodeURIComponent(cookie.substring(cookie.search("playlist=") + 9, cookie.length))
        console.log("playlist -> " + playlist)
        while(playlist.search(",") != -1){
            playlist_list.push(playlist.substring(0, playlist.search(",")))
            playlist = playlist.substring(playlist.search(",") + 1, playlist.length)
        }
    }   else{
        var playlist = decodeURIComponent(cookie.substring(cookie.search("playlist=") + 9, cookie.search("videoTittle") - 2))
        console.log("playlist -> " + playlist)
        while(playlist.search(",") != -1){
            playlist_list.push(playlist.substring(0, playlist.search(",")))
            playlist = playlist.substring(playlist.search(",") + 1, playlist.length)
        }
    }

    for(let i = 0; i < playlist_list.length; i++){
        let form = document.createElement("form")
        form.method = "POST"
        form.action = "/palyer/addplaylist"
        form.onclick = form.submit
        let label = document.createElement("label")
        let input = document.createElement("input")
        input.name = "VIDEOID"
        input.type = "text"
        input.value = videoid
        let input_play_name = document.createElement("input")
        input_play_name.type = "text"
        input_play_name.value = playlist_list[i]
        input_play_name.style = "display: none;"
        input_play_name.name = "PLAYNAME"
        input.style = "display: none;"
        let input_user_name = document.createElement("input")
        input_user_name.type = "text"
        input_user_name.value = document.getElementById("UserName").value
        input_user_name.style = "display: none;"
        input_user_name.name = "USERNAME"
        label.innerText = playlist_list[i]
        form.appendChild(label)
        form.appendChild(input)
        form.appendChild(input_user_name)
        form.appendChild(input_play_name)
        lista_playlist.appendChild(form)
    }
}