//NAVIGATION
let navTop = document.getElementsByClassName('nav-top')[0];
let navItems = document.getElementsByClassName('nav-item');

let navBurger = document.getElementsByClassName('nav-burger')[0];



navBurger.addEventListener('click', function(ev) {

	for (let i = 0; i < navItems.length; i++) {
		navItems[i].classList.toggle('visible');
	}

}, false);






//Fixed navigation

window.addEventListener('scroll', function(ev) {



if (window.scrollY > navTop.offsetTop + navTop.offsetHeight) {

		navTop.classList.add('fixedNav');


	} else{
		navTop.classList.remove('fixedNav')
	}

}, false);






//SLIDESHOW

let slides = document.getElementsByClassName('slides');
let slideButton = document.getElementsByClassName('slide-button');
let slideIndex = 0;

let slideThumbnail = document.getElementsByClassName('slide-thumbnail');
showSlide();


let slideInterval = setInterval(function() {
	showSlide(slideIndex += 1)
}, 15000);


function showSlide() {

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}

	if (slideIndex <= -1) {
		slideIndex = slides.length - 1;
	}

	slides[slideIndex].style.display = "block";


}


for (let i = 0; i < slideButton.length; i++) {
	slideButton[i].addEventListener('click', changeSlide, false);
}


function changeSlide() {

	if (this.id == 'next') {
		slideIndex += 1;
	}

	if (this.id == 'previous') {
		slideIndex += -1;
	}

	showSlide(slideIndex);

}



/*if a thumbnail is clicked*/
for (let i = 0; i < slideThumbnail.length; i++) {
	slideThumbnail[i].addEventListener('click', function() {



		let array1 = this.className.split(' ');


		for (let i = 0; i < slides.length; i++) {


			let array2 = slides[i].className.split(' ');


			array2.forEach(function(el) {

				if (array1.indexOf(el) > -1) {

					slideIndex = i;

				}

			});


		}

		showSlide(slideIndex);
	}, false);
}


/*ANIMATIONS*/


let input_group = document.getElementsByClassName('input-group');




for(let i = 0; i < input_group.length; i++){


	input_group[i].children[1].addEventListener('focus', function(){
			this.classList.add('is-selected');
			input_group[i].children[0].classList.add('shrink');
	});


	input_group[i].children[1].addEventListener('focusout', function(){
			this.classList.remove('is-selected');
			input_group[i].children[0].classList.remove('shrink');
	});

}









//let sum = () => {return 1 + 1}
var funcName = (params) => params + 2
funcName(2);
// 4
