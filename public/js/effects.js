/*global $*/

/********* jQuery for added effects to different pages **********/

$(document).ready(function() {
    $("#home-content").fadeIn(2000);
});

$(document).ready(function() {
    $("#event-title").fadeIn(2000);
});

$(document).ready(function() {
    $("#about-title").fadeIn(2000);
});

$(document).ready(function() {
    $("#form-title").fadeIn(2000);
});

if ( $(window).width() > 739) {
    $(".dropdown").hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(150);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
    }); 
} else {
    $(".dropdown").hover(function() {
        $('.dropdown-menu').css('display', 'none');    
    }); 
}

$(function() {
    $('.dropdown-menu > li > a').hover(function() {
        $('.dropdown > a').css('border-bottom', '1px solid white');
    }, function() {
        $('.dropdown > a').css('border-bottom', 'none');
    });
});

$(function() {
    $('.dropdown > a').hover(function() {
        $('.dropdown > a').css('border-bottom', '1px solid white');
    }, function() {
        $('.dropdown > a').css('border-bottom', 'none');
    });
});

$(window).on('load', function() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});
