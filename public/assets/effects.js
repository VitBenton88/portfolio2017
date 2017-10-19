$(window).load(function() {
    $("#loaderWrap").fadeOut("slow");
})


$(document).ready(function() {


    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    // smoothScroll START --------------

    var $root = $('html, body');

    $('.navLink').click(function() {
        $root.animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    //--------------------------------

    //hide nav bar after selection is made (on smaller screens):

    $('.nav a').on('click', function() {
        if (windowWidth < 599 || windowWidth < 750) { //less than mobile breakpoint, landscape & portrait
            $('.navbar-toggle').click();
        }
    });


    //--------------------------------

    // nav color change on navButton click on mobile:

    var navButton = $('#mobileNavButton');
    var navLink = $('.navlink');
    var navBarAll = $('.navbar-toggle, .navbar-collapse, .navbar, .collapse');
    var navBar = $('.nav');

    navButton.click(function() {

        if (navButton.hasClass('collapsed')) {

            navBarAll.css('background-color', '#222');
            navBarAll.css('border-color', '#080808');
        } else {

            navBarAll.css('background-color', 'transparent');
            navBarAll.css('border-color', '#d8d8d8');

        };

    });

    //--------------------------------

    // hides <li>s in mobile nav table in mobile nav instead of default height change, for better toggle animation:

    $('body').on('click', 'button', function() {

        var currentAria = $(this).attr("aria-expanded");

        if (currentAria == 'true') {

            navBar.css('display', 'none')
        } else {

            navBar.css('display', 'inline-block')

        }

    });

    //--------------------------------

    //on desktop, change navbar background color when home section is not active i.e. the view is not at the top of the page

    var homeLI = $('#homeLink');
    var active = '';
    var userScrolled = false;

    $(window).scroll(function() {

        userScrolled = true;
        active = $('.active');

    });

    setInterval(function() {

        if (userScrolled) {

            if (!homeLI.hasClass('active') && windowWidth > 767) { //ipad mini and up

                $('.navbar-inverse').addClass('opaqueNav', 150);

            } else if (homeLI.hasClass('active') && windowWidth > 767) { //ipad mini and up

                $('.navbar-inverse').removeClass('opaqueNav', 150);
            };


            userScrolled = false;

        }

    }, 50);

    //--------------------------------

    //on mobile, remove parallax, insert mobile styling (portfolio section)

    var portSection = $('#portfolio');
    var portHeader = $('#portHeader');
    var portParallax = $('.portParallax');

    if (windowWidth < 1025) { //less than bootstrap's mobile breakpoint
        portSection.removeClass('portParallax');
        portSection.addClass('mobileHeaders');


        portHeader.css('background', '#222222');
        portHeader.css('padding-top', '70px');
        portHeader.css('padding-bottom', '50px');

        portParallax.css('background-attachment', 'initial');
        portParallax.css('background-size', '200%');

    }

    //--------------------------------

    //expandBtn button effects on portfolio and contact modal

    var expandBtn = $('.expandBtn');
    var sendBTN = $('#messageSend');
    var socialIcon = $('.socialIcons');
    var headerLinks = $('.headerLinks')
    var emailLink = $('#emailLink')
    var BTNstate = true;

    // Animate on hover

    //'learn more' header link that scrolls to bio section
    $(headerLinks).hover(function() {
        if (BTNstate) {
            $(this).animate({
                color: "#9f6379"

            }, 200);
        } else {
            $(this).animate({
                color: "white"
            }, 300);
        }
        BTNstate = !BTNstate;
    });

    //message start button
    $(expandBtn).hover(function() {

        if (BTNstate) {
            $(this).animate({
                backgroundColor: "white",
                color: "#9f6379",
                width: 300

            }, 200);
        } else {
            $(this).animate({
                backgroundColor: "transparent",
                color: "white",
                width: 260
            }, 300);
        }
        BTNstate = !BTNstate;
    });
    //send button
    $(sendBTN).hover(function() {
        if (BTNstate) {
            $(this).animate({
                backgroundColor: "white",
                color: "#9f6379",
                width: 240

            }, 200);
        } else {
            $(this).animate({
                backgroundColor: "transparent",
                color: "white",
                width: 200
            }, 300);
        }
        BTNstate = !BTNstate;
    });

    // Animate on click

    //message start button
    $(expandBtn).click(function() {

        $(this).animate({
            color: "white"
        }, 300);

    });
    //send button
    $(sendBTN).click(function() {

        $(this).animate({
            color: "white"
        }, 300);

    });

    //social links and email address 

    $(socialIcon).hover(function() {
        if (BTNstate) {
            $(this).animate({
                color: "#222222",

            }, 200);
        } else {
            $(this).animate({
                color: "white",
            }, 300);
        }
        BTNstate = !BTNstate;
    });

    $(emailLink).hover(function() {
        if (BTNstate) {
            $(this).animate({
                color: "#222222",

            }, 200);
        } else {
            $(this).animate({
                color: "white",
            }, 300);
        }
        BTNstate = !BTNstate;
    });


    //--------------------------------

    //show portfolio modals without the click of a <button> html element

    $('.portfolioIcons').click(function() {

        var modalType = $(this).attr('data-target');

        $(modalType).modal("show");

    })

    //--------------------------------

    //Collect contact form and create POST request to send email

    //function for clearing out contact form

    function clearForm() {

        var contactForm = $('#contactForm');

        for (var i = 0; i < contactForm.length; i++) {
            contactForm[i].reset();
            $("#name").css('background-color', 'white');
            $("#email").css('background-color', 'white');
            $("#message").css('background-color', 'white');
        };
    };

    //function for displaying warning colors in form inputs that are empty

    function formWarning() {

        var nameInput = $("#name").val().trim();
        var emailInput = $("#email").val().trim();
        var messageInput = $("#message").val().trim();

        if (nameInput == '') {
            $("#name").css('background-color', '#ffe4b2');
        }

        if (emailInput == '') {
            $("#email").css('background-color', '#ffe4b2');
        }

        if (messageInput == '') {
            $("#message").css('background-color', '#ffe4b2');
        }
    };

    // contact form validator function

    function formVal() {

        var nameInput = $("#name").val().trim();
        var emailInput = $("#email").val().trim();
        var messageInput = $("#message").val().trim();

        if (nameInput == '' || emailInput == '' || messageInput == '') {
            formWarning();
            return false;

        } else {

            return true;
        };
    };

    //function for alerting when contact form is not properly filled out

    function formAlert() {
        alert(

            'Message not sent. Please make sure the form is filled out correctly.\n\n' +
            "\t• Make sure each field is filled.\n" +
            '\t• Make sure the provided email is in the correct format:\n' +
            '\t- e.g. example@example.com'
        );
    };

    $("#sendButton").on("click", function() {

        event.preventDefault();

        if (formVal()) {

            var contactForm = $('#contactForm');
            var nameInput = $("#name").val().trim();
            var emailInput = $("#email").val().trim();
            var messageInput = $("#message").val().trim();

            var newMessage = {
                name: nameInput,
                email: emailInput,
                message: messageInput
            };


            $.post("/contact", newMessage)
                .done(function(data) {
                    if (data === true) {
                        alert("Thanks for contacting");
                        $('.close').click(); //close contact modal
                    } else {
                        formAlert();
                    };

                });

        } else {
            formAlert();
        };

    });

    //clear form on close

    $(".close").on("click", clearForm);

    //--------------------------------

    //----------------------------------------------------------------END OF SCRIPT	
});