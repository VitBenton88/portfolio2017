$(document).ready(function() {

	// smoothScroll START --------------

	var $root = $('html, body'); 

	$('a').click(function(){
	    $root.animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});


// smoothScroll END --------------

//hide nav bar after selection is made (on smaller screens):
	
	var windowWidth = $(window).width();

	$('.nav a').on('click', function(){
		if (windowWidth < 480){//less than bootstrap's mobile breakpoint
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

			if (!homeLI.hasClass('active') && windowWidth > 768){

				$('.navbar-inverse').addClass('opaqueNav', 150);

			}

			else if (homeLI.hasClass('active') && windowWidth > 768){

				$('.navbar-inverse').removeClass('opaqueNav', 150);
			};


    	userScrolled = false;

  		}

	}, 50);

	//--------------------------------

//----------------------------------------------------------------END OF SCRIPT	
});