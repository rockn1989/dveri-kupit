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
});
