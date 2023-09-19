let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
 nav.classList.toggle('nav-scroll', window.scrollY > 0);
});

let AllNavLink = document.querySelectorAll('.nav-links li a');

AllNavLink.forEach((link) => {
  link.addEventListener('click', () => {
    AllNavLink.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
  })
});

let menuBars = document.querySelector('nav button');
let navlinks = document.querySelector('.nav-links');
menuBars.addEventListener('click', () => {
  navlinks.classList.toggle('nav-links-block');

})