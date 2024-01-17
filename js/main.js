$(document).ready(function () {
  $(".more").hide();
  $(".show-less").hide();

  $(".show-more").click(function(){
    $(".show-more").hide();
    $(".more").show(500);
    $(".show-less").show();
  });

  $(".show-less").click(function(){
    $(".show-more").show();
    $(".more").hide(500);
    $(".show-less").hide();
  });
});



$(document).ready(function () {
      $.fakeLoader({
          timeToHide:1500,
          bgColor:"#fff",
          spinner:"spinner6"
      });
  });


// Side ber when page scrol
$("body").niceScroll();


/* Stacky Nav */
$(function(){
    $(window).on("scroll", function(){
      if($(window).scrollTop() > 200){
        $(".navbar").addClass("scroll-nav");
      } else {
        $(".navbar").removeClass("scroll-nav");
      }
  });
});


var rellax = new Rellax('.rellax', {
  center: true
});



// Testimonial owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    nav:true,
    dots: false,
    smartSpeed: 1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
