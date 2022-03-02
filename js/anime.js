const menu = document.querySelector('.menu_btn');
const bar = document.querySelectorAll('.bar');
const nav = document.querySelector('nav');
const bgBar = nav.querySelectorAll('.bg');
const li = nav.querySelectorAll('li');
const progress = document.querySelectorAll('.progress_bar');

/* vivus */
let svg1 = new Vivus('svg1', {
  type: 'delayed',
  duration: 100,
  file: './image/624airplane_100621.svg',
});

let svg2 = new Vivus('svg2', {
  type: 'delayed',
  duration: 100,
  file: './image/7_85262.svg',
});

let svg3 = new Vivus('svg3', {
  type: 'delayed',
  duration: 100,
  file: './image/707magnifyingglasstiltedleft_100258.svg',
});

/* typeit */
document.addEventListener('DOMContentLoaded', function () {
  new TypeIt('.typeit', {
    speed: 150,
  })
    .type('Friendly')
    .delete()
    .type('Independent')
    .delete()
    .type('Continuous .')
    .go();
});

// nav link click event
li.forEach((el) => {
  el.addEventListener('click', () => {
    nav.style.display = 'none';
    menu.classList.remove('close');
    bar.forEach((el) => {
      el.classList.remove('change');
    });
  });
});

// menu button click event
menu.addEventListener('click', function () {
  bar.forEach((el) => {
    el.classList.toggle('change');
    menu.classList.toggle('close');
  });

  // nav background animation
  bgBar.forEach((bg, i) => {
    if (menu.classList.contains('close')) {
      nav.style.display = 'block';
      setTimeout(() => {
        bgBar[i].style.opacity = 1;
      }, 50 * i);
      li.forEach((el, i) => {
        setTimeout(() => {
          el.style.transform = 'translate3d(0,0,0)';
        }, 100 * i);
      });
    } else {
      bg.style.opacity = 0;
      nav.style.display = 'none';
      li.forEach((el, i) => {
        el.style.transform = 'translate3d(0,1000px,0)';
      });
    }
  });
});

// svg animation
function startVivus(scrollTop, a, b) {
  const section = document.querySelector(a);
  const top = window.pageYOffset + section.getBoundingClientRect().top;
  if (scrollTop > top - window.innerHeight) {
    b.play();
  } else {
    b.reset();
  }
}

// project animation
function animate(scrollTop, a) {
  const A = document.querySelector(a);
  const B = A.querySelectorAll('div');

  B.forEach((b) => {
    if (scrollTop > A.offsetTop - 500) {
      b.classList.add('animate');
    } else {
      b.classList.remove('animate');
    }
  });
}

// progress animation
let chart = $('.chart');
let isAni = false;

function skillAni(scrollTop) {
  let chartOST = chart.offset().top - 700;
  console.log(isAni);

  if (scrollTop >= chartOST) {
    if (isAni == false) {
      chart.each(function () {
        let item = $(this);
        let title = item.find('h2');
        let targetNum = title.attr('data-num');
        let circle = item.find('circle');

        $({ rate: 0 }).animate(
          { rate: targetNum },
          {
            duration: 1500,
            progress: function () {
              let now = this.rate;
              let amount = 630 - (630 * now) / 100;
              title.text(Math.floor(now));
              circle.css({ strokeDashoffset: amount });
            },
          }
        );
      }); // chart each
      isAni = true;
    }
  } else {
    isAni = false;
  }
}

// scroll animation
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  startVivus(scrollTop, '#svg1', svg1);
  startVivus(scrollTop, '#svg2', svg2);
  startVivus(scrollTop, '#svg3', svg3);

  animate(scrollTop, '.converse');
  animate(scrollTop, '.gshock');
  animate(scrollTop, '.startup');
  animate(scrollTop, '.movie');
  animate(scrollTop, '.mbti');

  skillAni(scrollTop);
});
