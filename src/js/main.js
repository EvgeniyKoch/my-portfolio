var map;
var login = document.getElementById('log-in');
var front = document.querySelector('.user-front');
var back = document.querySelector('.user-login');
var humburger = document.getElementById('navigation__humburger');
var dropDownMenu = document.querySelector('.menu');
var dropDownMenuLeft = document.querySelector('.drop-left');
var dropDownMenuRight = document.querySelector('.drop-right');
var $window = $(window);




//SideBar
var $item = document.getElementsByClassName('saidbar__item'),
    activeItem = 'saidbar__item-active';

for (var i = 0; i < $item.length; i++) {
    $item[i].addEventListener('click', function() {
        if(!(this.classList.contains(activeItem))) {
            for (var j = 0; j < $item.length; j++) {
                $item[j].classList.remove(activeItem);
                this.classList.add(activeItem);
            }
        } else {
            this.classList.remove(activeItem);
        }
    })
}



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
            dropDownMenu.classList.remove('menu_active');
            dropDownMenuLeft.classList.remove('drop-left_active');
            dropDownMenuRight.classList.remove('drop-right_active');
        } else {
            humburger.classList.add('navigation__humburger_active');
            dropDownMenu.classList.add('menu_active');
            dropDownMenuLeft.classList.add('drop-left_active');
            dropDownMenuRight.classList.add('drop-right_active');
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



//Parallax
var parallaxContainer = document.getElementById('parallax');
var layers = parallaxContainer.children;

var moveLayers = function (e) {
    var initialX = (window.innerWidth / 2) - e.pageX;
    var initialY = (window.innerHeight / 2) - e.pageY;

    [].slice.call(layers).forEach(function(layer, index) {
        var
            divider = index / 40,
            positionX = initialX * divider,
            positionY = initialY * divider,
            bottomPosition = (window.innerHeight / 2) * divider,
            transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
            image = layer.firstElementChild;

        layer.style.transform = transformString;
        image.style.bottom = '-' + bottomPosition + 'px';

    });

};

window.addEventListener('mousemove', moveLayers);

//Parallax Scrolling
$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // создаем объект
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент
            // Присваиваем значение background-position
            var coords = 'center '+ yPos + 'px';
            // Создаем эффект Parallax Scrolling
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});


// Carousel

    var slides = [
        {
            title: 'Сайт школы онлайн образования',
            image: 'slide-1.jpg',
            description: 'Описание проекта',
            tags: ['js', 'pug']
        },
        {
            title: 'Название проекта',
            image: 'slide-2.jpg',
            description: 'Описание проекта',
            tags: ['js', 'pug']
        },
        {
            title: 'Название проекта 2',
            image: 'slide-3.jpg',
            description: 'Описание проекта',
            tags: ['js', 'pug']
        },
        {
            title: 'Название проекта 3',
            image: 'slide-4.jpg',
            description: 'Описание проекта',
            tags: ['js', 'pug']
        },
    ];

    var slider = document.querySelector('.js-slider'),
        mainSlide = slider.querySelector('.js-main-slide'),
        upSlide = slider.querySelector('.js-scroll-up'),
        downSlide = slider.querySelector('.js-scroll-down'),
        description = slider.querySelector('.js-description'),
        currentSlide = 0,
        slideLength = slides.length;


    upSlide.addEventListener('click', function (e) {
        currentSlide = slideLimiter(currentSlide - 1);
        fillSlider();
    });
    downSlide.addEventListener('click', function (e) {
        currentSlide = slideLimiter(currentSlide + 1);
        fillSlider();
    });


    function fillSlider() {

        var prev = slideLimiter(currentSlide - 1),
            next = slideLimiter(currentSlide + 1);

        mainSlide.innerText = slides[currentSlide].title;
        upSlide.innerText = slides[prev].title;
        downSlide.innerText = slides[next].title;
        description.innerText = slides[currentSlide].description;

    }

    function slideLimiter(value) {
        if (value >= slideLength) {
            return 0;
        } else if (value < 0) {
            return slideLength - 1;
        } else {
            return value;
        }


// img = document.createElement('img');
// img.setAttribute('src', slides[0].image);
// mainSlide.appendChild(img);
}
