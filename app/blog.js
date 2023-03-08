const newPostForm = document.getElementById("post-form");
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
const editPost = (id, updatedData) => {
  const url = API_ENDPOINTS.put(id);
  return fetch(url, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(updatedData),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

// ====================== NOT SURE HERE ==================
// OPEN EDIT FIELD
const openEdit = (event, data) => {
  console.log(event);

  // DATA FOR TESTING
  let manualData = {
    title: "Updated Title",
    text: "Updated Title",
    img: "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
  };

  editPost(event, manualData);
};

// ====================== NOT SURE HERE ==================

// SINGLE POST TEMPLATE
const postTemplate = (data) => {
  const x = JSON.stringify(data);
  return `
        <div id=${data.id} class="post">
        
        <div class="post-header">
        <div>   
        <p class="post-id"> #${data.id}</p>
        </div>
        <div>
            <i id="edit-btn" class="fa-solid fa-pen-to-square edit" onClick=openEdit(${data.id})></i>
            <i class="fa-sharp fa-solid fa-trash delete" onClick=deletePost(${data.id}) ></i>
            </div>
        </div>

          <img src="${data.img}" alt="" />
          <div class="post-text-content">
            <h3 class="post-title" contentEditable="true">${data.title}</h3>
            <p class="post-text" contentEditable="true">
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

const handleAddPost = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newPost = await createPost(API_ENDPOINTS.post, formData);
  newPostForm.innerHTML = `<p class="post-success"> POSTED SUCCESFULLY.<br> Window will refresh soon. <p>`;
  setTimeout(() => {
    location.reload();
  }, 2000);
};

newPostForm.addEventListener("submit", handleAddPost);

window.onload = async () => {
  const posts = await getData(API_ENDPOINTS.get);
  posts.data.forEach((post) => {
    blog.innerHTML += postTemplate(post);
  });
};
