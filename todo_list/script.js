const ul = document.querySelector("ul")
let liList = document.querySelectorAll("li")
const body = document.querySelector("body")
liListeners(liList)

function resetList() {
    liList = document.querySelectorAll("li")
    if(liList.count != 0){
        liListeners(liList)
    }
}



function liListeners(list) {
    list.forEach(element => {
        element.addEventListener("click", () => {
            document.querySelector("ul li.selected").classList.remove("selected")
            element.classList.add("selected")
        })
    });
}


function RemoveAll() {
    const elements = document.querySelectorAll(".list-element")
    for (const element of elements) {
        ul.removeChild(element)
    }
    resetList()
}

function AddElement() {
    const input = document.querySelector("input").value
    if(input.length > 0){
        const h1 = document.querySelector("h1:last-of-type:not(h1.list-title)")
        h1.setAttribute("style","display: none")
        const element = document.createElement("li")
        element.innerText = input
        removeSelected()
        element.setAttribute("class","list-element selected")
        ul.appendChild(element)
        resetList()
    }
    else {
        const h1 = document.querySelector("h1:last-of-type:not(h1.list-title)")
        h1.setAttribute("style","display: block")
    }
}

function RemoveAt() {
    for (const element of liList) {
        if(element.classList.contains("selected")){
            element.remove()
        }
    }
    const first = document.querySelector("li:first-of-type")
    first.classList.add("selected")
}

function removeSelected() {
    for (const element of liList) {
        element.classList.remove("selected")
    }
}


function MarkoffSelected() {
    for (const element of liList) {
        if(element.classList.contains("selected")){
            element.classList.toggle("marked")
        }
    }
}


