;(function($){

    $("#header").load("/templates/component/header.html");
    $("#footer").load("/templates/component/footer.html");
    
    //TOP
	$(document).on("click", ".to-top", function () {
 		$(window).scrollTop(0);
 	})




})(Zepto);