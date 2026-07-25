<<<<<<< HEAD
let myLeads = []
const inputEl =document.getElementById("input-el")
const inputBtn =document.getElementById("input-btn")
=======
let myLeads = ["www.google.com", "www.youtube.com", "www.facebook.com"]
const inputEl = document.getElementById("input-el")
const openBox = document.getElementById("box")

openBox.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
}
>>>>>>> 2dc0cf8 (Working with event listeners, for loops and arrays)
