var email = document.getElementById("email");
var password = document.getElementById("password");
var btn = document.getElementById("btn");

var obj;
function signupPage(){
    window.location.replace("signup.html")
}
function login(e) {
    e.preventDefault();
    obj = {
        email: email.value,
        password: password.value,
    },
    console.log(obj);
   
}