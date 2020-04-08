
console.log('\'Allo \'Allo!');

//navigation
let nav_button = document.getElementById('nav-button');
let nav_menu = document.getElementsByClassName('c-header__nav')[0];

nav_button.addEventListener('click', function() {

  nav_menu.classList.toggle('is-visible');


}, false);




//slider

let slider = document.getElementsByClassName('js-slider');

function activateSlider(slider) {

  let slideIndex = 0;

  window.setInterval(function() {
    slideIndex += 1;

  }, 1000);



  if(slideIndex >= 3) {

  }
  console.log(slideIndex);
  slider[slideIndex].classList.add('is-active');

}




//events


//calls

for(let i = 0; i < slider.length; i++) {

  //console.log(slider[i].parentNode);



}

activateSlider(slider);
