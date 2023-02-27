
// getPosts();

// function getPosts (){
//     fetch("	https://testapi.io/api/Domantas/resource/Posts")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err))
// }



function postPost() {
    fetch("https://testapi.io/api/Domantas/resource/Posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: " title",
            text: "text ",
            img: "img ",
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}


postPost();

