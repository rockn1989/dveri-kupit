$(function () {
  /**
   * Sort grid
   */

  $(".sort-grid").on("click", "a", function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings("a").removeClass("active");

    if ($(this).hasClass("js__list-view")) {
      $(".catalog-body__list").removeClass("grid-view").addClass("list-view");
    } else {
      $(".catalog-body__list").removeClass("list-view").addClass("grid-view");
    }
  });

  /**
   * Custom select
   */

  $.each($(".js__custom-select"), function (i, el) {
    $(el).select2({
      placeholder: $(el).data("placeholder"),
      theme: $(el).data("theme"),
      allowClear: true,
      minimumResultsForSearch: -1,
      dropdownPosition: "below",
      width: "auto",
    });
  });
});
