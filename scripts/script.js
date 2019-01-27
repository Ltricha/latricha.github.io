
  
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

	
});


