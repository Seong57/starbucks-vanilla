const searchEl = document.querySelector('.search');
// searchEl안의 input요소를 찾음
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
// const toTopEl = document.querySelector('#to-top'); 요소를 찾아서 넣을 수 있지만 직접 선택자를 gsap.to()메소드 안에 넣어도 됨
//._throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY)
  if (window.scrollY > 500) {
    //배지 숨기기
    //gaop.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, 0.3, {
      opacity: 0,
      display: 'none'
    })
    //to-top버튼 보이기
    gsap.to('#to-top', 0.3, {
      x: 0,
    })
  } else {
    //배지 보이기
    gsap.to(badgeEl, 0.3, {
      opacity: 1,
      display: 'block'
    })
    //to-top버튼 숨기기
    gsap.to('#to-top', 0.3, {
      x: 100,
    })
  }
}, 300))

const toTopEl = document.querySelector('#to-top');

window.scrollTo
toTopEl.addEventListener('click', function() {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
})



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 첫번째 요소는 0.7, 그 다음은 1.4 2.1 2.8
    opacity: 1,
  });
})

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', 기본값이므로 생략
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 수
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});

new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', 기본값이므로 생략
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation : {
    prevEl:'.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,   //무한 반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8, //뷰포트 시작이 0 끝이 1
    })
    .setClassToggle(spyEl, 'show') //요소, 클래스이름
    .addTo(new ScrollMagic.Controller());
})


const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();