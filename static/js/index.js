
//轮播图
$(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 5,
        autoplay:true,
        autoplayTimeout: 4000,
        responsive:{
            0:{
                items:1.1
            }
        }
    })
    var owlHeight = $('.owl-carousel').height();
    var votHeight = $('.owl-dots').height();
    var bHeight = Number( owlHeight) - Number(votHeight);
    $('.banner').height(bHeight);
})
