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

});
