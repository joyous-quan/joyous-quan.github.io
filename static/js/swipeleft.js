$(function(){
	 /* swipeLeft */
    $('.swiper-left section').swipeLeft(function(){
        
        $(this).animate({ "left": "-40%" },500);
	$(this).siblings().animate({ "left": "0" },500);

    }).swipeRight(function(){

        $(this).animate({ "left": "0" },500)

    }).on('touchstart',function(){

        $(this).animate({ "left": "0" },500)

    })
})
