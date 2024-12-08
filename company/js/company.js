// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    var signupBtn = document.querySelector(".signup-btn");
    var loginBtn = document.querySelector(".login-btn");
    var loginBox = document.querySelector(".login-box");
    var signupBox = document.querySelector(".signup-box");

    // Handle Sign-Up button click
    signupBtn.onclick = function () {
        signupBox.classList.add("active");
        signupBox.classList.remove("d-none");
        loginBox.classList.remove("active");
        loginBtn.classList.remove("d-none");
        signupBtn.classList.add("d-none");
    };

    // Handle Sign-In button click
    loginBtn.onclick = function () {
        signupBox.classList.remove("active");
        signupBox.classList.add("d-none");
        loginBox.classList.add("active");
        loginBtn.classList.add("d-none");
        signupBtn.classList.remove("d-none");
    };
});
