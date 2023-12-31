// On load
document.addEventListener("DOMContentLoaded", function () {
  // General - Set/Update variables
  function updateVariables() {
    document.querySelector(':root').style.setProperty('--viewport-height', window.innerHeight + 'px');
    document.querySelector(':root').style.setProperty('--header-height', document.querySelector("#header").offsetHeight + 'px');
  }
  window.addEventListener('resize', function () {
    updateVariables();
  });
  updateVariables();

  // General - Insert quote in the console
  console.log("Ce site a été fait par Thomas Pericoi - https://thomaspericoi.com/");

  // General - Enable ASCII Printer on random
  printRandomAscii();

  // General - Enable OpenDyslexic toggle
  function enableDyslexicMode() {
    document.querySelector(':root').style.setProperty('--bold', "OpenDyslexic, sans-serif");
    document.querySelector(':root').style.setProperty('--body', "OpenDyslexic, sans-serif");
    sessionStorage.setItem("dyslexicMode", true);
    console.log("OpenDyslexic est activé");
  }
  function disableDyslexicMode() {
    document.querySelector(':root').style.setProperty('--bold', "Dosis, sans-serif");
    document.querySelector(':root').style.setProperty('--body', "Ubuntu, sans-serif");
    sessionStorage.setItem("dyslexicMode", false);
    console.log("OpenDyslexic est désactivé");
  }
  if (sessionStorage.getItem("dyslexicMode") == "true") {
    enableDyslexicMode();
    document.getElementById("open-dyslexic").checked = true;
  } else {
    disableDyslexicMode();
    document.getElementById("open-dyslexic").checked = false;
  };
  document.getElementById("open-dyslexic").addEventListener('change', function () {
    if (this.checked) {
      enableDyslexicMode();
    } else {
      disableDyslexicMode();
    }
  });

  // General - Elements is in view
  function toggleClassOnScroll(trigger, target) {
    if (trigger && target) {
      var elementTop = trigger.getBoundingClientRect().top;
      var elementBottom = trigger.getBoundingClientRect().bottom;
      if ((elementTop > window.innerHeight * 0.1 && elementTop < window.innerHeight * 0.6) || (elementBottom > window.innerHeight * 0.4 && elementBottom < window.innerHeight * 0.9)) {
        target.classList.add("js-inView");
      } else {
        target.classList.remove("js-inView");
      }
    }
  }
  function markAsViewed(trigger, target) {
    if (trigger && target) {
      if (trigger && target) {
        var elementTop = trigger.getBoundingClientRect().top;
        var elementBottom = trigger.getBoundingClientRect().bottom;
        if ((elementTop > window.innerHeight * 0.1 && elementTop < window.innerHeight * 0.6) || (elementBottom > window.innerHeight * 0.4 && elementBottom < window.innerHeight * 0.9)) {
          target.classList.add("js-viewed");
        }
      }
    }
  }
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".js-toBeTriggered").forEach(function (item, index) {
      toggleClassOnScroll(item, item);
    });
    document.querySelectorAll("main section").forEach(function (item, index) {
      markAsViewed(item, item);
    });
  });
  document.querySelectorAll(".js-toBeTriggered").forEach(function (item, index) {
    toggleClassOnScroll(item, item);
  });
  document.querySelectorAll("main section").forEach(function (item, index) {
    markAsViewed(item, item);
  });

  // Header - Menu
  document.querySelectorAll(".menu-header-desktop>li>a").forEach(function (item) {
    item.tabIndex = 0;
  });

  document.querySelectorAll(".menu-toggle, #header .menu .menu-item-has-children a").forEach(function (item) {
    item.addEventListener("click", function () {
      document.querySelector("body").classList.toggle("js-menuOpened");
      document.querySelector("main").toggleAttribute("inert");
      document.querySelector("main").setAttribute("aria-hidden", !(document.querySelector("main").getAttribute("aria-hidden") == "true" ? true : false));
      document.querySelector(".super-menu").toggleAttribute("inert");
      document.querySelector(".super-menu").setAttribute("aria-hidden", !(document.querySelector(".super-menu").getAttribute("aria-hidden") == "true" ? true : false));
      document.querySelector("footer").toggleAttribute("inert");
      document.querySelector("footer").setAttribute("aria-hidden", !(document.querySelector("footer").getAttribute("aria-hidden") == "true" ? true : false));
    });
  });

  document.querySelectorAll("#header .menu .menu-item-has-children a, #menu-toggle").forEach(function (item) {
    item.addEventListener('keydown', (event) => {
      if (event.code === 'Enter') {
        item.click();
      }
    });
  });

  // Homepage - Slider
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  const swiper = new Swiper('#home-slider .swiper', {
    loop: true,
    grabCursor: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 25,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
});