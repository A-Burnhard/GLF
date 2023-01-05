var loader = document.querySelector(".loader")
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disappear");
}

const toggleButton = document.getElementsByClassName("toggle-switch-button")[0];
const navbarLinks = document.getElementsByClassName("links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});