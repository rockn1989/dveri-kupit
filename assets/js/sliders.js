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
  });
});
