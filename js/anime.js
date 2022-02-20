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

const progress = document.querySelectorAll('.progress_bar');

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

function header() {
  const scrollTop = window.scrollY;
  const header = document.querySelector('header');

  if (scrollTop > 100) {
    header.style.backgroundColor = 'rgba(254, 229, 220, 0.8)';
  } else {
    header.style.backgroundColor = 'transparent';
  }
}

window.addEventListener('scroll', () => {
  // header();

  startVivus('#svg1', svg1);
  startVivus('#svg2', svg2);
  startVivus('#svg3', svg3);
  showCont();
});

/* vivus */
let svg1 = new Vivus('svg1', {
  type: 'delayed',
  duration: 100,
  file: '../image/624airplane_100621.svg',
});

let svg2 = new Vivus('svg2', {
  type: 'delayed',
  duration: 100,
  file: '../image/7_85262.svg',
});

let svg3 = new Vivus('svg3', {
  type: 'delayed',
  duration: 100,
  file: '../image/707magnifyingglasstiltedleft_100258.svg',
});
