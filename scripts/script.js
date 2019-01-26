/*document.getElementById("activateJS").style.display = "none";*/


var filterBtn, i, gridItem, thumbnail, modal, description, closeModal, navItem;


filterBtn = document.getElementsByClassName("filter__btn");
gridItem = document.getElementsByClassName("grid__item");
thumbnail = document.getElementsByClassName("thumbnail");

skills = document.getElementsByClassName("skills");

filterSelect("all");


for(i = 0; i < filterBtn.length; i++){
	
	filterBtn[i].addEventListener("click", function(event){
		filterSelect(this.id);
		
		var current = document.getElementsByClassName("filterBtnActive");
		current[0].className = current[0].className.replace(" filterBtnActive", "");
		
		this.classList.add("filterBtnActive");
	});
}




//displays filter items
function filterSelect(filterName){
	var i;
	
	if(filterName == "all"){
		filterName = "";
	}
	
	for(i = 0; i < gridItem.length; i++){
		
		gridItem[i].classList.remove("show");
	
		
		if(gridItem[i].className.indexOf(filterName) > -1){
			
			gridItem[i].classList.add("show");
			
		}	
	
	}
	
}



   









$(document).ready(function(){
	
	// Mobile responsive menu
	$('.menu-button').on('click', function(){
		$('.nav-item').slideToggle();
	});
	
	
	
   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	

	//Add active class to navigation items
	$('.nav-item a').each(function(){
		if($(window).scrollTop() >= $(this.hash).offset().top){
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
		}
	});
	

	
	$(window).on('scroll', function(){
		$('.nav-item a').each(function(){
			if($(window).scrollTop() >= $(this.hash).offset().top){
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});

	/*
	$('.item').on('click', function(){
		$('.modal').css('display', 'block');
		
	});
	
	$(window).on('click', function(ev){
		console.log(ev.target);
		if(ev.target == $('.modal')){
			console.log("!");
			$('.modal').css('display', 'none');
		}
	});
	*/
	
});


