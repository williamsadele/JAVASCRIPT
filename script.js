
let myLeads = []
const inputEl = document.getElementById("input-el")
const openBox = document.getElementById("box")
const ulEl = document.getElementById("ul-el")

openBox.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderLeads()
})
function renderLeads() {
 let listItems = ""
 for (let i = 0; i < myLeads.length; i++) {
     listItems += "<li>" + myLeads[i] + "</li>"
 }
 ulEl.innerHTML = listItems
}