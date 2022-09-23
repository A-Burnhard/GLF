const toggleButton = document.getElementsByClassName('toggle-switch-button')[0];
const navbarLinks = document.getElementsByClassName('links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

// section one
var typed = new Typed(".auto-type", {
  strings: ["Welcome to Global Leaders Foundation.", "Our mission is to be a force in youth development."],
  typeSpeed: 80,
  backSpeed:20,
  loop: true
})

