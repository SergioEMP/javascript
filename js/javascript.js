$(document).ready(function(){
    $('.slider1,.slide2').slick({
        dots: true,
        arrows:true,
        prevArrow: '<i class="icon-arrow-back"></i>',
        nextArrow: '<i class="icon-arrow-next"></i>',
    });
  });

  var $status = $('.current');
  var $slickElement = $('.slideshow');
  
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
  });
  
  $slickElement.slick({
    dots: true
  });

