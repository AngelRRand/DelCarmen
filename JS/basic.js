// Cambiador a modo noche 

let themeSwitch = document.querySelector('.themeSwitch');
let themeSwitchMo = document.querySelector('.themeSwitchM');
let body = document.querySelector('body')

themeSwitch.onclick = () =>{
    body.classList.toggle('dark');
}
themeSwitchMo.onclick = () =>{
    body.classList.toggle('dark');
}

// Menu Hamburger

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-mobile');

menu_btn.addEventListener('click', function(){
  menu_btn.classList.toggle('is-active')
  mobile_menu.classList.toggle('is-active')
})


//------------------ Slider swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    spaceBetween: 30,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  
