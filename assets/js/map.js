$(function () {
  /*______ Яндекс карта ______*/

  if ($("div").is("#map")) {
    ymaps.ready(init);
  }

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.747368, 37.707107],
      controls: ["zoomControl"],
      zoom: 15,
    });

    function clickGoto(e) {
      e.preventDefault();
      // Переключаем checkbox

      // адрес
      var branch = $(this).data("goto");

      // получение координат по адресу - асинхронная функция
      var myGeocoder = ymaps.geocode([55.747368, 37.707107]);
      console.log(myGeocoder);
      myGeocoder.then(
        function (res) {
          coords = res.geoObjects.get(0).geometry.getCoordinates();

          // переходим по координатам
          myMap.panTo(coords, {
            flying: true,
            timingFunction: "linear",
            duration: 600,
            checkZoomRange: true,
          });
          // добавляем маркер
          var placeMark = new ymaps.Placemark(
            coords,
            {
              balloonContent: branch,
            },
            {
              iconLayout: "default#image",
              iconImageHref: "../img/pic-map.png",
              iconImageSize: [27, 32],
              iconImageOffset: [0, 0],
            }
          );
          myMap.geoObjects.add(placeMark);
        },
        function (err) {
          alert("Ошибка");
        }
      );
      return false;
    }

    //$(".js__goto-map").on("click", clickGoto);

    // имитируем клик по первому элементу в списке после загрузки
    // $(".js__goto-map").eq(0).click();
  }
});
