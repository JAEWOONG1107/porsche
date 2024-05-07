// swiper slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  loopAdditionalSlides : 1,
  autoplay : true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// slider contents
function slider () {
  let swiperParent = document.querySelectorAll('.swiper-slide');
  let carName = document.querySelectorAll('.carName');

  for(let i=0; i<carName.length; i++) {
    if (swiperParent[i].classList.contains('swiper-slide-active')) {
      swiperParent[i].children[0].style.opacity = "1";
      swiperParent[i].children[2].style.opacity = "1";
      swiperParent[i].children[3].style.opacity = "1";
    }
    else {
      swiperParent[i].children[0].style.opacity = "0";
      swiperParent[i].children[2].style.opacity = "0";
      swiperParent[i].children[3].style.opacity = "0";
    }
  }
}
setInterval(slider);

// discover
let discoverText = document.querySelectorAll('.discoverCon p');
let discoverImg = document.querySelectorAll('.discoverCon img');
for (let y=0; y<discoverText.length; y++) {
  discoverText[y].addEventListener('mouseover', function() {
    discoverImg[y].style.opacity = '1';
    discoverImg[y].style.boxShadow = '0 0 10px #ccc';
  });
  discoverText[y].addEventListener('mouseout', function() {
    discoverImg[y].style.opacity = '0.7';
    discoverImg[y].style.boxShadow = '0 0 3px #ccc';
    });
  discoverImg[y].addEventListener('mouseover', function() {
    discoverImg[y].style.opacity = '1';
    discoverImg[y].style.boxShadow = '0 0 10px #ccc';
  });
  discoverImg[y].addEventListener('mouseout', function() {
    discoverImg[y].style.opacity = '0.7';
    discoverImg[y].style.boxShadow = '0 0 3px #ccc';
  });
}





// language button tab menu
const langBtn = document.querySelectorAll('.langTab span');
for (let j=0; j<langBtn.length; j++) {
  langBtn[j].addEventListener('click', function() {
    langBtn[0].classList.remove('langBtn');
    langBtn[1].classList.remove('langBtn');

    langBtn[j].classList.add('langBtn');
  });
}

// right menu
const topmove = document.querySelector('.topMove');
topmove.addEventListener('click', function() {
  window.scrollTo({top : 0, behavior : 'smooth'});
});

const chatExit = document.querySelector('.chatTop i');
const chatBot = document.querySelector('.chatBot');
const chatBotContent = document.querySelector('.chatBotContent')
chatBot.addEventListener('click', function() {
  chatBotContent.classList.toggle('chatShow');
});
chatExit.addEventListener('click',function () {
  chatBotContent.classList.remove('chatShow');
});

// return Btn
let returnBtn = document.querySelector('.chatContent span');
let returnIcon = document.querySelector('.chatContent span i');

returnBtn.addEventListener('mouseover', function() {
  returnBtn.style.backgroundColor = '#555';
  returnIcon.style.transition = '0.5s';
  returnIcon.style.transform = 'rotate(360deg)';
});
returnBtn.addEventListener('mouseout', function() {
  returnBtn.style.backgroundColor = '#333';
  returnIcon.style.transition = '0s';
  returnIcon.style.transform = 'rotate(0deg)';
});




// animate discover1
let observerDis1 = new IntersectionObserver((e) => {
  e.forEach((box)=>{
      if (box.isIntersecting) {
          box.target.classList.add('animate__animated', 'animate__fadeInTopLeft');
          box.target.style.opacity = 1;
      }
      else {
          box.target.classList.remove('animate__animated', 'animate__fadeInTopLeft');
          box.target.style.opacity = 0;
      }
  });
})

let disCon1 = document.querySelector('.disCon1');
observerDis1.observe(disCon1);

// animate discover2
let observerDis2 = new IntersectionObserver((e) => {
  e.forEach((box)=>{
      if (box.isIntersecting) {
          box.target.classList.add('animate__animated', 'animate__fadeInRight');
          box.target.style.opacity = 1;
      }
      else {
          box.target.classList.remove('animate__animated', 'animate__fadeInRight');
          box.target.style.opacity = 0;
      }
  });
})

let disCon2 = document.querySelector('.disCon2');
observerDis2.observe(disCon2);

// animate discover3
let observerDis3 = new IntersectionObserver((e) => {
  e.forEach((box)=>{
      if (box.isIntersecting) {
          box.target.classList.add('animate__animated', 'animate__fadeInBottomLeft');
          box.target.style.opacity = 1;
      }
      else {
          box.target.classList.remove('animate__animated', 'animate__fadeInBottomLeft');
          box.target.style.opacity = 0;
      }
  });
})

let disCon3 = document.querySelector('.disCon3');
observerDis3.observe(disCon3);

// animate media stories
let num3 = 0.05;
document.querySelectorAll('.social').forEach((el)=>{
    el.style.setProperty('animation-delay', `${num3}s`);
    num3 += 0.05;
});

let observerMid = new IntersectionObserver((e) => {
  e.forEach((box)=>{
      if (box.isIntersecting) {
          box.target.classList.add('animate__animated', 'animate__zoomIn');
          box.target.style.opacity = 1;
      }
      else {
          box.target.classList.remove('animate__animated', 'animate__zoomIn');
          box.target.style.opacity = 0;
      }
  });
})

let social = document.querySelectorAll('.social');
for (let h=0; h<social.length; h++) {
  observerMid.observe(social[h]);
}

// 반응형 로고 변경
let logo = document.querySelector('.logo > img');
window.onresize = function() {
  let innerWidth = window.innerWidth;
  if (innerWidth <= "768") {
    logo.setAttribute('src', 'img/icon.png');
  }
  else {
    logo.setAttribute('src', 'img/logo.png');
  }
}