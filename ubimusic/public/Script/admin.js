const cookie = decodeURIComponent(document.cookie)
const UsersNames = cookie.substring(11, cookie.search(';'))
const UsersPasswords = cookie.substring(cookie.search(';') + 17, cookie.length)
var list = []
var list_passwords = []
var list_name = document.getElementById("list_name")
//Guarda todos os nomes dos usuários numa lista, tirando a "," que separa os nomes:
if(UsersNames.search(",") == -1){
    list.push(UsersNames)
    list_passwords.push(UsersPasswords)
}   else{
    var users = UsersNames
    var pass = UsersPasswords
    while(users.search(",") != -1){
        list.push(users.substring(0, users.search(",")))
        list_passwords.push(pass.substring(0, pass.search(",")))
        users = users.substring(users.search(",") + 1, users.length)
        pass = pass.substring(pass.search(",") + 1, pass.length)
    }
}

for(var i = 1; i < list.length; i++){
    let br = document.createElement("br")
    let divgolbal = document.createElement("div")
    divgolbal.id = "divglobal"
    let label = document.createElement("label")
    label.innerText = list[i]
    let label_password = document.createElement("label")
    label_password.innerText = list_passwords[i]
    let label1 = document.createElement("label")
    label1.id = "label_username"
    label1.innerText = "User Name: "
    let label2 = document.createElement("label")
    label2.id = "label_password"
    label2.innerText = "Password: "
    let divlabel = document.createElement("div")
    let divlabe2 = document.createElement("div")
    divlabe2.id = "divlabel"
    divlabel.id = "divlabel"
    divlabel.appendChild(label1)
    divlabel.appendChild(label)
    divlabe2.appendChild(label2)
    divlabe2.appendChild(label_password)
    let form = document.createElement("form")
    form.action = "/admindelete"
    form.method = "POST"
    let button = document.createElement("button")
    button.innerText = "Apagar"
    button.type = "submit"
    let input = document.createElement("input")
    input.type = "text"
    input.name = "UserName"
    input.value = list[i]
    input.innerText = list[i]
    input.style.display = "none"
    form.appendChild(button)
    form.appendChild(input)
    divgolbal.appendChild(divlabel)
    divgolbal.appendChild(divlabe2)
    divgolbal.appendChild(form)
    list_name.appendChild(divgolbal)
    list_name.appendChild(br)
}