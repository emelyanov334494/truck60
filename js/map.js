/**
 * Created by homepc on 19.02.2017.
 */
var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
    content: ''
});

// Our markers
markers1 = [
    ['0', 'Псков', 57.819365, 28.331786, 'Псков','Псков'],
    ['1', 'Санкт-Петербург', 59.939095, 30.315868, 'Санкт-Петербург','Санкт-Петербург'],
    ['2', 'Новоржев', 57.028692, 29.338079, 'Новоржев','Новоржев'],
    ['3', 'Самара', 53.195538, 50.101783, 'Самара', 'Самара'],
    ['3', 'Верхняя Пышма', 56.975804, 60.564955, 'Верхняя Пышма', 'Верхняя Пышма'],
    ['3', 'Екатеринбург', 56.838607, 60.605514, 'Екатеринбург', 'Екатеринбург'],
    ['3', 'Новосибирск', 55.030199, 82.920430, 'Новосибирск', 'Новосибирск'],
    ['3', 'Тверь', 56.859611, 35.911896, 'Тверь', 'Тверь'],
    ['3', 'Тула', 54.193033, 37.617752, 'Тула', 'Тула'],
    ['3', 'Владимир', 56.129042, 40.407030, 'Владимир', 'Владимир'],
    ['3', 'Воронеж', 51.661535, 39.200287, 'Воронеж', 'Воронеж'],
    ['3', 'Саратов', 51.533103, 46.034158, 'Саратов', 'Саратов'],
    ['3', 'Краснодар', 45.057626, 38.992615, 'Краснодар', 'Краснодар'],
    ['3', 'Ростов-на-Дону', 47.222513, 39.718669, 'Ростов-на-Дону', 'Ростов-на-Дону'],
    ['3', 'Тольятти', 53.508816, 49.419207, 'Тольятти', 'Тольятти'],
    ['3', 'Ульяновск', 54.312416, 48.395622, 'Ульяновск', 'Ульяновск'],
    ['3', 'Вологда', 59.220473, 39.891559, 'Вологда', 'Вологда'],
    ['3', 'Кострома', 57.767961, 40.926858, 'Кострома', 'Кострома'],
    ['3', 'Казань', 55.798551, 49.106324, 'Казань', 'Казань']
];

/**
 * Function to init map
 */

function initialize() {
    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(55.010374, 65.229398),
        
        styles:[{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}],
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}

/**
 * Function to add marker to map
 */

function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];
    var label = marker[5];

    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map,
        icon: {
                    url: 'http://truck60.ru/media/images/map-42871_1280.png',
                  labelOrigin: new google.maps.Point(5, 30)
                },
        label: {
          color: 'black',
          fontWeight: 'bold',
          fontSize: '16px',
          text: label
    }});

    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(15);
        }
    })(marker1, content));
}

/**
 * Function to filter markers by category
 */

filterMarkers = function (category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
        }
        // Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
}

// Init map
initialize();