$(function () {
  UIkit.util.on($(".dropdown-menu"), "show", function () {
    $(".dropdown-menu__img img.lazy").lazy({
      bind: "event",
    });

    $("body").addClass("menu-open");
  });

  UIkit.util.on($(".dropdown-menu"), "hide", function () {
    $("body").removeClass("menu-open");
  });

  $(".main-nav-list__item").on("mouseenter", function () {
    $(this).addClass("active");
  });

  $(".main-nav-list__item").on("mouseleave", function () {
    $(this).removeClass("active");
  });

  /**
   * Mobile nav
   */

  $(".js__mobile-sublist-toggle").on("click", function (e) {
    e.preventDefault();
    $(this)
      .toggleClass("open")
      .parent("*")
      .siblings("ul")
      .stop(true, true)
      .slideToggle("350");
  });

  /**
   * Mobile search form
   */
  var $mobileForm = $(".mobile-search-form");

  $(".js__toggle-mobile-search").on("click", function (e) {
    e.preventDefault();
    $mobileForm.slideToggle("350").find("input").focus();
  });

  /*______ Lazy Load ______*/

  $(".lazy").lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    effectTime: 1000,
    threshold: 0,
    visibleOnly: true,
    placeholder: "../img/ajax-loader.gif",
    onError: function (element) {
      console.log("error loading " + element.data("src"));
    },
  });

  /**
   * Input tel mask
   */

  $(".js__input-mask")
    .mask("+7 999 999-99-99", { clearIfNotMatch: true })
    .focus(function (e) {
      if (!$(this).val()) {
        $(this).val("+7 ");
      }
    });

  /**
   * Svg4everybody
   */

  svg4everybody();

  /**
   * Youtube
   */

  if ($(".youtube").length) {
    const $youtube = $(".youtube"),
      source =
        "https://img.youtube.com/vi/" + $youtube.data("embed") + "/0.jpg",
      image = new Image();

    image.src = source;
    image.addEventListener("load", function () {
      $youtube.append(image);
    });

    $youtube.on("click", function (e) {
      e.preventDefault();
      const iframe = $("<iframe>", {
        frameborder: 0,
        allowfullscreen: "",
        autoplay: true,
        src:
          "https://www.youtube.com/embed/" +
          $youtube.data("embed") +
          "?rel=0&showinfo=0&autoplay=1",
      });
      $youtube.find(".play-btn").fadeOut("350");
      $youtube.find("img").fadeOut("350");
      $youtube.append(iframe);
    });
  }
});
