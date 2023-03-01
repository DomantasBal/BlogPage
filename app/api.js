const form = document.getElementById("new-post-form");
const blog = document.getElementById("blog");

const API_ENDPOINTS = {
  get: "https://testapi.io/api/Domantas/resource/posts",
};

window.onload = async () => {
  const posts = await getData(API_ENDPOINTS.get);
  posts.data.forEach((post) => {
    blog.innerHTML += postTemplate(post);
  });
};

const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

// MAKE POST BUTTON EVENT
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // SEND INPUTS TO API
  let inputs = getInputValues();
  postData(inputs);
});

// POST METHOD
function postData(formData) {
  return fetch("https://testapi.io/api/Domantas/resource/Posts", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
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

// COLLECTS INPUT VALUES - MAKES POST OBJECT WITH CONSTRUCTOR
function getInputValues() {
  // POST DATA CONSTRUCTOR
  function Post(title, text, img) {
    this.title = title;
    this.text = text;
    this.img = img;
  }
  //   NEW POST WITH DATA
  const newPost = new Post(form[0].value, form[1].value, form[2].value);
  return newPost;
}

// ADD POST TO BLOG
function addPost(post) {
  blog.insertAdjacentHTML("beforeend", post);
}
