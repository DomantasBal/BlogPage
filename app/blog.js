const form = document.getElementById("new-post-form");
const blog = document.getElementById("blog");
const button = document.querySelector("#new-post-btn");

const API_ENDPOINTS = {
  get: "https://testapi.io/api/Domantas/resource/newPosts",
  post: "https://testapi.io/api/Domantas/resource/newPosts",
};

// SHOW POSTS ON WEBSITE LOAD
window.onload = async () => {
  const posts = await getData(API_ENDPOINTS.get);
  posts.data.forEach((post) => {
    blog.innerHTML += postTemplate(post);
  });
};

// GET METHOD
function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}

// POST METHOD
function postData(url, formData) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData.entries())),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}

// SINGLE POST TEMPLATE
const postTemplate = (data) => {
  const x = JSON.stringify(data);
  return `
        <div id=${data.id} class="post">
          <img src="${data.img}" alt="" />
          <div class="post-text-content">
            <h3 class="post-title">${data.title}</h3>
            <p class="post-text">
              ${data.text}
            </p>
            <hr />
            <div class="post-icons">
              <div class="left-icons">
                <i class="fa-regular fa-eye"></i>
                <i class="fa-regular fa-comment"></i>
              </div>
              <div class="right-icons"><i class="fa-regular fa-heart"></i></div>
            </div>
          </div>
        </div>
    `;
};
