// Cambiador a modo noche 

let themeSwitch = document.querySelector('.themeSwitch');
let themeSwitchMo = document.querySelector('.themeSwitchM');
let body = document.querySelector('body')

themeSwitch.onclick = () => {
  body.classList.toggle('dark');
}
themeSwitchMo.onclick = () => {
  body.classList.toggle('dark');
}
//
// Menu Hamburger

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-mobile');

menu_btn.addEventListener('click', function () {
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



/*
const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    };

      window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    }
  }, [])
  */

/*
<div className='logo'>
        <span className='logo_span'> Horacio </span> React
      </div>
      {(toggleMenu || screenWidth > 1024) && (
        <ul className='list'>
          <li className='links'>
            <a href="#about">About</a>
          </li>
          <li className='links'>
            <a href="#projects">Projects</a>
          </li>
          <li className='links'>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
      <div className='menuIcons'>
        {toggleMenu ? (
          <img src={close}
            className="menu__icon"
            onClick={() => setToggleMenu(false)}
            alt=""
          />
        ) : (
          <img src={bars}
            className="menu__icon"
            onClick={() => setToggleMenu(true)}
            alt=""
          />
        )}
      </div>
      <div className='navbar__socials'>
        <div className='navbar__instagramDiv'>
          <img src={instagram} alt="instagram" />
          <p>Instagram</p>
        </div>
        <div className='navbar__githubDiv'>
          <img src={github} alt="github" />
          <p>Github</p>
        </div>
        <a href='#contact'>
          <img src={email} className='navbar__email' alt='email' />
        </a>
      </div>
      */

