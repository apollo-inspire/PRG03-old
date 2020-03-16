let h = document.querySelector("#title")
h.innerHTML = "My to do list"

let list = document.querySelector("#todo")
console.log(list)

let btn = document.querySelector("#button")
btn.addEventListener("click", addItem)

window.addEventListener("click", doSomething)

function doSomething(event){
    console.log("You clicked somewhere")
}

function addItem(event){
    event.stopPropagation()
    console.log(event.target.id)
    console.log("you clicked the button")
    const newli = document.createElement("li")
    list.appendChild(newli)

    const veld = document.querySelector("#field")
    newli.innerHTML = veld.value
}

