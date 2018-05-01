$(document).ready(function(){

    	// Mobile menu
	$(function() {

		function burger() {
			$('.main-nav ul').toggleClass('nav-show');
		};

		$('.burger').click(function() {
			burger();
		});

		$(document).click(function(event) {
            if ($(event.target).closest(".main-nav ul").length) return;
            if ($(event.target).closest(".burger").length) return;
			$('.main-nav ul').removeClass('nav-show');
			event.stopPropagation();
		});

	});

    var owl2 = $("#slider");
    owl2.owlCarousel({
        loop:true,
        nav:true, 
        autoplay:false,
        smartSpeed:1000,
        margin:25,
    center:false,     //если нужны обрезаные края
    navText:['<span class="nav-left"></span>','<span class="nav-right"></span>'],
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2 
        },
        768:{
            items:3
        },  
          1240:{
            items:4
        },     
    }
});


});//END READY
