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

// svg animation
function startVivus(a, b) {
  const scrollTop = window.scrollY;
  const section = document.querySelector(a);
  const top = window.pageYOffset + section.getBoundingClientRect().top;
  if (scrollTop > top - window.innerHeight) {
    b.play();
  } else {
    b.reset();
  }
}

// skill animation
function showCont() {
  const scrollTop = window.scrollY;
  const container = document.querySelector('.ability');
  const top = window.pageYOffset + container.getBoundingClientRect().top;

  if (scrollTop > top - window.innerHeight / 1.3) {
    progress.forEach((el) => {
      let text = el.lastElementChild.innerHTML;
      el.style.width = text;
    });
  } else {
    progress.forEach((el) => {
      el.style.width = '0%';
    });
  }
}

// project animation
function animate(a) {
  const A = document.querySelector(a);
  const B = A.querySelectorAll('div');
  const scrollTop = window.scrollY;

  B.forEach((b) => {
    if (scrollTop > A.offsetTop - 500) {
      b.classList.add('animate');
    } else {
      b.classList.remove('animate');
    }
  });
}

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

// scroll animation
window.addEventListener('scroll', () => {
  startVivus('#svg1', svg1);
  startVivus('#svg2', svg2);
  startVivus('#svg3', svg3);

  showCont();

  animate('.converse');
  animate('.gshock');
  animate('.startup');
  animate('.movie');
  animate('.mbti');
});
