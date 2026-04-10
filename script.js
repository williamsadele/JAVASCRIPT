
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}
function renderGame() {
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
}

else if (sum === 21) {
    message = "Woohoo!"
}

else{
    message = "You loose"
    isAlive = false
}
messageEl.textContent = message
sumEl.textContent = "Sum: " + sum
cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]
}

function newCard() {
    let card = 5
    sum += card
    renderGame()
}