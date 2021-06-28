$(function () {
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
