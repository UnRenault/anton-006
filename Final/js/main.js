$(document).ready(function() {
  $('.owl-carousel.main-slider').owlCarousel({
      items:1,
      margin:10,
      loop: true,
      autoHeight:true
  });
  $('.owl-carousel.blog-slider').owlCarousel({
      items:3,
      margin:30,
      loop: true,
      autoHeight:true
  });
  $('.navbar-toggler').click(function () {
    $('.h-menu').toggleClass('active');
  })
});
