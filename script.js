
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