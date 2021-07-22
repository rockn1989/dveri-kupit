$(function () {
  $(".js__edit-form").on("click", function (e) {
    e.preventDefault();

    $(this)
      .parents(".address-list__item")
      .find(".address-list__edit-form")
      .stop(true, true)
      .slideToggle("350");
  });
});
