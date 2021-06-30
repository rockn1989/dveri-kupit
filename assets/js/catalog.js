$(function () {
  /**
   * Sort grid
   */

  $(".sort-grid").on("click", "a", function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings("a").removeClass("active");

    if ($(this).hasClass("js__list-view")) {
      $(".catalog-body__list").removeClass("grid-view").addClass("list-view");
      updateData("h");
    } else {
      $(".catalog-body__list").removeClass("list-view").addClass("grid-view");
      updateData();
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

  /**
   * Upload cards
   */

  function updateData(type) {
    return $.ajax({
      method: "GET",
      url: "https://60db68d9801dcb001729112c.mockapi.io/cards-h?id=50",
      beforeSend: function () {
        $(".catalog-body__list").css("opacity", "0.3").html("");
      },
    })
      .done(function (data) {
        console.log(data);
        createCards(data, ".catalog-body__list", type, function () {
          $(".catalog-body__list").css("opacity", "1");
        });
      })
      .fail(function () {
        console.log("error");
      });
  }

  function createCardH({ image, title, settings }) {
    return `<div class="card-horizontal">
							<div class="card-horizontal__inner">
								<div class="uk-grid">
									<div class="uk-width-1-4@m">
										<div class="card-horizontal__img" uk-lightbox>
											<a href="${image}" class="card-horizontal__img-frontface">
												<picture>
													<img src="${image}" alt="">
												</picture>
											</a>
											<a href="${image}" class="card-horizontal__img-backface">
												<picture>
													<img src="${image}" alt="">
												</picture>
											</a>
										</div>
									</div>
									<div class="uk-width-expand">
										<div class="card-horizontal__desc">
											<div class="card-horizontal__title title-h3">${title}</div>
											<div class="card-horizontal__table">
												<table>
													<tr>
														<td>${settings.size}</td>
														<td>${settings.weight}</td>
													</tr>
												</table>
											</div>
										</div>
									</div>
									<div class="uk-width-1-4@m">
										<div class="card-horizontal__info">

											<div class="add-favorite">
												<a href="" class="icon-fav" uk-tooltip="title: Добавить в избранное; pos: right"></a>
												<a href="" class="icon-fav-fill uk-hidden"></a>
											</div>
											<div class="card-horizontal__count">
												<div class="green">Остаток на складе — 122 шт.</div>
											</div>
											<div class="small-title">Цена за штуку</div>
											<div class="card-horizontal__price">
												<div class="card-horizontal__price-old">1 290 р.</div>
												<div class="card-horizontal__price-current">от 990 Р.</div>
											</div>

											<div class="card-horizontal__stocks">
												<span>Скидка 20%</span>
											</div>
											<a href="" class="btn">Узнать больше</a>
											<a href="" class="fast-buy">Купить в один клик</a>
										</div>
									</div>
								</div>
							</div>
						</div>`;
  }

  function createCardV({
    image,
    title,
    colors,
    settings,
    oldPrice,
    currentPrice,
  }) {
    return `<div class="card">
							<div class="card__inner">
								<div class="card__header">
									<a href="">
										<picture class="card__img">
											<img src="${image}" alt="${title}">
										</picture>
									</a>

									<div class="stocks"></div>
									<div class="add-favorite">
										<a href="" class="icon-fav" uk-tooltip="title: Добавить в избранное; pos: right"></a>
										<a href="" class="icon-fav-fill uk-hidden"></a>
									</div>

									<div class="colors-list">
										
											<label for="1" class="color-checkbox" uk-tooltip="title: ${colors}; pos: right">
												<input id="1" type="checkbox" value="${colors}">
												<span class="custom-checkbox" style="background-color: ${colors}"></span>
											</label>
										
										<a href="" class="round-plus icon-plus" uk-tooltip="title: Более 20 цветов; pos: right"></a>
									</div>

									<ul class="card__settings">
										<li>Стандарт ${settings.size}</li>
										<li>Со сменными панелями ${settings.weight}</li>
									</ul>
								</div>

								<div class="card__body">
									<div class="card__title">
										<a href="">${title}</a>
									</div>
									<div class="card__desc">
										<div class="card__price">
											<div class="card__price-old">${oldPrice ? oldPrice : null}</div>
											<div class="card__price-current">${currentPrice}</div>
										</div>
										<div class="card__stocks">Скидка 20%</div>
									</div>
								</div>
							</div>
						</div>`;
  }

  function createCards(array, target, type, callback) {
    console.log("start");
    const result = [];

    if (type === "h") {
      array.forEach((obj) => {
        result.push(createCardH(obj));
      });
    } else {
      array.forEach((obj) => {
        result.push(createCardV(obj));
      });
    }
    console.log($(target));
    $(target).append(result);

    callback();
    console.log("end");
  }
});
