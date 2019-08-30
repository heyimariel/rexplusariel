var url = window.location.href;

var qparts = url.split("?");
var query = qparts[1];

if(query){
    getValue('hey')
}

function getValue(varname)
{
    var vars = query.split("&amp;");
    var value = "";
    for (i=0; i<vars.length; i++)
    {
        var parts = vars[i].split("=");
        if (parts[0] == varname)
        {
            value = parts[1];
            break;
        }
    }
    value = unescape(value);
    value.replace(/\+/g," ");

    if(value=='urinvited'){
        $('.rsvp').show().css('display','inline-block');
    }
}

jQuery("#gallery").unitegallery({
    tiles_type: "justified",
});

$( ".ug-tile" ).each(function( index ) {
    $(this).addClass('wow zoomIn')
});

$(".ug-tile:nth-child(odd)").attr('data-wow-delay', '0.2s')
$(".ug-tile:nth-child(even)").attr('data-wow-delay', '0.4s')

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date('2019/11/23');
initializeClock('clockdiv', deadline);

new WOW().init();

var body_close_menu = function (event) {
    $('.open').removeClass('oppenned');
    $('.menu_status').removeClass('close')
    $('.mask').hide();
};
$('.mask').on('click', body_close_menu);

var menu_status = function (event) {
    if($(this).hasClass('close')){
        $(this).removeClass('close')
        $('.open').removeClass('oppenned');
        $('.mask').hide();
    }else{
        $(this).addClass('close')
        $('.open').addClass('oppenned');
        $('.mask').show();
    }
};
$('.menu_status').on('click', menu_status);

function resize() {
    var $doc_height = jQuery(window).innerHeight();
    $('.top-bg').css("height", $doc_height);

    var width = document.body.clientWidth;
    if (width <= 992) {
        $('header').addClass('small');
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 0,
            responsive: true,
        });
    }else{
        $('header').removeClass('small');
    }
}
resize();

$(window).resize(function() {
    resize();
});

var slide_tag = function () {
    var w = 0;

    // if (width > 992) {
    // w = 134
    // }else{
    setTimeout(function () {
        $('.mask').trigger('click')
    }, 10);
    // }

    var tag = $(this).attr('href');
    var top = $(tag).offset().top - w;

    $("html,body").animate({scrollTop: top}, 1000);
};
$('.sub-menu').on('click', 'a', slide_tag);

$(window).scroll(function() {
    var sTop = $(this).scrollTop();
    var width = document.body.clientWidth;
    if(width > 992){
        if ( sTop > 50){
            $('header').addClass('small');
        }else{
            $('header').removeClass('small');
        }
    }
});


