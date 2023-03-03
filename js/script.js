ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [52.26900257189596,104.33005849999994],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        });
        let placemark = new ymaps.Placemark([52.26900257189596,104.33005849999994], {
            balloonContentHeader: 'Вектор',
            balloonContentBody: 'Копицентр',
            balloonContentFooter: '9:00 - 20:00',
        }, {});
        myMap.geoObjects.add(placemark);


        myMap.controls.remove('geolocationControl'); // удаляем геолокацию
        myMap.controls.remove('searchControl'); // удаляем поиск
        myMap.controls.remove('trafficControl'); // удаляем контроль трафика
        myMap.controls.remove('typeSelector'); // удаляем тип
        myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
        myMap.controls.remove('rulerControl'); // удаляем контрол правил
        myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
        
}
    