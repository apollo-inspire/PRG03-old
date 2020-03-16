window.addEventListener("load", init)

const field = document.querySelector("#field")
const btn = document.querySelector("#addtodo")
const list = document.querySelector("#list")

let items = ["Kat eten geven", "WC papier kopen", "Hamsteren"]

function init(){
    btn.addEventListener("click", addTodo)
}

function addTodo(){
    const newli = document.createElement("li")
    list.appendChild(newli)

    newli.innerText = field.value
}

