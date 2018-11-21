$(function(){
	 /* swipeLeft */
    $('.swiper-left section').swipeLeft(function(){
        
        $(this).animate({ "left": "-40%" },500);
        $(this).parent().siblings().find('section').animate({ "left": "0" },500);

    }).swipeRight(function(){

        $(this).animate({ "left": "0" },500)

    }).tap(function(){

        $(this).animate({ "left": "0" },500)

    })
})
