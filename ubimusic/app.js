#!/usr/bin/env node
const fs = require('fs');
const mysql = require('mysql')
const http = require('http');
const https = require('https');
var privateKey = fs.readFileSync(__dirname + '/certs/selfsigned.key', 'utf8');
var certificate = fs.readFileSync(__dirname + '/certs/selfsigned.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./models/users');
const PlayList = require('./models/playlist');
app.use(express.static(path.join(__dirname, 'public')));

//Body-Parser:
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//************************ */

//sequelize / express / body-parser / path / mysql2 / http / https / fs / file-url //  nodejs-file-downloader

User.findAll({
    where: {
        nome: 'admin',
        senha: 'admin'
    }
}).then(function (users) {
    if (users.length == 0) {
        User.create({
            nome: 'admin',
            senha: 'admin'
        })
    }
})

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
    res.sendFile("./views/login.html", { root: __dirname });
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

//admin Page:
app.get('/admin', function (req, res) {
    console.log("admin")
    User.findAll().then(function (users) {
        res.clearCookie('videoTittle')
        res.clearCookie('videoid')
        res.clearCookie('videoImg')
        res.clearCookie('UserName')
        res.clearCookie('playlist')
        res.clearCookie('UsersNames')
        res.clearCookie('UsersPasswords')
        var str_user_names = ""
        var str_user_passwords = ""
        for (var i = 0; i < users.length; i++) {
            str_user_names += users[i].nome + ','
            str_user_passwords += users[i].senha + ','
        }
        res.cookie('UsersNames', str_user_names)
        res.cookie('UsersPasswords', str_user_passwords)
        res.sendFile("./views/admin.html", { root: __dirname })
    })
})

//Music Player:
app.post('/player', function (req, res) {
    User.findAll().then((function (users) {
        if (req.body.username == 'admin' && req.body.password == 'admin') {
            res.redirect('/admin');
            console.log("Admin logged in");
        } else {
            for (var i = 0; i < users.length; i++) {
                if (users[i].nome == req.body.username && users[i].senha == req.body.password) {
                    console.log("Usuario logado com sucesso!");
                    res.clearCookie('videoTittle')
                    res.clearCookie('videoID')
                    res.clearCookie('videoImg')
                    res.clearCookie('UserName')
                    res.clearCookie('playlist')
                    res.clearCookie('playlist_music')
                    res.cookie('UserName', users[i].nome);
                    res.clearCookie('playlist')
                    let playlists = "";
                    PlayList.findAll().then((function (playlist) {
                        for (var j = 0; j < playlist.length; j++) {
                            if (playlist[j].user_name == users[i].nome) {
                                playlists += playlist[j].name + ",";
                            }
                        }
                        if (playlists != "") {
                            res.cookie('playlist', playlists);
                        } else {
                            res.cookie('playlist', "Nenhuma Playlist encontrada");
                        }
                    }))
                    res.sendFile("./views/player.html", { root: __dirname })
                    return true;
                }
            }
            console.log("Usuario não encontrado!");
            res.sendFile("./views/login.html", { root: __dirname })
            return false;
        }
    }))
})

app.post('/player/play', function (req, res) {
    console.log("ID do video -> " + req.body.videoid);
    res.clearCookie('videoTittle')
    res.clearCookie('videoImg')
    res.clearCookie('videoID')
    res.clearCookie('playlist_music')
    res.cookie('videoTittle', req.body.videoTitle);
    res.cookie('videoImg', req.body.videoImg);
    res.cookie('videoID', req.body.videoid);
    res.sendFile("./views/player.html", { root: __dirname });
})
// https://www.youtube.film/Downloads/a/9/4/6/8/5/f/3/1/5/8/4/8…ft_Grabbitz_Official_Music_Video_VALORANT_Champions_2021.mp3

//Playlist Page:
app.post('/player/playlist', function (req, res) {
    res.clearCookie('videoTittle')
    res.clearCookie('videoImg')
    res.clearCookie('playlist')
    res.clearCookie('playlist_music')
    res.clearCookie('videoID')
    let playlists = "";
    console.log("User Name Playlists -> " + req.body.UserName)
    PlayList.findAll().then((function (playlist) {
        for (var i = 0; i < playlist.length; i++) {
            if (playlist[i].user_name == req.body.UserName) {
                playlists += playlist[i].name + ",";
            }
        }
        if (playlists != "") {
            res.cookie('playlist', playlists);
        } else {
            res.cookie('playlist', "Nenhuma Playlist encontrada");
        }
        res.sendFile("./views/playerlist.html", { root: __dirname });
    }))
})

//Playlist Create:
app.post('/player/playlistcreate', function (req, res) {
    console.log("Criação da Playlist")
    console.log("Plalist Name -> " + req.body.PlayListName)
    console.log("User Name -> " + req.body.UserName)
    PlayList.findAll({
        where: {
            name: req.body.PlayListName,
            user_name: req.body.UserName
        }
    }).then((function (playlist) {
        if (playlist.length > 0) {
            console.log("Playlist já existe!");
            res.sendFile("./views/playerlist.html", { root: __dirname });
        } else {
            console.log("Playlist criada com sucesso!");
            PlayList.create({
                user_name: req.body.UserName,
                name: req.body.PlayListName,
                music: ""
            })
            res.redirect(307, '/player/playlist');
        }
    }))
})

//Playlist Delete:
app.post('/player/plalistdelete', function (req, res) {
    console.log(req.body.PlayListName)
    console.log(req.body.UserName)
    console.log("UserName -> " + req.body.UserName)
    PlayList.destroy({
        where: {
            name: req.body.PlayListName,
            user_name: req.body.UserName
        }
    }).then((function (playlist) {
        console.log("Playlist deletada com sucesso!");
        res.redirect(307, '/player/playlist');
    }))
})

app.post('/palyer/addplaylist', function(req,res){
    var music_string = ""

    PlayList.findAll({
        where: {
            user_name: req.body.USERNAME,
            name:  req.body.PLAYNAME
        }
    }).then(function (data){
        console.log("data[0].music: ")
        console.log(data[0].music)
        if(data[0].music.length > 0){
            var str =  data[0].music
            if(str.search(req.body.VIDEOID) == -1){
                music_string = data[0].music + " |<X>| " + req.body.VIDEOID
            }   else{
                music_string = data[0].music
            }
        }   else{
            music_string = req.body.VIDEOID
        }
    
        console.log("music_string -> " + music_string)

            PlayList.update(
                { music: music_string},
                { where: { 
                    user_name: req.body.USERNAME,
                    name: req.body.PLAYNAME
                } }
            )
            
    })
    res.redirect(307, "/player/play")
})

//Download Music Tittle:
app.post('/player/download', function (req, res) {
    console.log(decodeURIComponent(req.body.MusicTittle));
    http.get(req.body.MusicTittle, function (file) {
        file.pipe(res);
    });
})

app.post('/player/musicplaylist', function(req,res){
    PlayList.findAll({
        where: {
        user_name: req.body.UserName,
        name: req.body.PlayListName
        }
    }).then(function (data){
        var str = ""
        str = data[0].music
        let list = ""

        if(str.search(" |<X>| ") == -1){
            res.cookie("playlist_music", str)
            res.sendFile("./views/player.html", { root: __dirname });
        }   else{
            while(str.search(" |<X>| ") != -1){
                list = list + str.substring(0, str.indexOf(" |<X>| ")) + ","
                str = str.substring(18, str.length)
            }
            list = list + str
            res.cookie("playlist_music", list)
            res.sendFile("./views/player.html", { root: __dirname });
        }
    })
})

app.post('/admindelete', function (req, res) {
    console.log("Delete user name: " + req.body.UserName)
    User.destroy({
        where: {
            nome: req.body.UserName
        }
    })
    res.redirect("/admin");
})

app.get('/player/search', function (req, res) {
    var name = req.body.music;
    res.sendFile(__dirname + "/views/list.html", name);
})

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8086, function () {
    console.log('Server listening on port 8086');
})
httpsServer.listen(8443, function () {
    console.log('Server listening on port 8443');
})
