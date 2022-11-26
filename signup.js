var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");

var obj;

function signUp(e){
 e.preventDefault();
    obj = {
     firstName: firstName.value,
     lastName: lastName.value,
     email: email.value,
     password: password.value,
 },
  console.log(obj);
}