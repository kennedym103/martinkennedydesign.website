/// One page scrolling ///

$(document).ready(function () {
   $('#nav').onePageNav();
});

/// downward scrolling for animated hero button ///

setTimeout(function(){
    $('.trans--grow').addClass('grow');
    $('.nav-item-visibilty').addClass('nav-opacity');
}, 275);



$("#jumpButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#scrollDown").offset().top
    }, 1000);
});


// nav-menu, line grow ///



///nav-menu hide, and reappear ///

$(document).ready(function () {
   $(window).scroll(function () {
      if ($(window).scrollTop() > 1000 &&
         $(".nav-wrapper").css("position") != "fixed") {
         $(".nav-wrapper").slideUp(function () {
            $(".nav-wrapper").css("position", "fixed")
            $(".nav-wrapper").slideDown('1000')
         })
      } else if ($(window).scrollTop() <= 600) {
         $(".nav-wrapper").css("position", "initial")
      }
   })
})

//// Menu Icon Toggle ///

$(document).ready(function () {
   $(".menu-icon").click(function () {
      $("nav ul").slideToggle();
   })
})

document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

<!-- Hide Menu  @ 768px-->

var menu = $('nav ul');

$(window).resize(function () {
   var w = $(window).width();
   if (w > 768 && menu.is(':hidden')) {
      menu.removeAttr('style');
   }
});

/// toggle class for background on scroll ///

$(document).ready(function () {
   $(window).scroll(function () {
      $('.nav-wrapper').toggleClass("bg-nav", ($(window).scrollTop() > 100));
   });
});

$(window).resize(function () {
   var w = $(window).width();
   if (w > 768) {
      $('.nav-wrapper').toggleClass("bg-none");
   }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 450) {
        $(".print-svg").addClass("path");
    } else {
        $(".print-svg").removeClass("path");
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 5000) {
        $(".surf-svg").addClass("path1");
    } else {
        $(".surf-svg").removeClass("path1");
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 5000) {
        $(".wind-svg").addClass("path2");
    } else {
        $(".wind-svg").removeClass("path2");
    }
});

//move background hero image with mouse overflow
$('#landing-content').mousemove(function(e){
    var amountMovedX = (e.pageX / -1 / 10);
    var amountMovedY = (e.pageY * -1 / 10);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});


// Add parallax (stellar.js)

$('.jumbotron').stellar();
