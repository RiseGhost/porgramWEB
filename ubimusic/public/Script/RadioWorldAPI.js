var RadioName = document.getElementById("RadioName");
var RadioImg = document.getElementById("RadioImg");

var RadioStation = 0

let Radio1 = {
	name: "RFM",
	img: "https://mypromotions.sfo2.cdn.digitaloceanspaces.com/radios/29838.jpg",
	url: "https://playerservices.streamtheworld.com/api/livestream-redirect/rfmaac_SC",
	genre: "Pop Music,Top 40,Rock",
	country: "PT",
}

let RadioList = []
RadioList.push(Radio1);

let Radio2 = {
	name: "Rádio Comercial",
	img: "https://mypromotions.sfo2.cdn.digitaloceanspaces.com/radios/2518.jpg",
	url: "https://mcrscast1.mcr.iol.pt/comercial.mp3",
	genre: "Adult Contemporary,Pop Music",
	country: "PT",
}

RadioList.push(Radio2);

let Radio3 = {
	name: "TSF Rádio Notícias",
	img: "https://mypromotions.sfo2.cdn.digitaloceanspaces.com/radios/57054.jpg",
	url: "https://tsfdirecto.tsf.pt/tsfdirecto.mp3",
	genre: "News,Sports,Talk",
	country: "PT",
}

RadioList.push(Radio3);

let Radio4 = {
	name: "M80",
	img: "https://mypromotions.sfo2.cdn.digitaloceanspaces.com/radios/7675.jpg",
	url: "http://195.23.102.207/m80",
	genre: "Classic Hits,80s,70s",
	country: "PT",
}

RadioList.push(Radio4);

let Radio5 = {
	name: "Antena 1",
	img: "https://mypromotions.sfo2.cdn.digitaloceanspaces.com/radios/61329.jpg",
	url: "https://streaming-live.rtp.pt/liveradio/antena180a/playlist.m3u8",
	genre: "News,Public,Sports",
	country: "PT",
}

RadioList.push(Radio5);

let Radio6 = {
	name: "Cidade",
	img: "https://mypromotions.sfo2.cdn.digitaloceanspaces.com/radios/22052.jpg",
	url: "https://mcrscast1.mcr.iol.pt/cidadefm",
	genre: "Pop Music,Top 40",
	country: "PT",
}

RadioList.push(Radio6);

let Radio7 = {
	name: "Mega Hits",
	img: "https://mypromotions.sfo2.cdn.digitaloceanspaces.com/radios/61531.jpg",
	url: "https://playerservices.streamtheworld.com/api/livestream-redirect/MEGA_HITSAAC_SC",
	genre: "Pop Music",
	country: "PT",
}

RadioList.push(Radio7)

let Radio8 = {
	name: "Rádio Renascença",
	img: "https://mypromotions.sfo2.cdn.digitaloceanspaces.com/radios/14585.jpg",
	url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_RENASCENCAAAC_SC?pname=tdwidgets&dist=triton-widget",
	genre: "News,Catholic",
	country: "PT",
}

RadioList.push(Radio8);

let Radio9 = {
	name: "Rádio Oxigénio",
	img: "https://mypromotions.sfo2.cdn.digitaloceanspaces.com/radios/25545.jpg",
	url: "https://proic1.evspt.com/oxigenio_aac",
	genre: "Hip Hop,Electronic,World Music",
	country: "PT",
}

RadioName.innerHTML = RadioList[RadioStation].name;
RadioImg.src = RadioList[RadioStation].img;

var click = 0

//Função responsável por dar play e pausa a rádio no player.html
function PlayPause() {
	var audio = document.getElementsByTagName("audio"); //Pega o elemento audio
	var tittle = document.getElementById("Tittle") //Pega a label com o titulo da música
	var PlayPauseButton = document.getElementById("Play-PauseIcon"); //Pega o botão de play/pause da radio

	//Verefica se o utilizador esta a ouvir uma musica, se sim para a musica e altera o icone do play para pause
	if (document.getElementById("Play-Pause-Icon").innerText == "pause") {
		document.getElementById("Play-Pause-Icon").innerText = "play_arrow";
		audio[0].pause();
	}

	if (PlayPauseButton.innerText == "play_arrow") {
		if (click == 0) {
			audio[0].src = RadioList[RadioStation].url;
			click++
		}
		tittle.innerText = "Rádio";
		document.getElementById("music-player").style.backgroundImage = "url('https://i.pinimg.com/originals/56/9d/4f/569d4f427190c60eef9851ffd2e96c83.jpg')";
		audio[0].play();
		PlayPauseButton.innerHTML = "pause";
		RadioImg.style = "animation-play-state: running";
	} else {
		console.log("pause");
		audio[0].pause();
		PlayPauseButton.innerHTML = "play_arrow";
		RadioImg.style = "animation-play-state: paused";
	}
}

//Responsável por passar para a radio seguinte no player.html
//Se o utilizador estiver com uma radio ligada ele para a radio muda para a seguinte e voltar a da play
function After() {
	var audio = document.getElementsByTagName("audio");
	RadioStation++;
	if (RadioStation >= RadioList.length) {
		RadioStation = 0;
		if (document.getElementById("Play-Pause-Icon").innerText == "play_arrow") {
			if (audio[0].paused) {
				audio[0].src = RadioList[RadioStation].url;
			} else {
				audio[0].pause();
				audio[0].src = RadioList[RadioStation].url;
				audio[0].play();
			}
		}
		RadioName.innerHTML = RadioList[RadioStation].name;
		RadioImg.src = RadioList[RadioStation].img;
	} else {
		if (document.getElementById("Play-Pause-Icon").innerText == "play_arrow") {
			if (audio[0].paused) {
				audio[0].src = RadioList[RadioStation].url;
			} else {
				audio[0].pause();
				audio[0].src = RadioList[RadioStation].url;
				audio[0].play();
			}
		}
		RadioName.innerHTML = RadioList[RadioStation].name;
		RadioImg.src = RadioList[RadioStation].img;
	}
}

//Responsável por passar para a radio anterior no player.html
//Se o utilizador estiver com uma radio ligada ele para a radio muda para a anterior e voltar a da play
function Before() {
	var audio = document.getElementsByTagName("audio");
	RadioStation--;
	if (RadioStation < 0) {
		RadioStation = RadioList.length - 1;
		if (document.getElementById("Play-Pause-Icon").innerText == "play_arrow") {
			if (audio[0].paused) {
				audio[0].src = RadioList[RadioStation].url;
			} else {
				audio[0].pause();
				audio[0].src = RadioList[RadioStation].url;
				audio[0].play();
			}
		}
		RadioName.innerHTML = RadioList[RadioStation].name;
		RadioImg.src = RadioList[RadioStation].img;
	} else {
		if (document.getElementById("Play-Pause-Icon").innerText == "play_arrow") {
			if (audio[0].paused) {
				audio[0].src = RadioList[RadioStation].url;
			} else {
				audio[0].pause();
				audio[0].src = RadioList[RadioStation].url;
				audio[0].play();
			}
		}
		RadioName.innerHTML = RadioList[RadioStation].name;
		RadioImg.src = RadioList[RadioStation].img;
	}
}