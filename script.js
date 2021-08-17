let boton = document.querySelector(".menu-btn");
let elem=document.querySelector(".nav-main ul");
boton.addEventListener("click",()=>{
  elem.classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
ScrollReveal().reveal('.footer-links',{delay:500});