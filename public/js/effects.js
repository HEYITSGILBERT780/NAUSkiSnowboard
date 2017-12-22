$(document).ready(function() {
    $("#home-content").fadeIn(2000);
});

$(document).ready(function() {
    $("#about-title").fadeIn(2000);
});

$(".dropdown").hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(150);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
});

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
