var marker;
var map;

$("#link1").click(function(){
    changeMarkerPos(50.35879276901441, -4.1739994533533835, "Italian Garden");
    document.getElementById('locationText').innerHTML = "Enter the Italian Garden where the Friends have sponsored the bedding and the orange trees and funded the repairs to the statues on the Belvedere.";
    document.getElementById('pic1').src = "img/italian gardens/pic1.jpeg";
    document.getElementById('pic2').src = "img/italian gardens/pic2.jpeg";
    document.getElementById('pic3').src = "img/italian gardens/pic3.jpeg";
});
$("#link2").click(function(){
    changeMarkerPos(50.35848950741839, -4.173042434902041, "Jubilee Garden");
    document.getElementById('locationText').innerHTML = "Pass in front of the Orangery and on reaching the grass, cut across to enter the Golden Jubilee Garden with its sound sculpture";
    document.getElementById('pic1').src = "img/jubilee gardens/pic1.jpeg";
    document.getElementById('pic2').src = "img/jubilee gardens/pic2.jpeg";
    document.getElementById('pic3').src = "img/jubilee gardens/pic3.jpeg";
});
$("#link3").click(function(){
    changeMarkerPos(50.35846620630107, -4.172423280676866, "Black Bee Apiary");
    document.getElementById('locationText').innerHTML = "Detour to the left to view the Black Bee apiary and then retrace your steps to continue through the Silver Jubilee Garden.";
    document.getElementById('pic1').src = "img/black bee apiary/pic1.jpeg";
    document.getElementById('pic2').src = "img/black bee apiary/pic2.jpeg";
    document.getElementById('pic3').src = "img/black bee apiary/pic3.jpeg";
});
$("#link4").click(function(){
    changeMarkerPos(50.35806564722406, -4.173026782141605, "French Garden");
    document.getElementById('locationText').innerHTML = "Turn left around the French conservatory into the French Garden where the Friends have sponsored the bedding and repaired both the fountain and the conservatory.";
    document.getElementById('pic1').src = "img/french gardens/pic1.jpeg";
    document.getElementById('pic2').src = "img/french gardens/pic2.jpeg";
    document.getElementById('pic3').src = "img/french gardens/pic3.jpeg";
});
$("#link5").click(function(){
    changeMarkerPos(50.35806231846413, -4.173031999733244, "Relic Garden");
    document.getElementById('locationText').innerHTML = "At the far end of the French Garden turn right and right again into the Relic Garden which was totally funded by the Friends.";
    document.getElementById('pic1').src = "img/relic gardens/pic1.jpeg";
    document.getElementById('pic2').src = "img/relic gardens/pic2.jpeg";
    document.getElementById('pic3').src = "img/relic gardens/pic3.jpeg";
});
$("#link6").click(function(){
    changeMarkerPos(50.35414765400579, -4.177795081111555, "Barrow Centre");
    document.getElementById('locationText').innerHTML = "After leaving the Relic Garden, turn left and left again to leave the formal gardens. The Barrow Centre was developed with help from the Friends and now houses retail outlets and The Farriers for food and drink.";
    document.getElementById('pic1').src = "img/barrow centre/pic1.jpeg";
    document.getElementById('pic2').src = "img/barrow centre/pic2.jpeg";
    document.getElementById('pic3').src = "img/barrow centre/pic3.jpeg";
});
$("#link7").click(function(){
    changeMarkerPos(50.353975018082714, -4.177327422848704, "Batcam");
    document.getElementById('locationText').innerHTML = "Take a look at the Batcam which was funded by the Friends";
    document.getElementById('pic1').src = "img/batcam/pic1.jpeg";
    document.getElementById('pic2').src = "img/batcam/pic2.jpeg";
    document.getElementById('pic3').src = "img/batcam/pic3.jpeg";
});
$("#link8").click(function(){
    changeMarkerPos(50.354057426273826, -4.1771801313082, "Fire Auxiliary");
    document.getElementById('locationText').innerHTML = "Don't forget to visit the Fire Auxiliary and the assorted memorabilia from old fire stations.";
    document.getElementById('pic1').src = "img/fire auxiliary/pic1.jpeg";
    document.getElementById('pic2').src = "img/fire auxiliary/pic2.jpeg";
    document.getElementById('pic3').src = "img/fire auxiliary/pic3.jpeg";
});
$("#link9").click(function(){
    changeMarkerPos(50.354152039873284, -4.176681670906405, "Deer Garden");
    document.getElementById('locationText').innerHTML = "When you have finished wandering around the Barrow Centre, leave in the direction of the house, passing the Deer Garden on your way.";
    document.getElementById('pic1').src = "img/deer gardens/pic1.jpeg";
    document.getElementById('pic2').src = "img/deer gardens/pic2.jpeg";
    document.getElementById('pic3').src = "img/deer gardens/pic3.jpeg";
});
$("#link10").click(function(){
    changeMarkerPos(50.354451402401494, -4.176344524286516, "Knot Garden");
    document.getElementById('locationText').innerHTML = "Passing through the arch, turn right towards the house, through the Knot Garden";
    document.getElementById('pic1').src = "img/knot gardens/pic1.jpeg";
    document.getElementById('pic2').src = "img/knot gardens/pic2.jpeg";
    document.getElementById('pic3').src = "img/knot gardens/pic3.jpeg";
});
$("#link11").click(function(){
    changeMarkerPos(50.353995545875, -4.175993397734345,"Cedar Seat");
    document.getElementById('locationText').innerHTML = "If the house is open, visit the Earl’s Garden and look at the Cedar Seat";
    document.getElementById('pic1').src = "img/cedar seat/pic1.jpeg";
    document.getElementById('pic2').src = "img/cedar seat/pic2.jpeg";
    document.getElementById('pic3').src = "img/cedar seat/pic3.jpeg";
});
$("#link12").click(function(){
    changeMarkerPos(50.35349450543283, -4.175911612803776,"Shell Seat");
    document.getElementById('locationText').innerHTML = "Nearby is the Shell Seat which is said to be decorated with shells donated by Captain Cook";
    document.getElementById('pic1').src = "img/shell seat/pic1.jpeg";
    document.getElementById('pic2').src = "img/shell seat/pic2.jpeg";
    document.getElementById('pic3').src = "img/shell seat/pic3.jpeg";
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
        rotateControl: false,
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
    GetGreeting();
}

function changeMarkerPos(lat, lon, lab){
    myLatLng = new google.maps.LatLng(lat, lon)
    marker.setPosition(myLatLng);
    map.panTo(myLatLng);
    marker.setLabel({text: lab, color: "white"});
}
function GetGreeting() {
    var d = new Date();
    var nhour = d.getHours();
    if ((nhour<12) && (nhour<18)) greetingText="morning";
    if ((nhour<8) || (nhour>20)) {parkStatus="now closed";} else {parkStatus="open for you to visit";} 
    if ((nhour>=12) && (nhour<18)) greetingText="afternoon";
    if (nhour>=18) greetingText="evening";
    document.getElementById('greeting').innerHTML = "Good " + greetingText + "! Welcome to the Friends of Edgcumbe Virtual Tour. The park is " + parkStatus;
}
function GetClock() {
    var d = new Date();
    var nhour = d.getHours(), nmin = d.getMinutes(), nsec = d.getSeconds();
    if (nmin <= 9) nmin = "0" + nmin;
    if (nsec <= 9) nsec = "0" + nsec;

    var clocktext = "" + nhour + ":" + nmin + ":" + nsec + "";
    document.getElementById('clockbox').innerHTML = clocktext;
}


google.maps.event.addDomListener(window, 'load', initialize);