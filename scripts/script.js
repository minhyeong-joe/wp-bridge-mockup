$(function(){

  //navbarDropdown
  $('.navbar .dropdown-toggler>a').on('click', function(e) {
    e.preventDefault();
  });
  $('.navbar.mobile-navbar .dropdown-toggler').on('click', function() {
    $('.mobile-navbar .dropdown-list').slideToggle();
  })

  $('.navbar.wide-navbar .dropdown-toggler').on('mouseenter', function() {
    $('.dropdown-list').stop(true, true).fadeIn("fast");
  });
  $('.navbar.wide-navbar .dropdown-toggler').on('mouseleave', function() {
    setTimeout(function(){
      $('.dropdown-list').stop(true, true).fadeOut("fast");
    }, 200);
  });

  $('.navbar-toggler').on('click', function() {
    $('.nav-list').slideToggle("fast");
  })


  // reservation date input default to today
  if ($('.date-picker').length) {
    Date.prototype.toDateInputValue = (function() {
      var local = new Date(this);
      local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
      return local.toJSON().slice(0,10);
    });
    $('.date-picker').val(new Date().toDateInputValue());

    $(".date-picker").datepicker();
    $(".date-picker").on("change", function() {
      $(".date-picker").datepicker("option", "dateFormat", "yy-mm-dd");
    });
  }

  // our-philosophy testimonial
  function slideTo(slide) {
    var slideWidth = (slide-1)*100;
    $('.testimonial').css({"transform": "translateX(-"+slideWidth+"%)", "transition": "0.5s"});
  }
  function loopTo(slide) {
    var slideWidth = (slide-1)*100;
    $('.testimonial').css({"transform": "translateX(-"+slideWidth+"%)", "transition": "0s"});
  }

  var testimonialTotal = $('.testimonial').length;
  var testimonialCurrent = 1;
  $('.testimonial-holder').css({"width": (testimonialTotal*800)+"px", "max-width": (testimonialTotal*100)+"%"});

  $('.testimonial-prev').on('click', function() {
    testimonialCurrent--;
    if (testimonialCurrent < 1) {
      testimonialCurrent = testimonialTotal;
      // loopTo(testimonialCurrent);
      // testimonialCurrent--;
    }
    slideTo(testimonialCurrent);
    // console.log(testimonialCurrent);
  });
  $('.testimonial-next').on('click', function() {
    testimonialCurrent++;
    if (testimonialCurrent > testimonialTotal) {
      testimonialCurrent = 1;
      // loopTo(testimonialCurrent);
      // testimonialCurrent++;
    }
    slideTo(testimonialCurrent);
    // console.log(testimonialCurrent);


  });


});
