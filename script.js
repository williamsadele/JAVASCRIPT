//document.getElementById("count").innerText = 5
// let myAge = 21 - 1

// console.log(myAge)
// let myAge = 21
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let bonusPoints = 50

// bonusPoints = bonusPoints + 50
// bonusPoints = bonusPoints - 75
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)



// function increament() {
//     console.log("The button was clicked")
// }

// function racecar() {
//     console.log(42)
// }
// racecar()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }
// logLapTime()

// let lapsCompleted = 0

// function increamentLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// increamentLap()
// increamentLap()
// increamentLap()

// console.log(lapsCompleted)

 let countEl = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
console.log(countEl)
let count = 0
function increment() {
    count = count + 1
    countEl.textContent = count
}

 function decrement() {
     count = count - 1
     countEl.textContent = count  
 }
 console.log(count)

 function save() {
     let countStr = count + " - "
     saveEl.textContent += countStr
     console.log(count)
 }
 function reset() {
    count = 0
    countEl.textContent = count
 }

// let message = "You have three new notifications"

// console.log(message)

// let messageTouser = "we have logged"


// let meme = "you out"


// let message = messageTouser + ", " + meme

// console.log(message)

// let myname = "will"
// let greeting = "hi, my name is"
// let myGreeting = greeting + " " + myname
// console.log(myGreeting)
// let welcomeEl = document.getElementById("welcome-el")
// let myname = "Will"
// let greeting = "Welcome back"

// welcomeEl.innerText = greeting + ", " + myname
// console.log(welcomeEl)
