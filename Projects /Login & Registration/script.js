let signupBtn = document.querySelector('.signup_Btn');
let signinBtn = document.querySelector('.signin_Btn');
let inputName = document.querySelector('.input_name');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let showHideIcon = document.querySelector('.fa-eye-slash');
let passwordInput = document.querySelector('.input_pass');
let text = document.querySelector('.text');


showHideIcon.addEventListener('click', ()=>{
    showHideIcon.classList.toggle('fa-eye-slash');
    showHideIcon.classList.toggle('fa-eye');
    passwordInput.type = passwordInput.type === 'password'? 'text' : 'password'
})

signinBtn.addEventListener('click', ()=>{
    inputName.style.maxHeight ='0'
    title.textContent='Sign In'
    text.textContent='Lost Password?'
    signupBtn.classList.add('btnInactive')
    signinBtn.classList.remove('btnInactive')
    underline.style.transform='translateX(40px)';

})
signupBtn.addEventListener('click', ()=>{
    inputName.style.maxHeight ='60px'
    title.textContent='Sign Up'
    text.textContent='Password Suggestions?'
    signupBtn.classList.remove('btnInactive')
    signinBtn.classList.add('btnInactive')
    underline.style.transform='translateX(0)';

})