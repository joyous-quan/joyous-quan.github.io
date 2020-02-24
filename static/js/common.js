$(function(){
	$("#header").load("/templates/modules/header.html");
	$("#footer").load("/templates/modules/footer.html");

 	$(window).scroll(function() {
       var st = $(this).scrollTop(),sh = 200;
       if(st >= sh){
        	$('.BLD_backtop').show()
        } else {
        	$('.BLD_backtop').hide()
        }
    });
	/* page 加减 */
    $('.page_prev').click(function(event){
        var num = Number($('.page_number').html());
       	num --;
        if(num <1){
            num = 1
        }
        $('.page_number').html(num)
    })
    $('.page_next').click(function(event){
        var num = Number($('.page_number').html());
        var total = Number($('.page_total').html());
       	num ++;
        if(num > total){
            num = total
        }
       	$('.page_number').html(num)
    })
    
})