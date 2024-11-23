const loginBtn = document.getElementById("login-btn")
const registerBtn = document.getElementById("register-btn")
const loginForm = document.getElementById("login-form")
const registerForm = document.getElementById("register-form") 

loginBtn.addEventListener('click', function(){
    loginBtn.classList.add('active')
    registerBtn.classList.remove('active')
    loginForm.classList.add('active')
    registerForm.classList.remove('active')
})
registerBtn.addEventListener('click', function(){
    registerBtn.classList.add('active')
    loginBtn.classList.remove('active')
    registerForm.classList.add('active')
    loginForm.classList.remove('active')
})