const userName =document.getElementById('userName')
const password = document.getElementById('password')
const form = document.getElementById('formUserInput') 
const email_id = document.getElementById('email_id').innerHTML.value
const errorElement = document.getElementById('error')

const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
  

form.addEventListener('submit',(e) =>{
let messages =[]
if (userName.value.length = 0){
    messages.push('Name is required');
}

if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters');
}
if (password.value.length >=20){
    messages.push('Password must be less than 20 char ');
}
if (regex_pattern.test(email_id)) { //inputText.value.match(mailformat)
    return true;
    
     }
     else {
    messages.push('The email address is not valid');
    return false;
}

if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(',');
}
  
})