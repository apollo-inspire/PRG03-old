window.addEventListener("load", init)

const field = document.querySelector("#field")
const btn = document.querySelector("#addtodo")
const list = document.querySelector("#list")

let items = []

function init(){
    let checkSavedData = localStorage.getItem("myitems")
    console.log("opgeslagen data als json string")
    console.log(checkSavedData)

    items = JSON.parse(checkSavedData)
    console.log(items)

    // PHP         - Javascript
    // json_encode - JSON.stringify
    // json_decode - JSON.parse

    createStartList()
    btn.addEventListener("click", buttonHandler)
}

function buttonHandler(){
    if(field.value !== "") {
        addTodo(field.value)
        items.push(field.value)
        console.log(items)

        // maak een JSON STRING - die mag je opslaan met localStorage
        let jsonString = JSON.stringify(items)
        console.log(jsonString)

        localStorage.setItem("myitems", jsonString)
        field.value = ""
    }
}

function addTodo(content){
    const newli = document.createElement("li")
    list.appendChild(newli)
    newli.innerText = content
}

function createStartList(){
    for(let item of items) {
        console.log(item)
        addTodo(item)
    }
}
