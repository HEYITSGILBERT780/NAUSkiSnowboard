$(document).ready(function() {
    $("#content").fadeIn(2000);
});

$(document).ready(function(){
   var height = $(window).height();  //getting windows height
   $('#myCarousel').css('height',height+'px');   //and setting height of carousel
   $('.carousel-inner > .item > img').css('height',height+'px');
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
