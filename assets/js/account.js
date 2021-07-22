$(function () {
  $(".js__edit-form").on("click", function (e) {
    e.preventDefault();

    $(this)
      .parents(".address-list__item")
      .find(".address-list__edit-form")
      .stop(true, true)
      .slideToggle("350");
  });

  $(".js__toggle-account-order-list").on("click", function (e) {
    e.preventDefault();

    $(this)
      .toggleClass("open")
      .parents(".account-order-list__item")
      .find(".account-order-list__orders")
      .stop(true, true)
      .slideToggle("350");
  });
});
