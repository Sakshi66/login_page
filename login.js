const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
//const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === ""){
        alert("Please enter a valid username!");
    }
    if (username === "username" && password === "password") {
        alert("You have successfully logged in!");
        location.reload();
    } else if (username === "username"){
        alert("Invalid Password!");
        location.reload();
    }
    else {
        alert("Invalid Username!");
    }
})