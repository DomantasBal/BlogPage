// BLOG
const blog = document.querySelector("#blog");

// FORM
const newPostForm = document.querySelector("#new-post-form");
// MAKE POST BTN
const makePostBtn = document.querySelector("#submit-new-post");

// POST TITLE VALUE
const postTitle = document.querySelector("#post-title");
// POST TEXT VALUE
const postText = document.querySelector("#post-text");
// POST URL VALUE
const postImg = document.querySelector("#post-img");



// MAKE POST FUNC
makePostBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // GET VALUES
    let titleVal = postTitle.value;
    let textVal = postText.value;
    let imgVal = postImg.value;

    postPost(titleVal, textVal, imgVal);
})



// POST POST
function postPost(titleVal, textVal, imgVal) {
    fetch("https://testapi.io/api/Domantas/resource/Posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: titleVal,
            text: textVal,
            img: imgVal,
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}




// GET POSTS
function getPosts (){
    fetch("	https://testapi.io/api/Domantas/resource/Posts")
    .then(res => res.json())
    .then(data => {
        generatePost(data);
    })
    .catch(err => console.log(err))
}
