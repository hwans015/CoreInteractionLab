$(function () {

  var slide_count;

  $('.main_carousel').flickity({
    on: {
      ready: function () {
        console.log('Flickity is ready');
      },
      change: function (index) {
        /* This is where the numbers are being generated */
        slide_count = index;
        /* This is the call to our function that swaps out carousels */
        moveImageCarousel();
      }
    },
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
  });

  $('#image_carousel_0').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
  });

  $('#image_carousel_1').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
  });

  $('#image_carousel_2').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
  });

  function moveImageCarousel() {
    /* This kind of works but also needs to be figured out for the case of the 0th carousel */
    var old_image_carousel = document.getElementById('image_carousel_' + (slide_count - 1) );
    var image_carousel = document.getElementById('image_carousel_' + slide_count);
    
    old_image_carousel.style.display = 'none';
    image_carousel.style.display = 'block';

  }

});