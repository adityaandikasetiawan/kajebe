(function (jQuery) {
  "use strict";

  jQuery(document).ready(function () {
    callGeneralSwiper();
    callPortfolioSwiper();
    callPortfolioSlider();
    callTestimonialSlick();
  });
})(jQuery);

function callGeneralSwiper() {
  jQuery(document)
    .find(".swiper-general")
    .each(function () {
      let slider = jQuery(this);

      var sliderAutoplay = slider.data("autoplay");

      var breakpoint = {
        // when window width is >= 0px
        0: {
          slidesPerView: slider.data("mobile-sm"),
        },
        480: {
          slidesPerView: slider.data("mobile"),
        },
        // when window width is >= 768px
        768: {
          slidesPerView: slider.data("tab"),
        },
        // when window width is >= 1023px
        1023: {
          slidesPerView: slider.data("laptop"),
        },
        // when window width is >= 1199px
        1199: {
          slidesPerView: slider.data("slide"),
        },
      };

      if (slider.data("navigation")) {
        if (slider.data("navigation-outer")) {
          var navigationVal = {
            nextEl: slider.next(".swiper-btn").find(".swiper-button-next")[0],
            prevEl: slider.next(".swiper-btn").find(".swiper-button-prev")[0],
          };
        } else {
          var navigationVal = {
            nextEl: slider.find(".swiper-button-next")[0],
            prevEl: slider.find(".swiper-button-prev")[0],
          };
        }
      } else {
        var navigationVal = false;
      }

      if (slider.data("pagination")) {
        var paginationVal = {
          el: slider.find(".swiper-pagination")[0],
          clickable: true,
        };
      } else {
        var paginationVal = false;
      }
      var sw_config = {
        loop: slider.data("loop"),
        speed: 1000,
        spaceBetween: slider.data("space"),
        slidesPerView: slider.data("slide"),
        centeredSlides: slider.data("center"),
        mousewheel: slider.data("mousewheel"),
        autoplay: sliderAutoplay,
        effect: slider.data("effect"),
        navigation: navigationVal,
        pagination: paginationVal,
        breakpoints: breakpoint,
      };
      var swiper = new Swiper(slider[0], sw_config);

      jQuery(".porfolio-tab .nav-link").on("shown.bs.tab", (e) => {
        swiper.destroy(true, true);
        setTimeout(() => {
          swiper = new Swiper(slider[0], sw_config);
        }, 100);
      });
    });
}

function callPortfolioSwiper() {
  if (typeof Swiper !== "undefined") {
    var mySwiper = new Swiper(".portfolio-swiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        // breakpoint from 0 up
        0: {
          slidesPerView: 1,
        },
        // breakpoint from 480 up
        480: {
          slidesPerView: 1,
        },
        // breakpoint from 768 up
        768: {
          slidesPerView: 1.9,
        },
        // breakpoint from 1023 up
        1023: {
          slidesPerView: 1.9,
        },
        1199: {
          slidesPerView: 1.9,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}
function callPortfolioSlider() {
  if (typeof Swiper !== "undefined") {
    var mySwiper = new Swiper(".portfolio-container", {
      slidesPerView: 3,
      spaceBetween: -110,
      loop: true,
      centeredSlides: true,
      autoplay: 9000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // breakpoint from 0 up
        0: {
          slidesPerView: 1,
        },
        // breakpoint from 480 up
        480: {
          slidesPerView: 1,
        },
        // breakpoint from 768 up
        768: {
          slidesPerView: 2,
        },
        // breakpoint from 1023 up
        1023: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 3,
        },
      },
    });
    window.dispatchEvent(new Event("resize"));
  }
}

function callTestimonialSlick() {
  jQuery(".testimonial-thumbs1").each(function () {
    let thumbs1 = jQuery(this);
    jQuery(".testimonial-thumbs1").slick({
      slidesToShow: thumbs1.data("thumb1-slide"),
      slidesToScroll: 1,
      centerMode: thumbs1.data("center"),
      infinite: true,
      vertical: false,
      arrows: false,
      asNavFor: ".testimonial-top, .testimonial-thumbs2",
      focusOnSelect: true,
      draggable: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            vertical: false,
            centerMode: false,
            slidesToShow: thumbs1.data("tablet"),
          },
        },
        {
          breakpoint: 767,
          settings: {
            vertical: false,
            centerMode: false,
            slidesToShow: thumbs1.data("mobile"),
          },
        },
        {
          breakpoint: 479,
          settings: {
            vertical: false,
            slidesPerRow: 1,
            centerMode: false,
            slidesToShow: thumbs1.data("mobile-sm"),
          },
        },
      ],
    });
    });

  jQuery(".testimonial-thumbs2").each(function () {
    var thumbs2 = jQuery(this);
    jQuery(".testimonial-thumbs2").slick({
      slidesToShow: thumbs2.data("thumb2-slide"),
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
      dots: true,
      draggable: true,
      infinite: true,
      asNavFor: ".testimonial-top, .testimonial-thumbs1",
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            vertical: false,
            centerMode: false,
            slidesToShow: thumbs2.data("tablet"),
          },
        },
        {
          breakpoint: 767,
          settings: {
            vertical: false,
            centerMode: false,
            slidesToShow: thumbs2.data("mobile"),
          },
        },
        {
          breakpoint: 479,
          settings: {
            vertical: false,
            slidesPerRow: 1,
            centerMode: false,
            slidesToShow: thumbs2.data("mobile-sm"),
          },
        },
      ],
    });
  });

  jQuery(".testimonial-top").each(function () {
    var jQuerycarousel = jQuery(this);
    jQuery(".testimonial-top").slick({
      autoplay: false,
      slidesPerRow: 1,
      slidesToShow: 1,
      asNavFor: ".testimonial-thumbs1, .testimonial-thumbs2",
      arrows: false,
      draggable: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            vertical: false,
            fade: true,
          },
        },
      ],
    });
  });
}
