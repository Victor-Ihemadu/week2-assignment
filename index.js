const names = document.querySelector('#name-input')
const email = document.querySelector('#email-input')
const token = document.querySelector('#token-input')
const checkbox = document.querySelector('#check-input')
const warning = document.querySelector('#warning')
const submitBtn = document.querySelector('#button')

function error (color) {
    form.style.backgroundColor = color
}

const validateForm = (event) => { 
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (names.value.length < 3 || names.value === "" || names.value === number) {
        error("#fa5959")
        warning.textContent = "PLEASE ENTER A VALID NAME!!!"; 
            event.preventDefault()
    }   else if (!validation.test(email.value)) {
        error("#fa5959")
        warning.textContent = "PLEASE ENTER A VALID EMAIL!!!"
        event.preventDefault()
    } 
    else if ((token.value == "") || (token.value.length <  8)) {
        error('#fa5959')
        warning.textContent = "INVALID TOKEN!!!"
            event.preventDefault()
    } 
    else if (!checkbox.checked) {
        error('grey')
        warning.textContent = "YOU MUST AGREE TO THE PRIVACY POLICY"
        event.preventDefault()
    }   
    else { 
        error('#fa5959')
        return true
    }  
}

submitBtn.addEventListener("click", validateForm)
