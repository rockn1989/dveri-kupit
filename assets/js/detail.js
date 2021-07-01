$(function () {
  /**
   * Detail slider
   */

  $(".detail-card-slider-hero").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    lazyLoad: "ondemand",
    fade: true,
    asNavFor: ".detail-card-slider-preview",

    responsive: [
      {
        breakpoint: 959,
        settings: {
          centerMode: true,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  });

  $(".detail-card-slider-preview").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".detail-card-slider-hero",
    dots: false,
    infinity: true,
    centerMode: false,
    lazyLoad: "ondemand",
    focusOnSelect: true,
    prevArrow:
      '<div class="btn-slide slick-prev"><i class="icon-arrow-right"></i></div>',
    nextArrow:
      '<div class="btn-slide slick-next"><i class="icon-arrow-right"></i></div>',
    responsive: [
      {
        breakpoint: 1245,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  /**
   * Sizes list toggle
   */

  $(".sizes-list").on("click", "a", function (e) {
    e.preventDefault();

    $(this).parents("ul").find("a").removeClass("active");
    $(this).addClass("active");
  });

  /**
   * Toggle block
   */

  $(".accordion-block__title").on("click", function (e) {
    e.preventDefault();

    $(this)
      .toggleClass("open")
      .siblings(".accordion-block__desc")
      .stop(true, true)
      .slideToggle(350);
  });
});
