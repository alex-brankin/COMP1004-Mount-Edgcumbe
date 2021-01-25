var marker;
var map;

$("#link1").click(function(){
    changeMarkerPos(50.35879276901441, -4.1739994533533835, "Italian Garden");
});
$("#link2").click(function(){
    changeMarkerPos(50.35848950741839, -4.173042434902041, "Jubilee Garden");
});
$("#link3").click(function(){
    changeMarkerPos(50.35846620630107, -4.172423280676866, "Black Bee Apiary");
});
$("#link4").click(function(){
    changeMarkerPos(50.35806564722406, -4.173026782141605, "French Garden");
});
$("#link5").click(function(){
    changeMarkerPos(50.35806231846413, -4.173031999733244, "Relic Garden");
});
$("#link6").click(function(){
    changeMarkerPos(50.35414765400579, -4.177795081111555, "Barrow Centre");
});
$("#link7").click(function(){
    changeMarkerPos(50.353975018082714, -4.177327422848704, "Batcam");
});
$("#link8").click(function(){
    changeMarkerPos(50.354057426273826, -4.1771801313082, "Fire Auxiliary");
});
$("#link9").click(function(){
    changeMarkerPos(50.354152039873284, -4.176681670906405, "Deer Garden");
});
$("#link10").click(function(){
    changeMarkerPos(50.354451402401494, -4.176344524286516, "Knot Garden");
});
$("#link11").click(function(){
    changeMarkerPos(50.353995545875, -4.175993397734345,"Cedar Seat");
});
$("#link12").click(function(){
    changeMarkerPos(50.35349450543283, -4.175911612803776,"Shell Seat");
});


function initialize() {
    var styles = [{
        stylers: [{
            saturation: 0
        }]
    }];
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });
    var mapProp = {
        center: new google.maps.LatLng(3.165659, 101.611416),
        zoom: 19,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        overviewMapControl: false,
        rotateControl: true,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), mapProp);

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.35443, -4.17588),
        animation: google.maps.Animation.DROP,
        label: { text: "Mount Edgcumbe House & Country Park", color: "white"},
    });
    
    marker.setMap(map);
    map.panTo(marker.position);
    map.setTilt(45);
}

function changeMarkerPos(lat, lon, lab){
    myLatLng = new google.maps.LatLng(lat, lon)
    marker.setPosition(myLatLng);
    map.panTo(myLatLng);
    marker.setLabel({text: lab, color: "white"});
}

google.maps.event.addDomListener(window, 'load', initialize);