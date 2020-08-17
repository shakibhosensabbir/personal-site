//navbar js

$(window).on('scroll',function(){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else
    {
        $('nav').removeClass('black');
    }

})
//nav bar js
//a js

$(window).on('scroll',function(){
    if ($(window).scrollTop()){
        $('a').addClass('black3');
    }
    else
    {
        $('a').removeClass('black3');
    }

})
//a js
//a js

$(window).on('scroll',function(){
    if ($(window).scrollTop()){
        $('h1').addClass('black2');
    }
    else
    {
        $('h1').removeClass('black2');
    }

})
//a js
// text type 
const typed = new Typed('.text', {
      
    strings: ['Shakib Hosen', 'Web Designer','Web Developer', '19 Year Old'], typeSpeed: 80,backSpeed: 80, backDelay: 1500, loop:
    true,
    
    
    });

// text type

// count strat
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// count end

// skill bar 
$(document).ready(function(){
    $(".cdev").circlos({
      backgroundColor: '#b3cef6',
      progressColor: '#4b86db',
      percent: 75, 
      duration: 2000 
    });
  });

// skill bar


var $grid = $('.Portifolio-active').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
    }
    })

    $('.Portifolio-button').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });
      // for menu active class
      $('.Portifolio-button button').on('click',function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
        });

///


jQuery(function ($) {

    'use strict';
  
   
    // 8. client-testimonial one item carousel
    $('.client-testimonial-1').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      responsiveClass: true,
      autoplay: true,
      autoplayHoverPause: true,
      lazyLoad: true,
      items: 1,
    });
  
    $('.client-testimonial').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      responsiveClass: true,
      autoplay: true,
      autoplayHoverPause: true,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 1
        },
        600: {
          items: 2
        },
        800: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });
  
    // 9. hero content one item carousel
    $('.hero-content-slider').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      responsiveClass: true,
      autoplay: true,
      autoplayHoverPause: true,
      lazyLoad: true,
      items: 1,
    });
  
    // 10. our clients logo carousel
    $('.clients-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 15,
      dots: false,
      slideTransition: 'linear',
      autoplayTimeout: 4500,
      autoplayHoverPause: true,
      autoplaySpeed: 4500,
      responsive: {
        0: {
          items: 2
        },
        500: {
          items: 3
        },
        600: {
          items: 4
        },
        800: {
          items: 5
        },
        1200: {
          items: 6
        }
  
      }
    });
  
  
  }); // JQuery end

  /// top up
   //Get the button
   var mybutton = document.getElementById("myBtn");
    
   // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = function() {scrollFunction()};
   
   function scrollFunction() {
     if (document.body.scrollTop >500|| document.documentElement.scrollTop > 500) {
       mybutton.style.display = "block";
     } else {
       mybutton.style.display = "none";
     }
   }
   
   // When the user clicks on the button, scroll to the top of the document
   function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   }