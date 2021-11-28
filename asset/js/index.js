
// --------------------- menu ----------------------------

const toggleMenu = document.querySelector('.nav--sm-dv');

toggleMenu.onclick = () => {

  const list = document.querySelector('.nav__list'); 
  list.style.top = 0;
}

const closeMenu = document.querySelector('.nav__close');

closeMenu.onclick = () => {

  const list = document.querySelector('.nav__list');
  list.style.top = '-500%';
}


// ----------------------- slide image ----------------

// button slide
const next_btn = document.querySelector('.slide__button--next');
var index = 0;

next_btn.addEventListener('click', ()=> {

  const img = document.getElementsByClassName('slide__img');
  const dot = document.getElementsByClassName('dot');
  const img_lenght = img.length;

  for (i = 0 ; i < img_lenght ; i++ ) {
    img[i].classList.remove('active__img');
    dot[i].classList.remove('active__dot');
  }

  if ( index < img_lenght - 1) {
    index += 1;
    img[index].classList.add('active__img');
    dot[index].classList.add('active__dot');
  } else {
    index = 0;
    img[index].classList.add('active__img');
    dot[index].classList.add('active__dot');
  } 
});

const pre_btn = document.querySelector('.slide__button--pre');

pre_btn.addEventListener('click', ()=> {
  
  const img = document.getElementsByClassName('slide__img');
  const dot = document.getElementsByClassName('dot');
  const img_lenght = img.length;

  for (i = 0 ; i < img_lenght ; i++ ) {
    img[i].classList.remove('active__img');
    dot[i].classList.remove('active__dot');
  }

  if ( index > 0 ) {
    index -= 1;
    img[index].classList.add('active__img');
    dot[index].classList.add('active__dot');
  } else {
    index = 2;
    img[index].classList.add('active__img');
    dot[index].classList.add('active__dot');
  }
});

// dot slide


function currentSlide(num) {

  const img = document.getElementsByClassName('slide__img');
  const dot = document.getElementsByClassName('dot');
  const img_lenght = img.length;

  for(i=0 ; i < img_lenght ; i++ ) {
    img[i].classList.remove('active__img');
    dot[i].classList.remove('active__dot');
  }

  img[num].classList.add('active__img');
  dot[num].classList.add('active__dot');
  
};
