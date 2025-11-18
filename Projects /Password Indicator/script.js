let showHideIcon = document.querySelector('.show_password');
let inputFeild = document.querySelector('.input_password');
let checklist = document.querySelectorAll('.list_item');

showHideIcon.addEventListener('click', () => {
  showHideIcon.classList.toggle('fa-eye-slash')
  showHideIcon.classList.toggle('fa-eye')
  inputFeild.type = inputFeild.type === "password" ? 'text' : 'password'
  
})

let validRegex = [
  { regex: /.{8,}/ },
  { regex: /[0-9]/ },
  { regex: /[a-z]/ },
  { regex: /[A-Z]/ },
  { regex: /[^A-Za-z0-9]/ }
]

inputFeild.addEventListener('keyup', () => {
  
  validRegex.forEach((item, i) => {
    
    let isValid = item.regex.test(inputFeild.value)
    
    if (isValid) {
      checklist[i].classList.add('checked');
    } else {
      checklist[i].classList.remove('checked');
      
    }
    
  })
  
})