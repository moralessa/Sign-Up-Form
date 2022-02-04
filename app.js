const form = document.getElementById('myForm');
const password = document.getElementById('password');
const confirmation = document.getElementById('passwordConfirmation');
const errorMessage = document.getElementById('error');

confirmation.addEventListener('input', () =>{
    if(password.value !== confirmation.value){
        errorMessage.textContent = '*Passwords do not match'
        password.classList.add('error');
        confirmation.classList.add('error');
    }else{
        errorMessage.textContent = ''
        password.classList.remove('error');
        confirmation.classList.remove('error');
    }
})