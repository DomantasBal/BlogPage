const newPostForm = document.getElementById("new-post-form");
const blog = document.getElementById("blog");
const button = document.querySelector("#new-post-btn");

const API_ENDPOINTS = {
  get: "https://testapi.io/api/Domantas/resource/newPosts",
  post: "https://testapi.io/api/Domantas/resource/newPosts",
  put: (id) => `https://testapi.io/api/Domantas/resource/newPosts/${id}`,
  delete: (id) => `https://testapi.io/api/Domantas/resource/newPosts/${id}`,
};

// GET METHOD
const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

// POST METHOD
const createPost = (url, data) => {
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

// DELETE POST
const deletePost = (id) => {
  const url = API_ENDPOINTS.delete(id);
  return fetch(url, {
    method: "DELETE",
  })
    .then((response) => {
      response.status === 204 && document.getElementById(id).remove();
    })
    .catch((error) => console.log(error));
};

// EDIT POST
const updatePost = (id, updatedData) => {
  const url = API_ENDPOINTS.put(id);
  return fetch(url, {
    method: "PUT",
    // AR HEADERIAI REIKALINGI TIK PUT PATCH? AR IR DELETE IR POST?
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(updatedData),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

// let newStuff = {
//   title: "111",
//   text: "123",
//   img: "upd",
// };
// updatePost(4, newStuff);

///////////////////////////////////////////////////////////////////////////////////////////

// COLLECTS FORM DATA AND SENDS TO API
const newPostSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newPost = await createPost(API_ENDPOINTS.post, formData);
  console.log(newPost);
};

// POST SUBMIT ACTION
newPostForm.addEventListener("submit", newPostSubmit);

// SINGLE POST TEMPLATE
const postTemplate = (data) => {
  const x = JSON.stringify(data);
  return `
        <div id=${data.id} class="post">
        
        <div class="modify-buttons">
            <i class="fa-solid fa-pen-to-square edit" onClick=handlePostEdit(${data.id})></i>
            <i class="fa-sharp fa-solid fa-trash delete" onClick=deletePost(${data.id}) ></i>
        </div>

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
                <span class="stats view-count">0</span>
                <i class="fa-regular fa-comment"></i>
                <span class="stats comment-count">0</span>
              </div>
              <div class="right-icons"><i class="fa-regular fa-heart"></i></div>
            </div>
          </div>
        </div>
    `;
};

// SHOW POSTS ON WEBSITE LOAD
// window.onload = async () => {
//   const posts = await getData(API_ENDPOINTS.get);
//   console.log(posts);
//   posts.data.forEach((post) => {
//     blog.innerHTML += postTemplate(post);
//     console.log("posts load");
//   });
// };

window.onload = async () => {};
