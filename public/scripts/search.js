class Page{
    constructor(){
        this.body = document.getElementsByTagName("body")[0]
    }

    async DownloadJson(loc){
        let request = new Request(loc)
        let response = await fetch(request)
        return response.json()
    }

    GenerateForm(json){
        /* generate form inside searchbar div */
        let searchbar = document.createElement("div")
        searchbar.className = "searchbar"
    
        let form = document.createElement("form")
        form.innerText = json["searchbar"]["form"]
        
        let input = document.createElement("input")
        input.placeholder = json["searchbar"]["from"]
        form.appendChild(input)
    
        let input2 = document.createElement("input")
        input2.placeholder = json["searchbar"]["to"]
        form.appendChild(input2)
    
        let input3 = document.createElement("input")
        input3.placeholder = json["searchbar"]["date"]
        input3.type = "date"
        form.appendChild(input3)
    
        let button = document.createElement("button")
        button.innerText = json["searchbar"]["button-text"]
        form.appendChild(button)
    
        searchbar.appendChild(form)
        return searchbar
    }

    GenerateHeading(json){
        /* create trending div */
        let trending = document.createElement("div")
        trending.className = "trending-heading"
        let h1 = document.createElement("h1")
        h1.innerText = json["page"]["heading"]
        trending.appendChild(h1)
        return trending
    }

    GenerateTrendingBox(searchjson, trendingjsonentry, i){
        let trendingBox = document.createElement("div")
        trendingBox.className = "trending-box"
    
        /* Generate left-content */
        let leftBox = document.createElement("div")
        leftBox.className = "left-content"
    
        let busName = document.createElement("div")
        busName.className = "bus-name"
        let busNameH1 = document.createElement("h1")
        busNameH1.innerText = trendingjsonentry["bus"]["name"]  
        busName.appendChild(busNameH1)
      
        let leftBoxDetailsContainer = document.createElement("div")
    
        let leftBoxDetailsContainer_p = document.createElement("p")
        leftBoxDetailsContainer_p.className = "tc-grey"
        leftBoxDetailsContainer_p.innerText = trendingjsonentry["bus"]["type"]
        
        let leftBoxDetailsContainer_wifiimg = document.createElement("img")
        leftBoxDetailsContainer_wifiimg.style = "height: 24px;"
        leftBoxDetailsContainer_wifiimg.src = searchjson["page"]["images"]["wifi"]
        
        let leftBoxDetailsContainer_bottleimg = document.createElement("img")
        leftBoxDetailsContainer_bottleimg.style = "height: 24px;"
        leftBoxDetailsContainer_bottleimg.src = searchjson["page"]["images"]["water-bottle"]
    
        let leftBoxDetailsContainer_lampimg = document.createElement("img")
        leftBoxDetailsContainer_lampimg.style = "height: 24px;"
        leftBoxDetailsContainer_lampimg.src = searchjson["page"]["images"]["lamp"]
    
        leftBoxDetailsContainer.appendChild(leftBoxDetailsContainer_p)
        if(trendingjsonentry["bus"]["facilities"]["wifi"] == true) 
            leftBoxDetailsContainer.appendChild(leftBoxDetailsContainer_wifiimg)
        if(trendingjsonentry["bus"]["facilities"]["water-bottle"] == true)
            leftBoxDetailsContainer.appendChild(leftBoxDetailsContainer_bottleimg)
        if(trendingjsonentry["bus"]["facilities"]["lamp"] == true) 
            leftBoxDetailsContainer.appendChild(leftBoxDetailsContainer_lampimg)
    
        let stopsContainer = document.createElement("stops")
        stopsContainer.className = "stops"
        let stopsContainer_img = document.createElement("img")
        stopsContainer_img.src = searchjson["page"]["images"]["stop"]
        stopsContainer_img.style = "height: 30px;"
        let stopsContainer_p = document.createElement("p")
        stopsContainer_p.innerText = trendingjsonentry["tour"]["stops"] + " stops"
        
        stopsContainer.appendChild(stopsContainer_img)
        stopsContainer.appendChild(stopsContainer_p)
        leftBox.appendChild(busName)
        leftBox.appendChild(leftBoxDetailsContainer)
        leftBox.appendChild(stopsContainer)
    
        /* Generate center-content */
        let centerContent = document.createElement("div")
        centerContent.className = "center-content"
    
        let content = document.createElement("div")
        content.className = "content"
        let content_h1 = document.createElement("h1")
        content_h1.innerText = trendingjsonentry["tour"]["departure"]
        let content_h2 = document.createElement("h2")
        content_h2.className = "tc-grey"
        content_h2.innerText = trendingjsonentry["tour"]["from"]
        let content_p = document.createElement("div")
        content_p.innerHTML = trendingjsonentry["tour"]["total-seats"]
        content_p.innerHTML += "<br> " + searchjson["extras"]["seats-available"]
    
        content.appendChild(content_h1)
        content.appendChild(content_h2)
        content.appendChild(content_p)
    
        let midcontent = document.createElement("div")
        midcontent.className = "midcontent"
        let midcontent_h2 = document.createElement("h2")
        midcontent_h2.className = "tc-grey"
        midcontent_h2.innerText = trendingjsonentry["tour"]["duration"]
        let midcontent_img = document.createElement("img")
        midcontent_img.src = searchjson["page"]["images"]["arrow"]
        midcontent_img.className = "arrow"
    
        midcontent.appendChild(midcontent_h2)
        midcontent.appendChild(midcontent_img)
    
        let rcontent = document.createElement("div")
        rcontent.className = "content"
        let rcontent_h1 = document.createElement("h1")
        rcontent_h1.innerText = trendingjsonentry["tour"]["arrival"]
        let rcontent_h2 = document.createElement("h2")
        rcontent_h2.className = "tc-grey"
        rcontent_h2.innerText = trendingjsonentry["tour"]["to"]
        let rcontent_p = document.createElement("div")
        rcontent_p.innerHTML = trendingjsonentry["tour"]["single-seats"]
        rcontent_p.innerHTML += "<br> " + searchjson["extras"]["single-seats"]
    
        rcontent.append(rcontent_h1)
        rcontent.append(rcontent_h2)
        rcontent.append(rcontent_p)
    
        let extradetailcontainer = document.createElement("div")
        extradetailcontainer.className = "extra-detail-container"
        
        let peopleratingcontainer = document.createElement("div")
        peopleratingcontainer.className = "people-rating-container"
        
        let peoplecontainer = document.createElement("div")
        peoplecontainer.className = "people-container"
        let peoplecontainer_img = document.createElement("img")
        peoplecontainer_img.src = searchjson["page"]["images"]["people"]
        peoplecontainer_img.style = "height:24px;"
        peoplecontainer.appendChild(peoplecontainer_img)
        peoplecontainer.innerHTML += trendingjsonentry["tour"]["people"]
    
        let ratingcontainer = document.createElement("div")
        ratingcontainer.className = "rating-container"
        let ratingcontainer_img = document.createElement("img")
        ratingcontainer_img.src = searchjson["page"]["images"]["star"]
        ratingcontainer_img.style = "height:24px;"
        ratingcontainer.appendChild(ratingcontainer_img)
        ratingcontainer.innerHTML += trendingjsonentry["tour"]["rating"]
    
        peopleratingcontainer.appendChild(peoplecontainer)
        peopleratingcontainer.appendChild(ratingcontainer)
    
        let startsfromcontainer = document.createElement("div")
        startsfromcontainer.className = "tc-grey"
        startsfromcontainer.innerHTML = searchjson["extras"]["starts-from"]
        startsfromcontainer.innerHTML += "<br>INR " + trendingjsonentry["tour"]["cost"]
        
        extradetailcontainer.appendChild(peopleratingcontainer)
        extradetailcontainer.appendChild(startsfromcontainer)
    
        centerContent.appendChild(content)
        centerContent.appendChild(midcontent)
        centerContent.appendChild(rcontent)
        centerContent.appendChild(extradetailcontainer)
    
        /* Generate right content */
        let rightcontent = document.createElement("div")
        rightcontent.className = "right-content"
        let rddc = document.createElement("div")
        rddc.className = "right-deal-departure-container"
    
        let dealContainer = document.createElement("div")
        dealContainer.className = "deal-container"
        let dealContainer_p = document.createElement("p")
        dealContainer_p.innerHTML = searchjson["extras"]["deal"]
        let dealContainer_img = document.createElement("img")
        dealContainer_img.src = searchjson["page"]["images"]["ideal"]
        dealContainer_img.style = "height: 24px;"
        dealContainer.appendChild(dealContainer_p)
        dealContainer.appendChild(dealContainer_img)
    
        let dealContainer2 = document.createElement("div")
        dealContainer2.className = "deal-container"
        let dealContainer2_img = document.createElement("img")
        dealContainer2_img.src = searchjson["page"]["images"]["schedule"]
        dealContainer2_img.style = "height: 24px;"
        let dealContainer2_p = document.createElement("p")
        dealContainer2_p.innerHTML = searchjson["extras"]["departure"]
        dealContainer2_p.innerHTML += "<br> " + trendingjsonentry["tour"]["departure-date"] 
        dealContainer2.appendChild(dealContainer2_img)
        dealContainer2.appendChild(dealContainer2_p)
        
        let button = document.createElement("button")
        button.innerText = "Book Now"
        button.setAttribute("onclick", "showDropDown(" + i + ")")
    
        rddc.appendChild(dealContainer)
        rddc.appendChild(dealContainer2)
    
        rightcontent.appendChild(rddc)
        rightcontent.appendChild(button)
    
        console.log(rightcontent)
    
        trendingBox.appendChild(leftBox)
        trendingBox.appendChild(centerContent)
        trendingBox.appendChild(rightcontent)
    
        return trendingBox
    }

    GenerateDropDown(searchjson){
        /* create dropdown div */
        let dropdown = document.createElement("div")
        dropdown.className = "dropdown"
    
        let dropdown_p = document.createElement("p")
        dropdown_p.id = "top"
        dropdown_p.innerText = searchjson["extras"]["seat-select"]
    
        let seatsContainer = document.createElement("div")
        seatsContainer.className = "seats-container"
    
        let seatsContainer_p = document.createElement("p")
        seatsContainer_p.id = "front"
        seatsContainer_p.innerText = "FRONT"
    
        let seatsInnerContainer = document.createElement("div")
        seatsInnerContainer.className = "seats-inner-container"
    
        /* add seat rows */
        for(let i = 0; i < 2; i++){
            let seatsRow = document.createElement("div")
            seatsRow.className = "seats-row"
            for(let j = 0; j < 20; j++){
                let y = i * 20;
                console.log(y);
                let seat = document.createElement("div")
                seat.className = "seat"
                seat.id = (y + j)
                seat.setAttribute("onclick", "selectedbox(this.id)")
                seatsRow.appendChild(seat)
            }
            seatsInnerContainer.appendChild(seatsRow)
        }
    
        let spaceRow = document.createElement("div")
        spaceRow.className = "space"
        seatsInnerContainer.appendChild(spaceRow)
    
        /* add more seat rows */
        for(let i = 2; i < 4; i++){
            let seatsRow = document.createElement("div")
            seatsRow.className = "seats-row"
            for(let j = 0; j < 20; j++){
                let y = i * 20;
                console.log(y);
                let seat = document.createElement("div")
                seat.className = "seat"
                seat.id = (y + j)
                seat.setAttribute("onclick", "selectedbox(this.id)")
                seatsRow.appendChild(seat)
            }
            seatsInnerContainer.appendChild(seatsRow)
        }
    
        seatsContainer.appendChild(seatsContainer_p)
        seatsContainer.appendChild(seatsInnerContainer)
    
        let legend = document.createElement("div")
        legend.className = "legend"
        let legendClasses = ["seat", "seat-greyed", "seat-selected"]
        for(let i = 0; i < legendClasses.length; i++){
            let legendItem = document.createElement("div")
            legendItem.className = "legend-item"
    
            let legendbox = document.createElement("div")
            legendbox.classList.add("legend-box")
            legendbox.classList.add(legendClasses[i])
    
            let legendItem_p = document.createElement("p")
            legendItem_p.innerText = searchjson["extras"]["legend"][i]
    
            legendItem.appendChild(legendbox)
            legendItem.appendChild(legendItem_p)
            legend.appendChild(legendItem)
        }
    
        let rightContent = document.createElement("div")
        rightContent.className = "right-content2"
    
        let details = document.createElement("p")
        details.innerText = searchjson["extras"]["details"]
        details.id = "details"
    
        let addMargin = document.createElement("p")
        addMargin.id = "add_margin"
        addMargin.innerText = searchjson["extras"]["add-margin"]
    
        let detailsContent = document.createElement("p")
        detailsContent.id = "details-content"
        detailsContent.innerText = searchjson["extras"]["details-content"]
    
        let button = document.createElement("button")
        button.innerText = searchjson["extras"]["payment-button"]
    
        rightContent.appendChild(details)
        rightContent.appendChild(addMargin)
        rightContent.appendChild(detailsContent)
        rightContent.appendChild(button)
    
        dropdown.appendChild(dropdown_p)
        dropdown.appendChild(seatsContainer)
        dropdown.appendChild(legend)
        dropdown.appendChild(rightContent)
    
        return dropdown
    }

    async GenerateSearchPage(){
        let searchjson = await this.DownloadJson("jsons/search.json")
        let trendingjson = await this.DownloadJson("jsons/trending.json")
    
        /* create container div */
        let container = document.createElement("div")
        container.className = "container"
        container.appendChild(this.GenerateForm(searchjson))
        let trendingcontainer = document.createElement("div")
        trendingcontainer.className = "trending"
        trendingcontainer.appendChild(this.GenerateHeading(searchjson))
        for(let i = 0; i < trendingjson["trending"].length; i++){
            trendingcontainer.appendChild(this.GenerateTrendingBox(searchjson, trendingjson["trending"][i], i))
            trendingcontainer.appendChild(this.GenerateDropDown(searchjson))
        }
        container.appendChild(trendingcontainer)
        this.body.appendChild(container)
    }
}


