//PASSWORD VALIDATION

let pattern= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g ;
let inputPassword=document.getElementsByName("psw");
if(inputPassword.value.match(pattern)){
    alert('valid password');
} else {
    alert('invalid password');
}