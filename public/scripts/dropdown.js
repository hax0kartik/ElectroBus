var a = 1;
let amounts = []

function showDropDown(b){
    let elems = document.getElementsByClassName("dropdown")[b];
    if(a == 0){
        elems.style.display = "none";
        a = 1;
    }
    else{
        elems.style.display = "block";
        a = 0;
    }
}

let selected = 0

function selectedbox(clicked_id){
    let elems = document.getElementById(clicked_id)
    if(elems.className === "seat-greyed")
        return
    selected++
    let seat_selected = document.getElementById("add_margin")
    let amount = document.getElementById("details-content")
    seat_selected.innerHTML += clicked_id + "  "
    amount.innerText = "Total Cost : " + selected * amounts[0]
    elems.className = "seat-selected";
}

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}

let rands = []

for(let i = 0; i < 60; i++){
    rands.push(randomNumber(0, 100))
}


let dropdowns = document.getElementsByClassName("dropdown")
for(let i = 0 ; i < 4 * dropdowns.length; i++){
    let elems = document.getElementsByClassName("seats-row")
    for(let j = 0; j < 20; j++){
        let y = i * 20;
        console.log(y);
        elems[i].innerHTML += "<div class=\"seat\" id = \"" + (y + j) + "\" onclick = \"selectedbox(this.id);\">" ;
    }
}

let elems = document.getElementsByClassName("seat")
console.log(rands)
for(let i = 0; i < elems.length; i++){
    for(let k = 0; k < 60; k++){
        if(i === rands[k]){
            elems[i].className = "seat-greyed";
        }
    }
}

function setAmount(amount){
    amounts.push(amount)
}