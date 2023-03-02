const loginIcon = document.querySelector("#login-icon");
const loginCloseIcon = document.querySelector("#login-close-icon");
const loginForm = document.querySelector("#login-form");

// LOGIN ICON OPEN - CLOSE FORM
let countClicks = 0;
loginIcon.addEventListener("click", (event) => {
  event.preventDefault();
  countClicks++;
  loginForm.style.opacity = countClicks % 2 === 1 ? "1" : "0";
});
