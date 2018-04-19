$(function () {

  var slide_count;
  //
  $('.main_carousel').flickity({
    on: {
      ready: function () {
        console.log('Flickity is ready');
      },
      change: function (index) {
        /*print index*/
        /* This is where the numbers are being generated */
        /* This is the call to our function that swaps out carousels */
        getAnimal(index);
      }
    },
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
  });
  $('#image_carousel').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
  });

});
