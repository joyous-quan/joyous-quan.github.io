$(function(){
	 /* swipeLeft */
	 $(".swiper-left section").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "left"){
                $(this).animate({"left" : "-40%"},300)
                $(this).parent().siblings().find('section').animate({ "left": "0" },300);
            }else if(direction == "right"){
                $(this).animate({"left" : "0"},300)
            }
        }
    })
    $(".swiper-left section").on('touchstart',function(){
        $(this).animate({"left" : "0"},300)
    })
    
})
