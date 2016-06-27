function initMap() 
{
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 54.25800, lng: -5.94182},
        zoom: 12
    });
} 