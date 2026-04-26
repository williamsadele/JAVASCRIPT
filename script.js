// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let sum = firstCard + secondCard
// let cards = [firstCard, secondCard]
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")


// function startGame() {
//     renderGame()
// }
// function getRandomCard() {
//     return 5
// }
// function renderGame() {
//     if (sum <= 20) {
//     message = "Do you want to draw a new card?"
// }

// else if (sum === 21) {
//     message = "Woohoo!"
// }

// else{
//     message = "You loose"
//     isAlive = false
// }
// messageEl.textContent = message
// sumEl.textContent = "Sum: " + sum
// cardsEl.textContent = "Cards: "
// for (let i = 0; i < cards.length; i++) {
//     cardsEl.textContent += cards[i] + " "
// }
// }

// function newCard() {
//     let card = getRandomCard()
//     sum += card
//     cards.push(card)
//     renderGame()
// }
// messageEl.textContent = message
// sumEl.textContent = "Sum: " + sum
// cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard

// let randomNumber = Math.random() * 6

let flooredNumber = Math.floor(Math.random() * 6) + 8

console.log(flooredNumber)