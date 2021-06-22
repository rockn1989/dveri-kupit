$(function () {
  /**
   * Hero slider
   */
  const heroSlider = $(".hero-slider .slider");

  heroSlider.init(function (event, slick) {
    $(".hero-slider .slide-prev").on("click", function () {
      heroSlider.slick("slickPrev");
    });

    $(".hero-slider .slide-next").on("click", function () {
      heroSlider.slick("slickNext");
    });
  });

  heroSlider.slick({
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    cssEase: "linear",
    fade: true,
    autoplaySpeed: 3000,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 959,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  /**
   * Products slider
   */
  const $productSlider = $(".product-slider .slider");

  $productSlider.slick({
    infinite: false,
    arrows: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    fade: false,
    cssEase: "linear",
    swipeToSlide: true,
    prevArrow:
      '<div class="btn-slide slick-prev"><svg width="58px" height="14px" class="arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/icon-svg/sprite/sprite.svg#arrow-left"></use></svg></i></div>',
    nextArrow:
      '<div class="btn-slide slick-next"><svg width="58px" height="14px" class="arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/icon-svg/sprite/sprite.svg#arrow-right"></use></svg></div>',
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
});
