window.addEventListener("load", init)

const cardsElement = document.querySelector("#cards")
const images = ["ballonnen", "cars", "goudkistje", "planes"]

function init() {
    cardsElement.addEventListener("click", showCard)
}

function showCard() {
    console.log("show card")
}

function shuffleArray(arr){
    arr = arr.sort(() => Math.random() - 0.5)
}