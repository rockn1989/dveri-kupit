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
      width: $(el).data("width"),
      allowClear: true,
      minimumResultsForSearch: -1,
      dropdownPosition: "below",
    });
  });

  /**
   * UI Slider
   */

  $("#ui-slider").slider({
    range: true,
    min: 0,
    max: 60000,
    step: 1,
    values: [0, 14700],
    create: function (event, ui) {
      var val = $("#ui-slider").slider("values");
      var min = $("#ui-slider").slider("option", "min");
      var max = $("#ui-slider").slider("option", "max");
      var maxPricePosition = $(".ui-slider-handle").eq(1).css("left");
      $(".ui-slider-max").css("left", maxPricePosition);

      $(".ui-slider-current-value span").html(val[1]);

      /*       $(".ui-slider-min").html(min);
      $(".ui-slider-max").html(max); */

      $(".ui-slider-box .price-input-min").val(val[0]);
      $(".ui-slider-box .price-input-max").val(val[1]);

      $(".js__ui-slider").on("change keyup", function (e) {
        var inputValue = parseInt($(this).val(), 10);

        var minValue = 0;
        var maxValue = 0;

        if ($(this).hasClass("price-input-min")) {
          minValue = parseInt($(this).val(), 10);
          $("#ui-slider").slider("values", 0, minValue);
        }

        if ($(this).hasClass("price-input-max")) {
          maxValue = parseInt($(this).val(), 10);
          $("#ui-slider").slider("values", 1, maxValue);
        }

        if (inputValue > max) {
          $(".ui-slider-box .price-input-max").val(max);
          $("#ui-slider").slider("value", inputValue);
        } else if (inputValue < min) {
          $(".ui-slider-box .price-input-min").val(min);
          $("#ui-slider").slider("value", inputValue);
        }
      });
    },
    slide: function (event, ui) {
      var maxPricePosition = $(".ui-slider-handle").eq(1).css("left");
      $(".ui-slider-max").css("left", maxPricePosition);
      $(".ui-slider-box .price-input-min").val(ui.values[0]);
      $(".ui-slider-box .price-input-max").val(ui.values[1]);
    },
  });

  $("#ui-slider").draggable();

  /**
   * Toggle catalog filter
   */

  $(".filter-form__toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".filter-form__body").slideToggle();
  });

  /**
   * Toggle account menu
   */

  $(".account-menu__toggle-btn").on("click", function (e) {
    e.preventDefault();

    $(this).toggleClass("open");
    $(".account-menu").stop(true, true).slideToggle();
  });
});
