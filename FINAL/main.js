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

  //  $('.image_carousel').flickity({
  //   on: {
  //     ready: function () {
  //       console.log('Flickity is ready');
  //     },
  //     change: function (index) {
  //       /*print index*/
         // This is where the numbers are being generated 
  //       /* This is the call to our function that swaps out carousels */
  //       oneAnimal(index);
  //     }
  //   },
  //   cellAlign: 'left',
  //   contain: true,
  //   wrapAround: true,
  // });

  $('#image_carousel').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
  }); 

  // jQuery(document).ready(function($){
  //     $('.animaltop a').on('click',function(event){
  //         event.preventDefault();
  //         var indexElement = $(this).attr('href');
  //         indexElement = indexElement.replace('#slide','');
  //         $('.js-flickity').flickity( 'select', parseInt(indexElement)-1 );
  //     });
  // });

  var $caption = $('.caption');
// Flickity instance
  var flkty = $carousel.data('flickity');

  $carousel.on( 'select.flickity', function() {
  // set image caption using img's alt
  $caption.text( flkty.selectedElement.alt )
});

});

