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

});
