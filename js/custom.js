var msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture;
var touchSupport = (("ontouchstart" in window) || msGesture || window.DocumentTouch && document instanceof DocumentTouch);

// Preloader
$(window).load(function () {
  $('.preloader').fadeOut(1000);
});


// Isotope filter
jQuery(document).ready(function ($) {

  $(".problems_scroller .boxes").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }],
  });
  $(".partner_inner .boxes").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ],
  });
  $(".top10_slides ").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".featuredin_logos").slick({
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    variableWidth: true,
    
  });

  if ($('#user_numbers').length > 0) {
    $('#user_numbers').animateNumber(
      {
        number: 2000000,
        easing: 'easeInQuad',
      },
      2000
    );
    $('#oem_numbers').animateNumber(
      {
        number: 7,
        easing: 'easeInQuad',
      },
      1000
    );
    $('#sector_numbers').animateNumber(
      {
        number: 5,
        easing: 'easeInQuad',
      },
      1000
    );
  }

  $('.user_slide').click(function () {
    if (!$(this).hasClass('active')) {
      $('.user_slide').removeClass('active');
      //$('.user_slide').fadeOut(100);
      $('.user_slide').hide();
      var mySlide = $(this).addClass('active').detach();
      mySlide.prependTo('.slider_wrap');
      $('.user_slide').fadeIn(100);
    }

  });

  $('.s_tab').click(function () {
    if (!$(this).hasClass('active')) {
      $('.s_slide').hide();
      $('.s_tab').removeClass('active')
      $(this).next('.s_slide').fadeIn();
      $(this).addClass('active');
    }

  });

  $('[data-toggle="tooltip"]').tooltip();

  $('#login-form-link').click(function (e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function (e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });


  $('.flow_btn').mouseenter(function () {
    $(this).find('.hover').show();
    //$(this).addClass('current');
  });
  $('.flow_btn').mouseleave(function () {
    $(this).find('.hover').hide();
    //$(this).removeClass('current');
  });

  if ($('.iso-box-wrapper').length > 0) {

    var $container = $('.iso-box-wrapper'),
      $imgs = $('.iso-box img');

    $container.imagesLoaded(function () {

      $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
      });

      $imgs.load(function () {
        $container.isotope('reLayout');
      })

    });

    //filter items on button click

    $('.filter-wrapper li a').click(function () {

      var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({
        filter: filterValue,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });

      // don't proceed if already selected 

      if ($this.hasClass('selected')) {
        return false;
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

      return false;
    });

  }

});


// jQuery to collapse the navbar on scroll 
$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {

  // ------- Wow animated ------ //
  wow = new WOW(
    {
      mobile: false
    });
  wow.init();


  // Hide Mobile Menu After Clicking On a link
  // $('.navbar-collapse a').not("[dropdown-js]").click(function () {
  //   $(".navbar-collapse").collapse('hide');
  // });

  /* Parallax section
   -----------------------------------------------*/
  function initParallax() {
    //$('#home').parallax("100%", 0.1);
    $('#feature').parallax("100%", 0.3);
    $('#service').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#team').parallax("100%", 0.1);
    $('#testimonial').parallax("100%", 0.2);
    $('#portfolio').parallax("100%", 0.3);
    $('#error-home').parallax("100%", 0.1);
    $('#blog').parallax("100%", 0.3);
    $('#blog-home').parallax("100%", 0.2);
    $('#comingsoon-home').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }

  initParallax();

});



$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 54
        }, 1000);
        return false;
      }
    }
  });
});

$(function () {
  $("[tabs-link-js]").on("click", function (e) {
    e.preventDefault();

    var elem = $(this),
      elemNum = elem.attr("data-tabs-header");

    $("[tabs-link-js]").removeClass("is-active");
    elem.addClass("is-active");

    $("[tabs-body-js]").removeClass("fadeOut is-active");
    $("[data-tabs-body='" + elemNum + "']").addClass("fadeIn is-active");
  });

  function tourBtn(btnName) {
    $("[" + btnName + "]").on("click", function (e) {
      e.preventDefault();

      var elem = $(this);

      $("[" + btnName + "]").removeClass("is-active");
      elem.addClass("is-active");

      if (btnName === "vblock-js") {
        var elemVideoIdx = elem.attr("data-block"),
          elemTitle = elem.find(".main__block-text").text();

        var textInsertBlock = $(".main__box-bottom .main__box-title");
        textInsertBlock.html(elemTitle);

        $(".main__box-wrapper").removeClass("is-active");
        $(".main__box-wrapper[data-wrap='" + elemVideoIdx + "']").addClass("is-active");
      }

      if (btnName === "wblock-js") {
        var elemWebIdx = elem.attr("data-block");

        $(".main__box-wrapper").removeClass("is-active");
        $(".main__box-wrapper[data-wrap='" + elemWebIdx + "']").addClass("is-active");
      }
    });
  }

  tourBtn("vblock-js");
  tourBtn("wblock-js");

  var slickPrevArrow = '<div class="prev"></div>';
  var slickNextArrow = '<div class="next"></div>';

  $('.news__slider').not('.slick-initialized').slick({
    prevArrow: slickPrevArrow,
    nextArrow: slickNextArrow,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('[slider-js]').not('.slick-initialized').slick({
    prevArrow: slickPrevArrow,
    nextArrow: slickNextArrow,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $("[process-btn-js ]").on("click", function(e) {
    e.preventDefault();

    var elem = $(e.target),
      elemAttr = elem.attr("data-btn");

    $("[process-btn-js ]").removeClass("is-active");
    elem.addClass("is-active");

    $(".process__body").removeClass("is-active");
    $(".process__body[data-body='" + elemAttr + "']").addClass("is-active");
  });


  $("[dropdown-js]").on("click", function(e) {
    e.preventDefault();

    if($(window).width() < 576) {
      if($(this).siblings(".nav-drop").hasClass("is-open")) {
        $(this).siblings(".nav-drop").slideUp().removeClass("is-open");
      } else {
        $(".nav-drop").slideUp().removeClass("is-open");
        $(this).siblings(".nav-drop").slideDown().addClass("is-open");
      }
    }
  });


  $(".navbar-toggle").on("click", function(e) {
    var elem = $(this);

    if(!elem.hasClass("is-show")) {
      elem.addClass("is-show");
    } else {
      $(".nav-drop").slideUp();
      elem.removeClass("is-show");
    }
  });


  // TEAMS FILTER
  $(".teams__btn").on("click", function(e) {
    e.preventDefault();

    var elem = $(e.currentTarget),
      elemAttr = elem.attr("data-teams-name");

    $(".teams__btn").removeClass("is-active");
    elem.addClass("is-active");
  });


  // CUSTOM BLOCK
  $("[custom-btn-js]").on("click", function(e) {
    e.preventDefault();

    var elem = $(e.currentTarget),
      elemAttr = elem.attr("data-block");

    $("[custom-btn-js]").removeClass("is-active");
    elem.addClass("is-active");

    $(".custom__block-body").removeClass("is-active");
    $(".custom__block-body[data-filter-block='" + elemAttr + "']").addClass("is-active");
  });
});


// Countdown Timer Start Here
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  // var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    // secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

//var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
var deadline = new Date(2018, 09, 07, 12, 00);
initializeClock('clockdiv', deadline);

// Countdown timer End here
