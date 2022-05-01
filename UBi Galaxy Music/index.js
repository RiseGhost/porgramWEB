const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./modles/Users');

app.use(express.static(path.join(__dirname, 'public')));

/*
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
*/

//Body-Parser:
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//************************ */

app.get('/', function (req, res) {
    res.sendFile("./views/index.html", { root: __dirname });
    });

app.get('/conta', function(req, res){
    res.send("És mesmo gay")
})

app.get('/login', function(req,res){
    res.sendFile("./views/login.html", {root: __dirname})
})

app.post('/player', function(req,res){
    User.findAll().then((function(users){
        var name = users[0].dataValues.nome
        var password = users[0].dataValues.senha
        if(req.body.username == name && req.body.password == password){
            console.log("Logado")
            res.send("Logado com sucesso")
        } else {
            console.log("Erro")
            res.send("Erro")
        }
    }))
})

app.listen(8081, function(){
    console.log('listening on port 8081');
})