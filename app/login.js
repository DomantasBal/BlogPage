const loginCloseIcon = document.querySelector("#login-close-icon");
const loginForm = document.querySelector("#login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#username");
const loginIcon = document.querySelector("#login-icon");
const logoutIcon = document.querySelector("#logout-icon");

// LOGIN ICON OPEN - CLOSE FORM ANIMATION
let countClicks = 0;
loginIcon.addEventListener("click", (event) => {
  event.preventDefault();
  countClicks++;
  loginForm.style.opacity = countClicks % 2 === 1 ? "1" : "0";
  loginForm.style.display = countClicks % 2 === 1 ? "block" : "none";
});

// LOGIN CHECK

const getUsers = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

const handleLogin = async (e) => {
  e.preventDefault();
  const users = await getUsers(
    "	https://testapi.io/api/Domantas/resource/users"
  );
  let foundUser = users.data.find((data) => findUser(data));
  if (foundUser) {
    localStorage.setItem("user", JSON.stringify(foundUser));
    location.reload();
    loginForm.textContent = "Login Success";
    successLoginNotification();
  } else {
    loginForm.textContent = "Wrong Credentials";
    setTimeout(() => {
      location.reload();
    }, 2000);
    failLoginNotification();
  }
};

const findUser = (data) => {
  let userNameVal = username.value;
  let userPassVal = password.value;
  return userNameVal === data.username && userPassVal === data.password;
};

loginForm.addEventListener("submit", handleLogin);

window.onload = () => {
  checkUserLogin();
};

function checkUserLogin() {
  if (localStorage.length > 0) {
    console.log("loged in");
    loginIcon.style.display = "none";
  } else {
    logoutIcon.style.display = "none";
    console.log("loged out");
  }
}

// LOGIN NOTIFICATIONS
function successLoginNotification() {
  loginForm.innerHTML = `<p class="success"> Login Successful </p>`;
}
function failLoginNotification() {
  loginForm.innerHTML = `<p class="fail"> Wrong Credentials </p>`;
}

// LOGOUT ACTION

logoutIcon.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
