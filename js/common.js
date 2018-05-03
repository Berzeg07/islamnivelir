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
        
        function sidebar_burger() {
			$('.sidebar_nav').toggleClass('side-show');
		};

		$('.sidebar_burger').click(function() {
			sidebar_burger();
		});

		$(document).click(function(event) {
            if ($(event.target).closest(".sidebar_nav").length) return;
            if ($(event.target).closest(".sidebar_burger").length) return;
			$('.sidebar_nav').removeClass('side-show');
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
    }
});


});//END READY
