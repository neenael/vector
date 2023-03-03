ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [52.26900257189596,104.33005849999994],
            zoom: 17
        });
        let placemark = new ymaps.Placemark([52.26900257189596,104.33005849999994], {
            balloonContentHeader: 'Вектор',
            balloonContentBody: 'Копицентр',
            balloonContentFooter: '9:00 - 20:00',
        }, {});
        myMap.geoObjects.add(placemark);


        myMap.controls.remove('geolocationControl'); 
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl'); 
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('rulerControl');
        myMap.behaviors.disable(['scrollZoom']);
}
