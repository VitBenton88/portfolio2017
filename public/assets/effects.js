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
		if (windowWidth < 599 || windowWidth < 750){//less than mobile breakpoint, landscape & portrait
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
			navBarAll.css('border-color','#d8d8d8');

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

		//expandBtn button effects

	var expandBtn = $('.expandBtn');
	var sendBTN = $('#messageSend');
	var socialIcon = $('.socialIcons');
	var headerLinks = $('.headerLinks')
	var BTNstate = true;

		// Animate on hover

		//header links AKA 'learn more'
		$( headerLinks ).hover(function() {
	  if ( BTNstate ) {
	    $( this ).animate({
	      color: "#9f6379"

	    }, 200 );
	  } else {
	    $( this ).animate({
	      color: "white"
	    }, 300 );
	  }
	  BTNstate = !BTNstate;
	});

		//message start button
    $( expandBtn ).hover(function() {

      if ( BTNstate ) {
        $( this ).animate({
          backgroundColor: "white",
          color: "#9f6379",
          width: 300

        }, 200 );
      } else {
        $( this ).animate({
          backgroundColor: "transparent",
          color: "white",
          width: 260
        }, 300 );
      }
      BTNstate = !BTNstate;
    });
		//send button
    $( sendBTN ).hover(function() {
      if ( BTNstate ) {
        $( this ).animate({
          backgroundColor: "white",
          color: "#9f6379",
          width: 240

        }, 200 );
      } else {
        $( this ).animate({
          backgroundColor: "transparent",
          color: "white",
          width: 200
        }, 300 );
      }
      BTNstate = !BTNstate;
    });

    	// Animate on click

    	//message start button
    $( expandBtn ).click(function() {
      
        $( this ).animate({
          color: "white"
        }, 300 );
 
    });
    	//send button
    $( sendBTN ).click(function() {
      
        $( this ).animate({
          color: "white"
        }, 300 );
 
    });

    //social links

    $( socialIcon ).hover(function() {
      if ( BTNstate ) {
        $( this ).animate({
          color: "#222222",

        }, 200 );
      } else {
        $( this ).animate({
          color: "white",
        }, 300 );
      }
      BTNstate = !BTNstate;
    });
 

	//--------------------------------

	//show portfolio modals without <button> clicks

		$('.portfolioIcons').click(function(){

			var modalType = $(this).attr('data-target');

			$(modalType).modal("show");

		})

	//--------------------------------

	//Collect contact form and create POST request to send email

		//function for clearing out contact form

		var contactForm = $('#contactForm');
		var formInputs = [$("#name"), $("#email"), $("#message")];

		function clearForm () {

			for (var i = 0; i < contactForm.length; i++) {
				contactForm[i].reset();
				formInputs[i].css('box-shadow','none');
				formInputs[i].css('border-color','transparent');
			};
		};

		// form validator function

		function formVal () {

			for (var i = 0; i < formInputs.length; i++) {
				if (formInputs[i].val().trim() == ''){

					formInputs[i].css('box-shadow','0px 0px 0px red');
					formInputs[i].css('border-color','red');
					formInputs[i].css('box-shadow','6px 6px 2px red');

					return false;

				} else {
					formInputs[i].css('box-shadow','none');
					formInputs[i].css('border-color','transparent');

					return true;
				}
			};
		};

		$("#sendButton").on("click", function() {

			event.preventDefault();

			if (formVal()){

		      var newMessage = {
		        name: $("#name").val().trim(),
		        email: $("#email").val().trim(),
		        message: $("#message").val().trim()
		    };

		      // Question: What does this code do??
		      $.post("/contact", newMessage)
		      .done(function(data) {
		        console.log("Thanks for contacting!");
		        $('.close').click();//close contact modal
		        clearForm();//clear form

		      });

		   }   

    });

		//clear form on close

		$(".close").on("click", clearForm);

	//--------------------------------

//----------------------------------------------------------------END OF SCRIPT	
});