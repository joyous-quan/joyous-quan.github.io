
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
})
