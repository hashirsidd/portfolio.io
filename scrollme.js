(function($) {
    $(document).ready(function(){
        $(".navscroll").hide();

        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 890){
                    $(".navscroll").fadeIn();
                }
                else{
                    $(".navscroll").fadeOut();  
                }
            });
        });
    });
} (jQuery));