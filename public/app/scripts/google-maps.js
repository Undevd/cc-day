function initMap() 
{
    var castlewellan = {lat: 54.260675, lng: -5.952141};

    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: castlewellan,
        zoom: 15
    });

    var marker = new google.maps.Marker({
        position: castlewellan,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Life Adventure Centre'
    });
} 