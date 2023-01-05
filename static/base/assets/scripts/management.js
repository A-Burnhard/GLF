var loader = document.querySelector(".loader");
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disappear");
}

// profiles
const patrick = document.getElementById("patrick");
const clement = document.getElementById("clement");
const clementProfileDisplay = document.querySelector(".additional-info-p");
let closeClement = document.querySelector(".close-clement")


function clementProfile() {
  clementProfileDisplay.style.display = "grid";

}
closeClement.addEventListener('click', function () {
  clementProfileDisplay.style.display = "none"
})


// profiles clement 
const patrickProfileDisplay = document.querySelector(".additional-info-b");
let closePatrick = document.querySelector(".close-patrick");

function patrickProfile() {
  patrickProfileDisplay.style.display = "block";
}
closePatrick.addEventListener('click', function () {
  patrickProfileDisplay.style.display = "none"
})


