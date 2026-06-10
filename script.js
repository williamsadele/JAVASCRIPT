let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let isAlive = true
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    renderGame()
}
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}
function renderGame() {
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
}

else if (sum === 21) {
    message = "Woohoo!"
    hasBlackJack = true
}

else{
    message = "You loose"
    isAlive = false
}
messageEl.textContent = message
sumEl.textContent = "Sum: " + sum
cardsEl.textContent = "Cards: "
for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
}
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}