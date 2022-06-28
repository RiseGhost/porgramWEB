setTimeout(() => {
    const cookie = document.cookie
    console.log("cookie🥮 = " + cookie)
    var PlatListName = decodeURIComponent(cookie.substring(cookie.search("playlist=") + 9, cookie.length))
    var lista = []

    if(PlatListName.search(",") == -1){
        lista.push(PlatListName)
    }   else{
        while(PlatListName.search(",") != -1){
            lista.push(PlatListName.substring(0, PlatListName.search(",")))
            PlatListName = PlatListName.substring(PlatListName.search(",") + 1, PlatListName.length)
        }
    }

    setTimeout(() => {
        let PlayList_List = document.getElementById("PlayList-List")
        for(var i = 0; i < lista.length; i++){ 
            console.log(lista[i])
            
            let div = document.createElement("div")
            let form = document.createElement("form")
            form.action = "/player/plalistdelete"
            form.method = "POST"
            let UserName = document.createElement("input")
            UserName.type = "text"
            UserName.name = "UserName"
            UserName.id = "UserName"
            UserName.innerText = cookie.substring(cookie.search("UserName=") + 9, cookie.search(";"))
            UserName.value = cookie.substring(cookie.search("UserName=") + 9, cookie.search(";"))
            UserName.innerHTML = cookie.substring(cookie.search("UserName=") + 9, cookie.search(";"))
            let DelButton = document.createElement("button")
            DelButton.innerText = "Apagar"
            DelButton.type = "submit"
            let PlayButton = document.createElement("button")
            PlayButton.innerText = "Play"
            PlayButton.type = "submit"
            let formPlay = document.createElement("form")
            formPlay.method = "POST"
            formPlay.action = '/player/musicplaylist'
            let label = document.createElement("Label")
            label.innerText = lista[i];
            let input = document.createElement("input")
            input.type = "text"
            input.name = "PlayListName"
            input.value = lista[i]
            input.innerText = lista[i]
            let br = document.createElement("br")
            form.appendChild(UserName)
            form.appendChild(input)
            form.appendChild(DelButton)
            formPlay.appendChild(PlayButton)
            formPlay.appendChild(UserName)
            formPlay.appendChild(input)
            div.appendChild(label)
            div.appendChild(form)
            div.appendChild(formPlay)
            div.appendChild(br)
            PlayList_List.appendChild(div)
        }
    }, 500);
}, 1000);