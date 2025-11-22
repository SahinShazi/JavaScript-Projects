let loginBtn = document.querySelector('#login_form');
let registerBtn = document.querySelector('#register_form');
let swithBtn = document.querySelector('#switch_effect');

function register (){
    loginBtn.style.left = '-400px';
    registerBtn.style.left = '50px';
    swithBtn.style.left = '110px';
}
function login (){
    loginBtn.style.left = '50px';
    registerBtn.style.left = '450px';
    swithBtn.style.left = '0';
}