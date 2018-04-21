$(document).ready(() => {

  $("#loaderWrap").fadeOut("slow");

  let windowWidth = $(window).width();
  let windowHeight = $(window).height();
  const $root = $('html, body');
  const navIcon = $('#nav-icon');
  const navLink = $('.navlink');

  //--------------------------------

  // smoothScroll
  $('.navLink').click(function() {
  $root.animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
  return false;
});

  //hide nav bar after selection is made (on smaller screens):
  $('.nav a').click(() => {
    //less than mobile breakpoint, landscape & portrait
    if (windowWidth < 599 || windowWidth < 750) {
      navIcon.click();
    }
  });

  // toggle nav icon animation

  navIcon.click(function(){
      $(this).toggleClass('open');
  });

  //--------------------------------

  const navButton = $('#mobileNavButton');
  const navBarAll = $('.navbar-toggle, .navbar-collapse, .navbar, .collapse');
  const navBar = $('.nav');
  const closeButton = $('.closeIcon');

  navButton.click(() => {

    if (navButton.hasClass('collapsed')) {
      closeButton.show();
      navBarAll.css('background-color', '#222');
      navBarAll.css('border-color', 'transparent');
    } else {
      closeButton.hide();
      navBarAll.css('background-color', 'transparent');
      navBarAll.css('border-color', '#d8d8d8');

    };

  });

  //--------------------------------

  // hides <li>s in mobile nav table in mobile nav instead of default height change, for better toggle animation:

  $('body').on('click', 'button', function() {

    const currentAria = $(this).attr("aria-expanded");

    if (currentAria == 'true') {

      navBar.css('display', 'none')
    } else {

      navBar.css('display', 'inline-block')

    }

  });

  //--------------------------------

  //on desktop, change navbar background color when home section is not active i.e. the view is not at the top of the page

  const homeLI = $('#homeLink');
  let active = '';
  let userScrolled = false;

  $(window).scroll(() => {
    userScrolled = true;
    active = $('.active');
  });

  setInterval(() => {

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

  const portSection = $('#portfolio');
  const portHeader = $('#portHeader');
  const portParallax = $('.portParallax');

  if (windowWidth < 1025) { //less than bootstrap's mobile breakpoint
    portSection.removeClass('portParallax');
    portSection.addClass('mobileHeaders');


    portHeader.css('background', '#222222');
    portHeader.css('padding-top', '60px');
    portHeader.css('padding-bottom', '60px');

    portParallax.css('background-attachment', 'initial');
    portParallax.css('background-size', '200%');

  }

  //--------------------------------

  //expandBtn button effects on portfolio and contact modal

  const expandBtn = $('.expandBtn');
  const sendBTN = $('#messageSend');
  const socialIcon = $('.socialIcons');
  const headerLinks = $('.headerLinks')
  const emailLink = $('#emailLink')
  let BTNstate = true;

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

  //project link button mouseover
  $('body').on('mouseover', '.expandBtn', function() {

    if (BTNstate) {
      $(this).animate({
        backgroundColor: "white",
        color: "#9f6379",
        width: 300

      }, 200);
    }
    BTNstate = !BTNstate;
  });
  //project link button mouseout
  $('body').on('mouseout', '.expandBtn', function() {

    if (!BTNstate) {
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
  $(sendBTN).click(() => {

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

  $('body').on('click', '.portfolioIcons', function() {

    const modalType = $(this).attr('data-target');

    $(modalType).modal("show");

  })

  //--------------------------------

  //Collect contact form and create POST request to send email

  //function for clearing out contact form

  clearForm = () => {

    const contactForm = $('#contactForm');

    for (let i = 0; i < contactForm.length; i++) {
      contactForm[i].reset();
      $("#name").css('background-color', 'white');
      $("#email").css('background-color', 'white');
      $("#message").css('background-color', 'white');
    };
  };

  //function for displaying warning colors in form inputs that are empty

  formWarning = () => {

    let nameInput = $("#name").val().trim();
    let emailInput = $("#email").val().trim();
    let messageInput = $("#message").val().trim();
    const inputWarningColor = 'rgba(255, 228, 178, 0.9)'

    if (nameInput == '') {
      $("#name").css('background-color', inputWarningColor);
    }

    if (emailInput == '') {
      $("#email").css('background-color', inputWarningColor);
    }

    if (messageInput == '') {
      $("#message").css('background-color', inputWarningColor);
    }
  };

  // contact form validator function

  formVal = () => {

    let nameInput = $("#name").val().trim();
    let emailInput = $("#email").val().trim();
    let messageInput = $("#message").val().trim();

    if (nameInput == '' || emailInput == '' || messageInput == '') {
      formWarning();
      return false;

    } else {

      return true;
    };
  };

  //function for alerting when contact form is not properly filled out

  formAlert = () => {
    alert(

      `Message not sent. Please make sure the form is filled out correctly.\n\n
            \t• Make sure each field is filled.\n
            \t• Make sure the provided email is in the correct format:\n
            \t- e.g. example@example.com`
    );
  };

  $("#sendButton").on("click", () => {

    event.preventDefault();

    if (formVal()) {

      let contactForm = $('#contactForm');
      let nameInput = $("#name").val().trim();
      let emailInput = $("#email").val().trim();
      let messageInput = $("#message").val().trim();

      let newMessage = {
        name: nameInput,
        email: emailInput,
        message: messageInput
      };


      $.post("/contact", newMessage)
        .done((data) => {
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

  //insert current year into copyright text (in footer)

  const copyright = $('#copyright');
  const currentYear = (new Date()).getFullYear();
  copyright.html(`&copy; ${currentYear}`)

  //----------------------------------------------------------------END OF SCRIPT
});
