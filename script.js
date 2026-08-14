
let myLeads = []

const inputEl = document.getElementById("input-el")
const openBox = document.getElementById("box")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("deletebtn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}
deleteBtn.addEventListener("dblclick", function (){
    localStorage.clear()
    myLeads = []
    renderLeads()
    console.log(myLeads)
})
openBox.addEventListener("click", function (){
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