class Page{
    constructor(){
        this.body = document.getElementsByTagName("body")[0]
    }

    async DownloadJson(loc){
        let request = new Request(loc)
        let response = await fetch(request)
        return response.json()
    }

    async GeneratePage(){
        let json = await this.DownloadJson("jsons/contact-us.json")
        let h1 = document.createElement("h1")
        h1.className = "h1"
        h1.innerText = json["page"]["body"]
        
        this.body.appendChild(h1)
        
        let div = document.createElement("div")
        div.className = "contact-session"
        
        let div1 = document.createElement("div")
        div1.className = "border"
        this.body.appendChild(div)

        let form = document.createElement("form")
        form.className = "contact-form"
        form.action = "index.html"
        form.method = "post"

        let name_input = document.createElement("input")
        name_input.className = "contact-form-text"
        name_input.placeholder = json["page"]["form"][0]
        name_input.type = "text"

        let email_input = document.createElement("input")
        email_input.className = "contact-form-text"
        email_input.placeholder = json["page"]["form"][1]
        email_input.type = "email"

        let number_input = document.createElement("input")
        number_input.className = "contact-form-text"
        number_input.placeholder = json["page"]["form"][2]
        number_input.type = "text"

        let textarea = document.createElement("textarea")
        textarea.className = "contact-form-text"
        textarea.placeholder = json["page"]["form"][3]

        let submit_input = document.createElement("input")
        submit_input.className = "contact-form-btn"
        submit_input.type = "submit"
        submit_input.value = json["page"]["submit-button"]

        form.appendChild(name_input)
        form.appendChild(email_input)
        form.appendChild(number_input)
        form.appendChild(textarea)
        form.appendChild(submit_input)
        div.appendChild(div1)
        div.appendChild(form)
        
        this.body.appendChild(div)
    }
}