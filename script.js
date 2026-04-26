// let firstCard = 10
// let secondCard = 11
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
//     let card = 5
//     sum += card
//     cards.push(card)
//     renderGame()
// }
// messageEl.textContent = message
// sumEl.textContent = "Sum: " + sum
// cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    }
    else if (player2Time < player1Time) {
        return player2Time
    }
    else {
        return player1Time
    }
}
let fastestTime = getFastestRaceTime()
console.log(fastestTime)
function totalRaceTime() {
    return player1Time + player2Time
}
let totalTime = totalRaceTime()
console.log(totalTime)