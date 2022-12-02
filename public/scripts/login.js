class Page{
    constructor(){
        this.body = document.getElementsByTagName("body")[0]
    }

    async DownloadJSON(){
        let request = new Request("jsons/login.json")
        let response = await fetch(request)
        return response.json()
    }

    async GeneratePage(){
        let json = await this.DownloadJSON()
        let img = document.createElement("img")
        img.src = json["page"]["back-image"]
        img.className = "girl"
        this.body.appendChild(img)
        
        let login = document.createElement("div")
        login.className = "login"
        
        let h2 = document.createElement("h2")
        h2.innerText = json["page"]["heading"]
        h2.style = "color:white;"
        
        login.appendChild(h2)
        this.body.appendChild(login)

        let form = document.createElement("form")
        form.style = "margin-top:30px"

        let username_input = document.createElement("input")
        username_input.placeholder = json["page"]["placeholder"][0]
        username_input.type = "Text"

        let password_input = document.createElement("input")
        password_input.placeholder = json["page"]["placeholder"][1]
        password_input.type = "password"

        let br1 = document.createElement("br")
        let submit_input = document.createElement("input")
        submit_input.type = "submit"

        let br2 =document.createElement("br")
        let a = document.createElement("a")
        a.href = "#"
        a.innerText = json["page"]["forget"]

        let div1 = document.createElement("div")
        div1.className = "signin-container"

        form.appendChild(username_input)
        form.appendChild(password_input)
        form.appendChild(br1)
        form.appendChild(submit_input)
        form.appendChild(br2)
        form.appendChild(a)
        
        login.appendChild(form)

        let div4 = document.createElement("div")
        div4.className = "signin-container"
        let img1 = document.createElement("img")
        img1.src = json["page"]["container"]["google"]["image"]
        let p2 = document.createElement("p")
        p2.innerText = json["page"]["container"]["google"]["text"]
        div4.appendChild(img1)
        div4.appendChild(p2)

        let div2 = document.createElement("div")
        div2.className = "facebook-container"
        let img2 = document.createElement("img")
        img2.src = json["page"]["container"]["facebook"]["image"]
        let p3 = document.createElement("p")
        p3.innerText = json["page"]["container"]["facebook"]["text"]
        div2.appendChild(img2)
        div2.appendChild(p3)
        login.appendChild(div4)
        login.appendChild(div2)
    }
}