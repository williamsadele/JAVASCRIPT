
let myLeads = ["www.awesomelead.com"]

const inputEl = document.getElementById("input-el")
const openBox = document.getElementById("box")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)
openBox.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})
function renderLeads() {
 let listItems = ""
 for (let i = 0; i < myLeads.length; i++) {
     listItems += `
     <li>
        <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}
        </a>
     </li>
     `
 }
 ulEl.innerHTML = listItems
}