window.addEventListener("load", init)

const cardsElement = document.querySelector("#cards")
const images = ["ballonnen", "cars", "goudkistje", "planes"]

function init() {
    shuffleArray(images)
    cardsElement.addEventListener("click", showCard)
}

function showCard(event) {
    closeAllImages()
    if(event.target.nodeName === "IMG") {
        let id = parseInt(event.target.id.substring(4))
        console.log(id)
        event.target.src = `img/${images[id]}.png`
    }
}

function closeAllImages(){
    const allImages = document.querySelectorAll("img")
    for(let image of allImages){
        image.src = "img/vraagteken-plaatjes.png"
    }
}

function shuffleArray(arr){
    arr = arr.sort(() => Math.random() - 0.5)
}