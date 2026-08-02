
let myLeads = ["www.google.com", "www.youtube.com", "www.facebook.com"]
const inputEl = document.getElementById("input-el")
const openBox = document.getElementById("box")
const ulEl = document.getElementById("ul-el")

openBox.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    ulEl.innerHTML = ""
    for (let i = 0; i < myLeads.length; i++) {
        ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    }
})
// const container = document.getElementById("container")
// container.innerHTML = "<button>Click Me</button>"
// container.addEventListener("click", function(){
//     container.innerHTML += "<p>THANK YOU!</p>"
// })
