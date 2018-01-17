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
  var totalSlide = $('.slider-text').length;

  var sliderWidth = $('.slider-box').outerWidth();

  $('.slider-texts').width(sliderWidth*(totalSlide+2));
  $('.slider-texts').css({"max-width":((totalSlide+2)*100)+"%"});

  var sliderHeight = $('.slider-texts').height();
  $('.slider-box').height(sliderHeight+100+"px");


  $('.slider-text').first().addClass("first-slide");
  $('.slider-text').last().addClass("last-slide");
  $('.first-slide').clone().appendTo(".slider-texts");
  $('.last-slide').clone().prependTo(".slider-texts");
  $('.slider-texts').css({"left":"-"+sliderWidth+"px"});
  var currentSlide = 1;

  $('.slider-next').on('click', function() {
    $('.slider-texts').stop(true,true);
    currentSlide++;
    var newSlide = $('.slider-texts').position().left-(sliderWidth);
    $('.slider-texts').animate({
      'left': newSlide+"px"
    }, 300, function() {
      if (currentSlide === totalSlide+1) {
        $('.slider-texts').css({"left":"-"+sliderWidth+"px"});
        currentSlide = 1;
      }
    })
  })
  $('.slider-prev').on('click', function() {
    $('.slider-texts').stop(true,true);
    currentSlide--;
    var newSlide = $('.slider-texts').position().left+(sliderWidth);
    $('.slider-texts').animate({
      'left': newSlide+"px"
    }, 300, function() {
      if (currentSlide === 0) {
        $('.slider-texts').css({"left":"-"+(totalSlide*sliderWidth)+"px"});
        currentSlide = totalSlide;
      }
    })
  })

  $(window).on('resize', function() {
    sliderWidth = $('.slider-box').outerWidth();
    sliderHeight = $('.slider-texts').height();
    $('.slider-box').height(sliderHeight+100+"px");
    $('.slider-texts').css({"left":"-"+(sliderWidth*currentSlide)+"px"});
  })


});
