$(document).ready(function($){
$('.customer-slider').slick({
  dots: true,
  arrows:true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
	prevArrow:'',
	nextArrow:'',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	 $('.client-slider').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   dots: false,
   focusOnSelect: false,
   infinite: false,
   speed: 300,
	 prevArrow:'',
	 nextArrow:'',
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
 });
	});
