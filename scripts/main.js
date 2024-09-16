// Hamburger Menu Toggle
function toggleMenu() {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// Sticky Navigation Bar
window.onscroll = function() {stickyNav()};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
