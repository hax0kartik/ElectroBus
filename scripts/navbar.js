class NavBar{
    constructor(active){
        this.active = active
    }

    async DownloadJSON(){
        let request = new Request("jsons/navbar.json")
        let response = await fetch(request)
        return response.json()
    }

    async GenerateNavBar(){
        let json = await this.DownloadJSON()
        let body = document.getElementsByTagName("body")[0]
        let nav = document.createElement("nav")

        /* Generate logo */
        let img = document.createElement("img")
        img.src = json["navbar"]["icon"]
        img.className = "logo"

        /* Generate list */
        let ul = document.createElement("ul")
        for(let i = 0; i < json["navbar"]["items"].length; i++){
            let name = json["navbar"]["items"][i][0]
            let link = json["navbar"]["items"][i][1]

            let a = document.createElement("a")
            a.href = link
            a.innerText = name

            let li = document.createElement("li")
            if(name == this.active){
                li.className = "active"
            }
            li.appendChild(a)
            ul.appendChild(li)
        }

        /* Append to nav and then to body */
        nav.appendChild(img)
        nav.appendChild(ul)
        body.appendChild(nav)
    }
}