$(function(){
	


	//fixed-side 
	$(window).scroll(function (){
	    var st = $(this).scrollTop(),sh = 82;
	    if(st >= sh){
	    	$('.about-new-side').addClass('fixed-about-new-side');
	    } else {
	    	$('.about-new-side').removeClass('fixed-about-new-side');
	    }
	})
})