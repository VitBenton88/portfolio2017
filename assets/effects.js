$(window).load(function() {
	$("#loaderWrap").fadeOut("slow");
})


$(document).ready(function() {
       

	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	// smoothScroll START --------------

	var $root = $('html, body'); 

	$('.navLink').click(function(){
	    $root.animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});


//--------------------------------

//hide nav bar after selection is made (on smaller screens):

	$('.nav a').on('click', function(){
		if (windowWidth < 737){//less than bootstrap's mobile breakpoint
    		$('.navbar-toggle').click();
		}
	});


//--------------------------------

// nav color change on navButton click on mobile:

	var navButton = $('#mobileNavButton');
	var navLink = $('.navlink');
	var navBarAll = $('.navbar-toggle, .navbar-collapse, .navbar, .collapse');
	var navBar = $('.nav');

	navButton.click(function(){

		if (navButton.hasClass('collapsed')){

			navBarAll.css('background-color','#222');
			navBarAll.css('border-color','#080808');
		}

		else {

			navBarAll.css('background-color','transparent');
			navBarAll.css('border-color','white');

		};

	});

	//--------------------------------

	// hides nav table instead of default height change, for better toggle animation:

	$('body').on('click', 'button', function(){

		var currentAria = $(this).attr("aria-expanded");

		if (currentAria == 'true'){

			navBar.css('display','none')
		}

		else {

			navBar.css('display','inline-block')

		}
		
	});

	//--------------------------------

	//on desktop, change navbar background color when home link is not activie i.e. not at the top

	var homeLI = $('#homeLink');
	var active = '';
	var userScrolled = false;

	$(window).scroll(function () {

		userScrolled = true;
		active = $('.active');

	});

	setInterval(function() {

  		if (userScrolled) {

			if (!homeLI.hasClass('active') && windowWidth > 767){//ipad mini and up

				$('.navbar-inverse').addClass('opaqueNav', 150);

			}

			else if (homeLI.hasClass('active') && windowWidth > 767){//ipad mini and up

				$('.navbar-inverse').removeClass('opaqueNav', 150);
			};


    	userScrolled = false;

  		}

	}, 50);

	//--------------------------------

	//on mobile, remove parallax, insert mobile styling

	var bioSection = $('#bio');
	var portSection = $('#portfolio');
	var bioHeader = $('#bioHeader');
	var portHeader = $('#portHeader');
	var selfie = $('#faceShot');
	var portParallax = $('.portParallax');

	if (windowWidth < 1025){//less than bootstrap's mobile breakpoint
    		bioSection.removeClass('bioParallax');
    		bioSection.addClass('mobileHeaders');
    		portSection.removeClass('portParallax');
    		portSection.addClass('mobileHeaders');

    		bioHeader.css('background','#222222');
    		bioHeader.css('padding-top','55px');
    		bioHeader.css('padding-bottom','0px');

    		portHeader.css('background','#222222');
    		portHeader.css('padding-top','70px');
    		portHeader.css('padding-bottom','50px');

    		portParallax.css('background-attachment','initial');
    		portParallax.css('background-size','200%');

    		selfie.css('display','block');
		}

	//--------------------------------

	//change color of mobile nav button when resume is in viewport

	var distance = $('#resume').offset().top,
    $window = $(window);

	$window.scroll(function() {
	    if ( $window.scrollTop() >= distance ) {
	       $('.navbar-inverse .navbar-toggle').css('border-color','black');
	       $('.icon-bar').css('background-color','black');
	    } else{
	    	$('.navbar-inverse .navbar-toggle').css('border-color','white');
	        $('.icon-bar').css('background-color','white');
	    }
	})

	//--------------------------------

//----------------------------------------------------------------END OF SCRIPT	
});