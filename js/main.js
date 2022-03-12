$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 25);
});

$(document).ready(function () {
  $('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $.scrollIt({
    topOffset: 0,
  });
});

let preloader = document.querySelector('.preloader');
window.addEventListener('load', function () {
  preloader.style.display = 'none';
  preloader.parentElement.removeChild(preloader);
});
