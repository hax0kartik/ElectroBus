class Page{
    constructor(){
        this.body = document.getElementsByTagName("body")[0]
        this.herodiv = document.createElement("div")
        this.herodiv.className = "hero"    
    }

    async DownloadJSON(){
        let request = new Request("jsons/landing.json")
        let response = await fetch(request)
        return response.json()
    }

    async GeneratePage(){
        let json = await this.DownloadJSON()
        /* create content div */
        let contentdiv = document.createElement("div")
        contentdiv.className = "content"

        let h1 = document.createElement("h1")
        h1.innerHTML = json["page"]["content"]["heading"]
        contentdiv.appendChild(h1)

        let p = document.createElement("p")
        let i = document.createElement("i")
        i.innerHTML = json["page"]["content"]["paragraph"]
        p.appendChild(i)
        contentdiv.appendChild(p)

        let br = document.createElement("br")
        contentdiv.appendChild(br)

        let a = document.createElement("a")
        a.href = json["page"]["button"]["link"]
        a.innerHTML = json["page"]["button"]["text"]
        contentdiv.appendChild(a)

        /* create video */
        let source = document.createElement("source")
        source.src = json["page"]["video"]
        source.type = "video/mp4"
        let video = document.createElement("video")

        /* set specific aspects of video */
        video.autoplay = true
        video.loop = true
        video.muted = true
        video.playsInline = true
        video.className = "back-video"
        video.appendChild(source)

        this.herodiv.appendChild(video)
        this.herodiv.appendChild(contentdiv)
        this.body.appendChild(this.herodiv)
    }
}