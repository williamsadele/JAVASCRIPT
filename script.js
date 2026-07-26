
let myLeads = ["www.google.com", "www.youtube.com", "www.facebook.com"]
const inputEl = document.getElementById("input-el")
const openBox = document.getElementById("box")
const ulEl = document.getElementById("ul-el")

openBox.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

console.log(ulEl)
for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i] + " "
}