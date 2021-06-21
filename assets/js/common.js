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
});
