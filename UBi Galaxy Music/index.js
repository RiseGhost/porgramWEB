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
app.get('/conta', function(req, res){
    res.sendFile("./views/register.html", { root: __dirname });
})

//Register Error Page:
app.get('/contaErro', function(req, res){
    res.sendFile("./views/registerErro.html", { root: __dirname });
})

//Login Page:
app.get('/login', function(req,res){
    res.sendFile("./views/login.html", {root: __dirname})
})

//Music Player:
app.post('/player', function(req,res){
    User.findAll().then((function(users){
        for(var i = 0; i < users.length; i++){
            if(users[i].nome == req.body.username && users[i].senha == req.body.password){
                console.log("Usuario logado com sucesso!");
                res.sendFile("./views/index.html", {root: __dirname})
                return true;
            }
        }
        console.log("Usuario não encontrado!");
        res.sendFile("./views/login.html", {root: __dirname})
        return false;
    }))
})

app.listen(8081, function(){
    console.log('Server listening on port 8081');
})