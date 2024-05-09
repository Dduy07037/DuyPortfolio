// typing text hero
const typed = new Typed(".typing-text", {
  strings: ["Front-End Web Developer", "Students of VNU-International School"],
  loop: true,
  typeSpeed: 55,
  backSpeed: 25,
  backDelay: 600,
});

const navBar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navBar.classList.replace("bg-transparent", "navbar-color");
  } else if (this.window.scrollY <= 0) {
    navBar.classList.replace("navbar-color", "bg-transparent");
  }
});

AOS.init();

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: ".navbar",
});
