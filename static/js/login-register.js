;(function($){

    $(document).on("focus", ".ipt", function () {
        $(this).css("border-color","#9fb1c4");
    })
    $(document).on("blur", ".ipt", function () {
        $(this).css("border-color","#f3f3f3");
    })

    $('.register-btn').on('touchstart',function(event){
       window.location.href = 'register.html';
    })
    $('.login-btn').on('touchstart',function(event){
       window.location.href = 'login.html';
    })


})(Zepto);