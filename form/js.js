const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const cPassword = document.querySelector("#cpassword")
let success =true

form.addEventListener("click", (e) => {
  
  if  (!formValidInputs()){
    e.preventDefault()
  }
})
function formValidInputs() {
    const usernameValid = username.value.trim();
    const emailValid = email.value.trim();
    const passwordValid = password.value.trim();
    const cPasswordValid = cPassword.value.trim();

    if (usernameValid == "") {
        success=false
        setError(username, "enter valid name")
    }
    else {
        setSuccess
    }
    if (emailValid == "") {
        success=false
        setError(email, "email required")
    }
    else if (!validateEmail(emailValid)) {
        success=false
        setError(email, "enter valid email id")
    }
    else {
        setSuccess
    }
    if (passwordValid == "") {
success=false
        setError(password, "enter your password")
    }
    else if(!validPassword(passwordValid)){
        success=false
        setError(password,"password must be 8 characters")
    }

    else {
        setSuccess
    }
    if (cPasswordValid == "") {
        success=false
        setError(cPassword, "re-enter your password")
    }
    else if (cPasswordValid!==password){
        success=false
        setError(cPassword,"password does not match")
    }
    else {
        setSuccess
    }
}

function setError(element, messege) {
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector(".error")
    errorElement.innerText = messege
    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")
}
function setSuccess(element) {
    const inputGroup = element.parenetElement
    const errorElement = inputGroup.querySelector(".error")
    errorElement.innerText = ""
    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$")
}
const validPassword = (password)=>{
    return String(password)
    .match("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/") 
}
console.log(setError)

console.log(formValidInputs)