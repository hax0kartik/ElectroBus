class Page{
    constructor(){
        this.pages = null
        this.body = document.getElementsByTagName("body")[0]
    }

    async DownloadJSON(){
        let request = new Request("jsons/explore.json")
        let response = await fetch(request)
        return response.json()
    }

    async GeneratePage(){
        let json = await this.DownloadJSON()
        this.pages = document.createElement("div")
        this.pages.className = "pages"

        for(let i = 0; i < json["pages"].length; i++){
            let page = document.createElement("div")
            page.className = "page"

            /* create main body */
            let mainbody = document.createElement("div")
            mainbody.className = "main-body"
            let busimage = document.createElement("div")
            busimage.className = "bus-image"
            let image = document.createElement("img")
            image.src = json["pages"][i]["bus"]["image"]
            busimage.appendChild(image)
            mainbody.appendChild(busimage)

            /* create side text */
            let sidetext = document.createElement("div")
            sidetext.className = "side-text"
            let h1 = document.createElement("h1")
            h1.innerText = json["pages"][i]["bus"]["name"]
            let h3 = document.createElement("h3")
            h3.innerText = "Places Covered:"
            let ul = document.createElement("ul")
            for(let j = 0; j < json["pages"][i]["places"].length; j++){
                let li = document.createElement("li")
                li.innerText = json["pages"][i]["places"][j]
                ul.appendChild(li)
            }
            sidetext.appendChild(h1)
            sidetext.appendChild(h3)
            sidetext.appendChild(ul)   

            /* create footer */
            let footer = document.createElement("div")
            footer.className = "footer"
            let location = document.createElement("div")
            location.className = "location"
            let locationname = document.createElement("h1")
            locationname.innerText = json["pages"][i]["location"]
            location.appendChild(locationname)
            let desc = document.createElement("div")
            desc.className = "description"
            desc.innerHTML = "<p><i>" + json["pages"][i]["description"] + "</i></p>"
            let anchor = document.createElement("a")
            anchor.href = "/search.html"
            let button = document.createElement("button")
            button.innerText = "Book Now"
            anchor.appendChild(button)

            /*append to footer*/
            footer.appendChild(location)
            footer.appendChild(desc)
            footer.appendChild(anchor)

            /* append sections to page */
            page.appendChild(mainbody)
            page.appendChild(sidetext)
            page.appendChild(footer)

            this.pages.appendChild(page)
        }
        this.body.appendChild(this.pages)
    }
}