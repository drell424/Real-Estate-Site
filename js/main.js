
var bx1Config = {
  controls: true
  , pager: true
  , auto: true
  , autoStart: false
  , pause: 3000
  , speed: 500
  , slideWidth: 500
  , minSlides: 2
  , maxSlides: 2
  , slideMargin: 10
  , auto: true
  , autoControls: false
  , captions: true
  }


$(document).ready(function(){
  $('#slider1').bxSlider(bx1Config);
  $('#slider2').bxSlider(bx1Config);
  $('#slider3').bxSlider(bx1Config);
  $('#slider4').bxSlider(bx1Config);

});

