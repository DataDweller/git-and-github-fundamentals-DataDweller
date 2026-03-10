const loginBtn = document.getElementById("loginBtn")
const modal = document.getElementById("authModal")
const closeModal = document.getElementById("closeModal")

loginBtn.onclick = () => modal.classList.remove("hidden")
closeModal.onclick = () => modal.classList.add("hidden")


const tabs = document.querySelectorAll(".tab")
const forms = document.querySelectorAll(".form")

tabs.forEach(tab=>{
tab.onclick=()=>{

tabs.forEach(t=>t.classList.remove("active"))
forms.forEach(f=>f.classList.remove("active"))

tab.classList.add("active")

document
.getElementById(tab.dataset.target)
.classList.add("active")

}
})