function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

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