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
console.log(countEl)
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}