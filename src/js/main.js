

var map;
var login = document.getElementById('log-in');
var front = document.querySelector('.user-front');
var back = document.querySelector('.user-login');
var humburger = document.getElementById('navigation__humburger');
var dropDownMenu = document.querySelector(".menu");
var dropDownMenuLeft = document.querySelector(".drop-left");
var dropDownMenuRight = document.querySelector(".drop-right");


// hamburgerMenu
if(login) {
    login.addEventListener('click', function () {
        front.style.cssText = 'transform: rotateY(180deg) translate(50%,-50%); \
        backface-visibility: hidden; \
        transition: 1s; ';
        back.style.cssText = 'transform: translate(-50%, -50%);  ';
        login.style.display = 'none';
    });
}else {
    humburger.addEventListener('click', () => {
        if (humburger.classList.contains('navigation__humburger_active')) {
            humburger.classList.remove('navigation__humburger_active');
            dropDownMenu.classList.remove("menu_active");
            dropDownMenuLeft.classList.remove("drop-left_active");
            dropDownMenuRight.classList.remove("drop-right_active");
        } else {
            humburger.classList.add('navigation__humburger_active');
            dropDownMenu.classList.add("menu_active");
            dropDownMenuLeft.classList.add("drop-left_active");
            dropDownMenuRight.classList.add("drop-right_active");
        }
    });
}



//Google-map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.690372, lng: 39.252002},
        zoom: 14,
        styles:[
            {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#737373"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "97"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "simplified"
                    },
                    {
                        "lightness": "81"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "100"
                    },
                    {
                        "lightness": "100"
                    },
                    {
                        "gamma": "10.00"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "100"
                    },
                    {
                        "lightness": "100"
                    },
                    {
                        "gamma": "10.00"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "100"
                    },
                    {
                        "lightness": "100"
                    },
                    {
                        "gamma": "10.00"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-70"
                    },
                    {
                        "lightness": "43"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#39d2ca"
                    }
                ]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: {lat: 51.697354, lng: 39.269249},
        map: map,
        title: 'Евгений',
        icon: '../images/icons/map_marker.svg'
    });

}



