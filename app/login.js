const loginIcon = document.querySelector("#login-icon");
const loginCloseIcon = document.querySelector("#login-close-icon");
const loginForm = document.querySelector("#login-form");

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

const handleLogin = async (event) => {
  event.preventDefault();
  const users = await getUsers(getUsers);
  let userList = users.data.find((data) => findUser(data));
  console.log(userList);

  console.log("works");
};

loginForm.addEventListener("submit", handleLogin);
