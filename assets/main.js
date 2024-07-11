
document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById('allButton');
    const btn2 = document.getElementById('populalButton');
    const card1 = document.getElementById('allDestCards');
    const card2 = document.getElementById('popularDestCards');

    card1.style.display = "block"
    card2.style.display = "none"

    btn1.addEventListener('click', () => {
        toggleCards(card1, card2, btn1, btn2);
    });
    
    btn2.addEventListener('click', () => {
        toggleCards(card2, card1, btn2, btn1);
    });
});

function toggleCards(showCard, hideCard, activeBtn, inactiveBtn) {
    showCard.style.display = "block"
    hideCard.style.display = "none"
    
    activeBtn.classList.add('active');
    inactiveBtn.classList.remove('active');
}


// Project Name: Landing Page Using SwiperJS
// Youtube: https://youtube.com/@devRasen
// Copyright: ©MdRasen
var gallarySlider = new Swiper(".gallarySlider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    // keyboard: {
    //   enabled: true,
    // },
    // mousewheel: {
    //   thresholdDelta: 70,
    // },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1560: {
        slidesPerView: 3,
      },
    },
  });