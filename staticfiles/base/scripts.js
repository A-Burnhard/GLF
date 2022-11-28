// navigation 
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function() {
        scrollFunction()
    };
    let navbarOnScroll = document.getElementById("navigation")
    let navbarLinksOnScroll = document.getElementsByClassName("anchor")

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     
      
        
        

        
        } else {
         
            document.getElementById("navigation").style.opacity = "1";
        }
    }




const toggleButton = document.getElementsByClassName('toggle-switch-button')[0];
const navbarLinks = document.getElementsByClassName('links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');

})

// section one
var typed = new Typed(".auto-type", {
  strings: ["youth development.", "youth empowerment."],
  typeSpeed: 70,
  backSpeed:10,
  loop: true
})



// We need to keep track of faded in elements so we can apply fade out later in CSS
document.addEventListener('animationstart', function (e) {
  if (e.animationName === 'fade-in') {
      e.target.classList.add('did-fade-in');
  }
});

document.addEventListener('animationend', function (e) {
  if (e.animationName === 'fade-out') {
      e.target.classList.remove('did-fade-in');
   }
});


// programmes page
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// page load
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
