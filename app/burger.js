const burgerIcon = document.querySelector(".burger-menu");
const closeIcon = document.querySelector("#close-icon");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const nav = document.querySelector(".nav");

burgerIcon.addEventListener("click", openNav);
closeIcon.addEventListener("click", closeNav);

function openNav() {
  nav.style.width = "80%";
  nav.style.opacity = "1";
  closeIcon.style.display = "inline-block";
  closeIcon.style.display = "inline-block";
}

function closeNav() {
  nav.style.width = "0";
  nav.style.opacity = "0";
  closeIcon.style.display = "none";
}
