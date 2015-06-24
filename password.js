var userLogin = {
    username: "bobdog",
    password: "d0gsr0ck!"
}
var password = prompt("Hello " + userLogin.username + ", please enter your password."); 

var counter = 0;
for (i=2;i > counter; i -= 1) {
        if (password == userLogin.password) {
            alert("Correct password. Enjoy!")
            break;
        }
        else {
            alert("Password is not correct. You have " + i + " tries left.");
            password = prompt("Hello " + userLogin.username + ", please enter your password."); 
        }
    if (password == userLogin.password) {

    }
    else {
     window.location="http://www.google.com";   
    }
}