/*global $*/
$(document).ready(function () {
    'use strict';
    // Trigger Slick
    $('.ex-boxs').slick({
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });
    
    $(window).on("load", function () {
        if ($(this).width() <= 1000) {
            $('header').css("backgroundImage", "url('img/bs.png')");
        } else {
            $('header').css("backgroundImage", "url('img/bg.png')");
        }
    });
    
    $(window).on("resize", function () {
        if ($(this).width() <= 1000) {
            $('header').css("backgroundImage", "url('img/bs.png')");
        } else {
            $('header').css("backgroundImage", "url('img/bg.png')");
        }
    });
    
});