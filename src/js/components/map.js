function init() {
  const center = [45.046051037129175,39.037205310809405];
  const setigng = {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map.png',
    iconImageSize: [48, 51],
    // iconImageOffset: [-10, -10],
    iconImageOffset: [-24, -46],
  }
  // const artyushkova = [45.063325811745756,39.01262873966631];
  const yearsOfVictory = [45.056548054720395,39.02840348143518];
  const petraMetalnikova = [45.09345539178193,39.010349471853985];
  const admiralSerebryakov = [45.091257909839946,39.03702135829808];
  // const gidrostroy = [45.00299563123815,39.085760476286374];
	const map = new ymaps.Map('map', {
		center: center,
		zoom: 11
	});

  // const myPlacemark1 = new ymaps.Placemark(artyushkova, {}, setigng);
  const myPlacemark2 = new ymaps.Placemark(yearsOfVictory, {}, setigng);
  const myPlacemark3 = new ymaps.Placemark(petraMetalnikova, {}, setigng);
  const myPlacemark4 = new ymaps.Placemark(admiralSerebryakov, {}, setigng);
  // const myPlacemark5 = new ymaps.Placemark(gidrostroy, {}, setigng);

  // map.geoObjects.add(myPlacemark1);
  map.geoObjects.add(myPlacemark2);
  map.geoObjects.add(myPlacemark3);
  map.geoObjects.add(myPlacemark4);
  // map.geoObjects.add(myPlacemark5);

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl'); // удаляем контрол правил
}

ymaps.ready(init);
