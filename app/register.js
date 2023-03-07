const registerForm = document.querySelector("#register-form");

const API_ENDPOINTS = {
  newUser: "https://testapi.io/api/Domantas/resource/users",
};

// REGISTRATION

const createUser = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};

const handleRegister = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newUser = await createUser(API_ENDPOINTS.newUser, formData);
  console.log(newUser);
};

registerForm.addEventListener("submit", handleRegister);
