var map;
var login = document.getElementById('log-in');
var front = document.querySelector('.user-front');
var back = document.querySelector('.user-login');
var humburger = document.getElementById('navigation__humburger');
var dropDownMenu = document.querySelector('.menu');
var dropDownMenuLeft = document.querySelector('.drop-left');
var dropDownMenuRight = document.querySelector('.drop-right');
var $window = $(window);




// SCROLL
$(".arrow-scroll , .arrow-scroll_up, .saidbar__link").on("click", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').stop().animate({scrollTop: top}, 1000);
});

//mobile
if(document.querySelector('.welcome-page')) {
        $(document).ready(function () {
            if ($(window).resize().width() < '768') {
                $('.welcome-page').addClass('welcome-page-tablets')
                $('#parallax, .parallax__layer').css('display', 'none');

            }
        });
}


//Preload
if(document.querySelector('#page-preload')) {
    (function () {
        let
            imagesAll = document.images,
            imagesTotalCount = imagesAll.length,
            imagesLoadCount = 0,
            preload = document.getElementById('page-preload'),
            percDisplay = document.getElementById('load-perc'),
            content = document.getElementById('welcome-page');


        for (let i = 0; i < imagesTotalCount; i++) {
            let imgClone = new Image();
            imgClone.onload = imgLoaded;
            imgClone.onerror = imgLoaded;
            imgClone.src = imagesAll[i].src;
        }


        function imgLoaded() {
            imagesLoadCount++;
            percDisplay.innerHTML = (( (100 / imagesTotalCount) * imagesLoadCount) << 0);
            if (((100 / imagesTotalCount) * imagesLoadCount) >= 100) {
                percDisplay.innerHTML = '100';
            }
            if (imagesLoadCount >= imagesTotalCount) {
                setTimeout(function () {
                    if (!preload.classList.contains('done')) {
                        preload.classList.add('page-preload_done');
                        content.classList.add('welcome-page_show')
                    }
                }, 500)
            }
        }

        imgLoaded();

    })();
}

if(document.querySelector('.saidbar__item')){
    // SideBar
    $(document).ready(function () {
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
        };

    });

}




// hamburgerMenu
if(login ) {
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
if(document.querySelector('#map')){
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
}


//Parallax
if(document.querySelector('.welcome-page')) {
    if ($(window).resize().width() > '768') {
        var parallaxContainer = document.getElementById('parallax');
        var layers = parallaxContainer.children;

        var moveLayers = function (e) {
            var initialX = (window.innerWidth / 2) - e.pageX;
            var initialY = (window.innerHeight / 2) - e.pageY;

            [].slice.call(layers).forEach(function (layer, index) {
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

        $(document).ready(function () {

            if ($(window).width() <= '768') {
                $('#parallax').css('display', 'none');
                $('.welcome-page').addClass('welcome-page-tablets')
            }

        });


    }
}
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




//Slider
if(document.querySelectorAll('.works__slider')){
    (function () {
        const
            slider = {
                previousLink: document.getElementById('previous'),
                nextLink: document.getElementById('next'),
                slidesMain: document.getElementsByClassName('carousel-main__slide'),
                slidesMainActive: document.querySelector('.carousel-main__slide.active'),
                slidesPrevious: document.getElementsByClassName('carousel-slides__slide-previous'),
                slidesNext: document.getElementsByClassName('carousel-slides__slide-next'),
                slideNextActive: document.querySelector('.carousel-slides__slide-next.active'),
                slideNextNActive: document.querySelector('.carousel-slides__slide-next.next-active'),
                slidePreviousActive: document.querySelector('.carousel-slides__slide-previous.active'),
                slidePreviousNActive: document.querySelector('.carousel-slides__slide-previous.next-active'),
                slidesInfo: document.getElementsByClassName('slider-info__item'),
                slideInfoActive: document.querySelector('.slider-info__item.active'),
                slidePreviousOldActive: document.querySelector('.carousel-slides__slide-previous.old-active'),
                slideNextOldActive: document.querySelector('.carousel-slides__slide-next.old-active')
            };

        function nextLinkListener() {
            slider.nextLink.addEventListener('click',function (e) {

                if(slider.slideInfoActive.nextElementSibling){
                    slider.slideInfoActive.classList.remove('active');
                    slider.slideInfoActive.nextElementSibling.classList.add('active');
                    slider.slideInfoActive = document.querySelector('.slider-info__item.active');
                }
                else{
                    slider.slideInfoActive.classList.remove('active');
                    slider.slidesInfo[0].classList.add('active');
                    slider.slideInfoActive = document.querySelector('.slider-info__item.active');
                }

                if(slider.slideNextActive.nextElementSibling){
                    slider.slideNextActive.nextElementSibling.classList.add('active');
                    slider.slideNextActive.classList.remove('active');
                    slider.slideNextActive = document.querySelector('.carousel-slides__slide-next.active');
                }
                else{
                    slider.slidesNext[0].classList.add('active');
                    slider.slideNextActive.classList.remove('active');
                    slider.slideNextActive = document.querySelector('.carousel-slides__slide-next.active');
                }

                if(slider.slidesMainActive.nextElementSibling){
                    slider.slidesMainActive.classList.remove('active');
                    slider.slidesMainActive.nextElementSibling.classList.add('active');
                    slider.slidesMainActive = document.querySelector('.carousel-main__slide.active');
                }
                else{
                    slider.slidesMainActive.classList.remove('active');
                    slider.slidesMain[0].classList.add('active');
                    slider.slidesMainActive = document.querySelector('.carousel-main__slide.active');
                }

                if(slider.slidePreviousActive.nextElementSibling) {
                    slider.slidePreviousActive.classList.remove('active');
                    slider.slidePreviousActive.nextElementSibling.classList.add('active');
                    slider.slidePreviousActive = document.querySelector('.carousel-slides__slide-previous.active');
                }
                else{
                    slider.slidePreviousActive.classList.remove('active');
                    slider.slidesPrevious[0].classList.add('active');
                    slider.slidePreviousActive = document.querySelector('.carousel-slides__slide-previous.active');
                }

                if(slider.slideNextNActive.nextElementSibling){
                    slider.slideNextNActive.classList.remove('next-active');
                    slider.slideNextNActive.nextElementSibling.classList.add('next-active');
                    slider.slideNextNActive = document.querySelector('.carousel-slides__slide-next.next-active');
                }
                else{
                    slider.slidesNext[0].classList.add('next-active');
                    slider.slideNextNActive.classList.remove('next-active');
                    slider.slideNextNActive = document.querySelector('.carousel-slides__slide-next.next-active');
                }

                if(slider.slideNextOldActive.nextElementSibling){
                    slider.slideNextOldActive.classList.remove('old-active');
                    slider.slideNextOldActive.nextElementSibling.classList.add('old-active');
                    slider.slideNextOldActive = document.querySelector('.carousel-slides__slide-next.old-active');
                }
                else{
                    slider.slidesNext[0].classList.add('old-active');
                    slider.slideNextOldActive.classList.remove('old-active');
                    slider.slideNextOldActive = document.querySelector('.carousel-slides__slide-next.old-active');
                }

                if(slider.slidePreviousOldActive.nextElementSibling){
                    slider.slidePreviousOldActive.classList.remove('old-active');
                    slider.slidePreviousOldActive.nextElementSibling.classList.add('old-active');
                    slider.slidePreviousOldActive = document.querySelector('.carousel-slides__slide-previous.old-active');
                }
                else{
                    slider.slidePreviousOldActive.classList.remove('old-active');
                    slider.slidesPrevious[0].classList.add('old-active');
                    slider.slidePreviousOldActive = document.querySelector('.carousel-slides__slide-previous.old-active');
                }

                if(slider.slidePreviousNActive.nextElementSibling){
                    slider.slidePreviousNActive.classList.remove('next-active');
                    slider.slidePreviousNActive.nextElementSibling.classList.add('next-active');
                    slider.slidePreviousNActive = document.querySelector('.carousel-slides__slide-previous.next-active');
                }
                else{
                    slider.slidePreviousNActive.classList.remove('next-active');
                    slider.slidesPrevious[0].classList.add('next-active');
                    slider.slidePreviousNActive = document.querySelector('.carousel-slides__slide-previous.next-active');
                }

            })
        }

        function previousLinkListener() {
            slider.previousLink.addEventListener('click',function (e) {

                var
                    slidesMainLast = slider.slidesMain[slider.slidesMain.length - 1],
                    slidesPreviousLast = slider.slidesPrevious[slider.slidesPrevious.length - 1],
                    slideInfoLast = slider.slidesInfo[slider.slidesInfo.length - 1],
                    slidesNextLast = slider.slidesNext[slider.slidesNext.length - 1];

                if(slider.slideInfoActive.previousElementSibling){
                    slider.slideInfoActive.classList.remove('active');
                    slider.slideInfoActive.previousElementSibling.classList.add('active');
                    slider.slideInfoActive = document.querySelector('.slider-info__item.active');
                }
                else{
                    slider.slideInfoActive.classList.remove('active');
                    slideInfoLast.classList.add('active');
                    slider.slideInfoActive = document.querySelector('.slider-info__item.active');
                }

                if(slider.slidePreviousActive.previousElementSibling) {
                    slider.slidePreviousActive.classList.remove('active');
                    slider.slidePreviousActive.previousElementSibling.classList.add('active');
                    slider.slidePreviousActive = document.querySelector('.carousel-slides__slide-previous.active');
                }
                else{
                    slider.slidePreviousActive.classList.remove('active');
                    slidesPreviousLast.classList.add('active');
                    slider.slidePreviousActive = document.querySelector('.carousel-slides__slide-previous.active');
                }

                if(slider.slidesMainActive.previousElementSibling){
                    slider.slidesMainActive.classList.remove('active');
                    slider.slidesMainActive.previousElementSibling.classList.add('active');
                    slider.slidesMainActive = document.querySelector('.carousel-main__slide.active');
                }
                else{
                    slider.slidesMainActive.classList.remove('active');
                    slidesMainLast.classList.add('active');
                    slider.slidesMainActive = document.querySelector('.carousel-main__slide.active');
                }

                if(slider.slideNextActive.previousElementSibling){
                    slider.slideNextActive.classList.remove('active');
                    slider.slideNextActive.previousElementSibling.classList.add('active');
                    slider.slideNextActive = document.querySelector('.carousel-slides__slide-next.active');
                }
                else{
                    slider.slideNextActive.classList.remove('active');
                    slidesNextLast.classList.add('active');
                    slider.slideNextActive = document.querySelector('.carousel-slides__slide-next.active');
                }

                if(slider.slidePreviousNActive.previousElementSibling){
                    slider.slidePreviousNActive.classList.remove('next-active');
                    slider.slidePreviousNActive.previousElementSibling.classList.add('next-active');
                    slider.slidePreviousNActive = document.querySelector('.carousel-slides__slide-previous.next-active');
                }
                else{
                    slider.slidePreviousNActive.classList.remove('next-active');
                    slidesPreviousLast.classList.add('next-active');
                    slider.slidePreviousNActive = document.querySelector('.carousel-slides__slide-previous.next-active');
                }

                if(slider.slidePreviousOldActive.previousElementSibling){
                    slider.slidePreviousOldActive.classList.remove('old-active');
                    slider.slidePreviousOldActive.previousElementSibling.classList.add('old-active');
                    slider.slidePreviousOldActive = document.querySelector('.carousel-slides__slide-previous.old-active');
                }
                else{
                    slider.slidePreviousOldActive.classList.remove('old-active');
                    slidesPreviousLast.classList.add('old-active');
                    slider.slidePreviousOldActive = document.querySelector('.carousel-slides__slide-previous.old-active');
                }

                if(slider.slideNextOldActive.previousElementSibling){
                    slider.slideNextOldActive.previousElementSibling.classList.add('old-active');
                    slider.slideNextOldActive.classList.remove('old-active');
                    slider.slideNextOldActive = document.querySelector('.carousel-slides__slide-next.old-active');
                }
                else{
                    slider.slideNextOldActive.classList.remove('old-active');
                    slidesNextLast.classList.add('old-active');
                    slider.slideNextOldActive = document.querySelector('.carousel-slides__slide-next.old-active');
                }

                if(slider.slideNextNActive.previousElementSibling){
                    slider.slideNextNActive.classList.remove('next-active');
                    slider.slideNextNActive.previousElementSibling.classList.add('next-active');
                    slider.slideNextNActive = document.querySelector('.carousel-slides__slide-next.next-active');
                }
                else{
                    slider.slideNextNActive.classList.remove('next-active');
                    slidesNextLast.classList.add('next-active');
                    slider.slideNextNActive = document.querySelector('.carousel-slides__slide-next.next-active');
                }

            })
        }
        function sliderInit(){
            if (slider.nextLink && slider.previousLink){
                nextLinkListener();
                previousLinkListener();
            }
        }

        // module.exports = sliderInit;
        nextLinkListener();
        previousLinkListener();
    }());

}




