const loginIcon = document.querySelector("#login-icon");
const loginCloseIcon = document.querySelector("#login-close-icon");
const loginForm = document.querySelector("#login-form");

loginIcon.addEventListener("click", (event) => {
  event.preventDefault();
  loginForm.style.display = "block";
});

loginCloseIcon.addEventListener("click", (event) => {
  event.preventDefault();
  loginForm.style.display = "none";
});
