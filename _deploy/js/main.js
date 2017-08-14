// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Unveil on scroll
$(document).ready(function() {
  $("img").unveil();
});

/* google maps */
function initialize(){
    var styles = [
        {
            stylers: [
                { hue: "#00ffe6" },
                { saturation: -20 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
              { lightness: 100 },
              { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
        }
    ];

    var myLatlng = new google.maps.LatLng(49.14186, -122.86753);

    var mapOptions = {
        center: myLatlng,
        styles: styles,
        zoom: 12,
        scrollwheel: false,
        draggable: false
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
     var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Pippal Labs</h1>'+
      '<div id="bodyContent">'+
      '<p>12827 76 Ave - Unit 107<br>Surrey, BC V3W 2V3.<br><span class="glyphicon glyphicon-earphone"></span> <a href="tel:+17788874644">778-887-4644</a><br><span class="glyphicon glyphicon-envelope"></span> <a href="mail:info@pippallabs.com">info@pippallabs.com</a></p>'+
      '</div>'+
      '</div>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "We are here!",
        icon: '/img/icons/map-marker.png'
    });
    google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map,marker);
    });

    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
/* end google maps */
