$(function () {
    if($('.animation-block').length){
        // First block animation
        setTimeout(function () {
            $('.animation-case:nth-child(4)').addClass('move');
        },500);
        setTimeout(function () {
            $('.animation-case:nth-child(3)').addClass('move');
        },1500);
        setTimeout(function () {
            $('.animation-case:nth-child(2)').addClass('move');
        },2500);
    }
    // Pop-up
    $('#apply').on('click', function () {
        $('.pop-up').addClass('show');
    });
    $('.pop-up .btn-close').on('click', function () {
        $('.pop-up').removeClass('show');
    });

    // Mobile menu
    var $menu = $(".mobile-nav");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 20 && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 20 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });//scroll

    $('.btn-menu').on('click', function () {
        $('.mobile-nav').addClass('show');
        $('.mobile-nav .menu-slide-block').slideDown();
    });
    $('.mobile-nav .btn-close').on('click', function () {
        $('.mobile-nav .menu-slide-block').slideUp();
        setTimeout(function () {
            $('.mobile-nav').removeClass('show');
        },400);
    });



});
