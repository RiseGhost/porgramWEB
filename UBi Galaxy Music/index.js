const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./modles/Users');
const { Script } = require('vm');

app.use(express.static(path.join(__dirname, 'public')));

//Body-Parser:
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//************************ */

//sequalize / express / body-parser / path /mysql2

//Routes:

//User Create:
app.post('/', function (req, res) {
    User.findAll({ //Search for all users in the database
        where: {
            nome: req.body.username,
        }
    }).then(function (user) { //If the user is found, go to an erro page
        if (user.length > 0) {
            console.log("User already exists");
            res.redirect('/contaErro');
        } else {
            console.log("User created successfully");
            User.create({
                nome: req.body.username,
                senha: req.body.password
            })
            res.sendFile("./views/index.html", { root: __dirname });
        }
    })
})

//Home Page:
app.get('/', function (req, res) {
    res.sendFile("./views/index.html", { root: __dirname });
});

//Register Page:
app.get('/conta', function (req, res) {
    res.sendFile("./views/register.html", { root: __dirname });
})

//Register Error Page:
app.get('/contaErro', function (req, res) {
    res.sendFile("./views/registerErro.html", { root: __dirname });
})

//Login Page:
app.get('/login', function (req, res) {
    res.sendFile("./views/login.html", { root: __dirname })
})

//Music Player:
app.post('/player', function (req, res) {
    User.findAll().then((function (users) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].nome == req.body.username && users[i].senha == req.body.password) {
                console.log("Usuario logado com sucesso!");
                res.sendFile("./views/player.html", { root: __dirname })
                return true;
            }
        }
        console.log("Usuario não encontrado!");
        res.sendFile("./views/login.html", { root: __dirname })
        return false;
    }))
})

app.post('/player/play', function (req, res) {
    var YoutubeMp3Downloader = require("youtube-mp3-downloader");

    //Configure YoutubeMp3Downloader with your settings
    /*var this = self*/
    var YD = new YoutubeMp3Downloader({
        "ffmpegPath": "C:\\Users\\jomig\\FFmpeg\\bin\\ffmpeg.exe",        // FFmpeg binary location
        "outputPath": "C:/Users/jomig/porgramWEB/UBi Galaxy Music/music",         // Output file location (default: the home directory)
        "youtubeVideoQuality": "highestaudio",  // Desired video quality (default: highestaudio)
        "queueParallelism": 20,                  // Download parallelism (default: 1)
        "progressTimeout": 2000,                // Interval in ms for the progress reports (default: 1000)
        "allowWebm": false                      // Enable download from WebM sources (default: false)
    });

    console.log("Music Downloading...");

    //Download video and save as MP3 file
    YD.download(req.body.videoid);   
    console.log("ID do video -> " + req.body.videoid);
    console.log("Music Downloaded!");
    res.sendFile("./views/player.html", { root: __dirname });
})

app.get('/player/search', function(req,res){
    var name = req.body.music;
    res.sendFile(__dirname + "/views/list.html", name);
})

app.listen(8082, function () {
    console.log('Server listening on port 8082');
})