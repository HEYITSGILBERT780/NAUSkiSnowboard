/*global $*/

/********* jQuery for added effects to different pages **********/

$(document).ready(function() {
    $("#home-content").fadeIn(2000);
    $("#event-title").fadeIn(2000);
    $("#form-title").fadeIn(2000);
    $("#about-title").fadeIn(2000);
    
     /* Every time the window is scrolled load section */
    $(window).scroll( function(){
        lazyload('.hideinfo', 1500);
    });
    
    $(window).scroll( function(){
        lazyload('.hideo', 1500);
    });
    
    $(window).scroll( function(){
        lazyload('.hidecontact', 1500);
    });
    
    if (window.location == '#info' && window.location != '/about') {
        $('.hideinfo').animate({'opacity':'1'},2000);    
    }
    
    if ($('.hideo').css('opacity') == '1') {
        $(window).on('load', function() {
            $('.hideinfo').css('opacity', '1 !important');
        });
    }
    
    if ($('.hidecontact').css('opacity') == '1') {
        $(window).on('load', function() {
            $('.hideinfo').css('opacity', '1 !important');
            $('.hideo').css('opacity', '1 !important' );
        });    
    }
});


$(window).on('load', function() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});

function lazyload(element, y) {
    var windowTop = $(window).scrollTop();    //* top of the window
    var windowBottom = windowTop + $(window).height();        
    
    /* Check the location of each desired element */
    $(element).each( function(){
        var objectTop = $(this).offset().top;
        var objectBottom = objectTop + $(this).height();
            
        if(windowTop <= objectBottom && windowBottom >= objectTop) {
            $(this).animate({'opacity':'1'}, y);
        }
    }); 
}

/********* javascript *********/

function dateShow(check) {
    if (check.checked) {
        var input = document.createElement("input");
        input.type = "date";
        input.name = "eventSchema[endDate]";
        input.className = "form-control";
        input.id = 'endDate';
        
        var label = document.createElement("label");
        label.htmlFor = "endDate";
        label.innerHTML = "End Date";
        
        var div = document.createElement("div");
        div.className = "form-group";
        div.id = check.name;
        div.appendChild(label);
        div.appendChild(input);
        
        document.getElementById("endDateSection").appendChild(div);
    } else {
        document.getElementById(check.name).remove();
    }    
}
