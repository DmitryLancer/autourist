// header
const headerLoc = document.querySelectorAll('.header__location')
const headerGeo = document.querySelectorAll('.header-geo')
const ctb = document.querySelector('body')
const headerAboutDivs = document.querySelectorAll('.home-front-selects-items')
const headerAboutBlocks = document.querySelectorAll('.home-front-selects-items > .active')

for (let i = 0; i < headerAboutDivs.length; i++) {
  headerAboutDivs[i].addEventListener('click',function () {
    headerAboutBlocks[i].classList.toggle('nonactive')
    headerAboutDivs[i].classList.toggle('headerAboutDivsActive')
  })
  
  for (let j = 0; j < headerGeo.length; j++) {
    headerGeo[j].addEventListener('click',function () {
      if (headerAboutBlocks[i].classList.contains('nonactive')) {
        headerLoc[j].classList.toggle('nonactive')
        headerGeo[j].classList.toggle('geo__active')  
      }
      else{
        headerAboutBlocks[i].classList.toggle('nonactive')
        headerAboutDivs[i].classList.toggle('headerAboutDivsActive')
        headerLoc[j].classList.toggle('nonactive')
        headerGeo[j].classList.toggle('geo__active')  
      }
      
  })  
  }
  
}

for (let i = 0; i < headerAboutDivs.length; i++) {
  for (let j = 0; j < headerGeo.length; j++) {
    headerAboutDivs[i].addEventListener('click',function () {
      if (headerLoc[j].classList.contains('nonactive')) {
        headerAboutBlocks[i].classList.toggle('nonactive')
        headerAboutDivs[i].classList.toggle('headerAboutDivsActive')
      }
      else{
        headerAboutBlocks[i].classList.toggle('nonactive')
        headerAboutDivs[i].classList.toggle('headerAboutDivsActive')
        headerLoc[j].classList.toggle('nonactive')
        headerGeo[j].classList.toggle('geo__active')  
      }
      
  })  
  }
  
}


// header search
const header__search__div = document.querySelectorAll('.header__search__open__area')
const header__search__hidden__div = document.querySelector('.header-search-div')
const header__search__close__btn = document.querySelector('.header-search-close-btn')

// console.log(header__search__div);
for (let i = 0; i < header__search__div.length; i++) {
  header__search__div[i].addEventListener('click',function () {
    header__search__hidden__div.classList.toggle('active')
    // header__search__hidden__div.classList.toggle('header-kontakts-container-img')
    header__search__close__btn.classList.toggle('active')
    header__search__div[i].classList.add('w0')
    // console.log('no work');
  })
  
  header__search__close__btn.addEventListener('click',function () {
    header__search__hidden__div.classList.remove('active')
    // header__search__hidden__div.classList.add('header-kontakts-container-img')
    header__search__close__btn.classList.remove('active')  
    header__search__div[i].classList.remove('w0')
    // console.log('yes work');
  })
  
}





// accardion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = 10000 + 'px';
    } 
  });
}

// slider scroller
const scrolling = document.querySelectorAll(".scrolling");
for (let i = 0; i < scrolling.length; i++) {
  const scrollingI = scrolling[i];
  if (ctb.offsetWidth < 1200) {
    scrollingI.addEventListener('wheel', function(event) {
      if (event.deltaMode == event.DOM_DELTA_PIXEL) {
        var modifier = 1;
        // иные режимы возможны в Firefox
      } else if (event.deltaMode == event.DOM_DELTA_LINE) {
        var modifier = parseInt(getComputedStyle(this).lineHeight);
      } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
        var modifier = this.clientHeight;
      }
      if (event.deltaY != 0) {
        // замена вертикальной прокрутки горизонтальной
        this.scrollLeft += modifier * event.deltaY;
        event.preventDefault();
      }
    });    
  }

  
}


// swipers
const swiper = new Swiper('.swiper', {
  // // Optional parameters
  // // direction: 'vertical',
  // loop: false,
  // slidesPerView: 6,
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-img-next',
  //   prevEl: '.swiper-button-img-prev',
  // },
  // watchOverflow: false,


  // // And if we need scrollbar
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //       slidesPerView: 2,
  //       spaceBetween: 5

  //   },
  //   // when window width is >= 480px
  //   480: {
  //       slidesPerView: 3,
  //       spaceBetween: 5
  //   },
  //   // when window width is >= 640px
  //   640: {
  //       slidesPerView: 4,
  //       spaceBetween: 5
  //   },
  //   780: {
  //       slidesPerView: 4,
  //       spaceBetween: 5
  //   },
  //   1200: {
  //       slidesPerView: 6,
  //       spaceBetween: 5
  //   }
  // }
     // Optional parameters
    // direction: 'vertical',
    loop: false,
    // slidesPerView: 5,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-img-next',
        prevEl: '.swiper-button-img-prev',
    },
    mousewhell:{
        sensivity: 1,
        eventsTarget: ".swiper-slide"
    },
    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    speed: 400,
    spaceBetween: 10,
    breakpoints: {
        // when window wida>imgth is >= 320px
        320: {
            slidesPerView: 2.3,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        780: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 20
        }
    }
});

const swiper1 = new Swiper('.swiper_ninth', {
    loop: false,
    // slidesPerView: 5,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // // Navigation arrows
    mousewhell:{
        sensivity: 0,
        eventsTarget: ".swiper-slide"
    },
    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    speed: 400,
    spaceBetween: 10,
    breakpoints: {
        // when window wida>imgth is >= 320px
        320: {
            slidesPerView: 2.3,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        780: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});

