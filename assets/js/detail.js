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

    lazyLoad: "ondemand",
    focusOnSelect: true,
    prevArrow:
      '<div class="btn-slide slick-prev"><i class="icon-chevron-right"></i></div>',
    nextArrow:
      '<div class="btn-slide slick-next"><i class="icon-chevron-right"></i></div>',
    responsive: [
      {
        breakpoint: 1245,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 5,
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

  /**
   * Show colors detail
   */

  $(".js__scroll-toggle").on("click", function (e) {
    e.preventDefault();
    $(".scroll-wrapper").toggleClass("visible");
    $(this)
      .text($(this).text() == "Показать еще" ? "Скрыть" : "Показать еще")
      .toggleClass("active");
  });

  /**
   * Calc control
   */

  $(".calc-control").on("click", "span", function (e) {
    e.preventDefault();

    var input = $(this).closest(".calc-control").find("input");

    if ($(this).hasClass("minus")) {
      input.val() == 1
        ? input.val(1)
        : input.val(parseInt(input.val(), 10) - 1);
    }

    if ($(this).hasClass("plus")) {
      input.val(parseInt(input.val(), 10) + 1);
    }
  });

  /**
   * Vertical scroll bar
   */

  UIkit.util.on($(".colors-panel-modal"), "show", function () {
    $(".vertical-scroll-block__inner").mCustomScrollbar({
      axis: "y",
      setHeight: 500,
      scrollInertia: 300,
    });
  });

  UIkit.util.on($(".colors-panel-modal"), "hide", function () {
    $(".vertical-scroll-block__inner")
      .mCustomScrollbar("destroy")
      .css("height", "400px");
  });

  /**
   * Check color panel
   */

  $.each($(".colors-panel-list"), function () {
    $(this).on("click", ".color-panel", function (e) {
      e.preventDefault();
      console.log($(this));
      $(this)
        .parents(".colors-panel-list")
        .find(".color-panel")
        .removeClass("active");
      $(this).addClass("active");
    });
  });
});
