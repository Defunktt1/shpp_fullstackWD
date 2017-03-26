$(document).ready(function () {

    var offset = 300;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() >= offset) {
            $('.up').fadeIn(duration);
        } else {
            $('.up').fadeOut(duration);
        }
    });

    $('.up').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        var targetLength = target.length;
        if (targetLength) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - ($(window).height() - $(target).outerHeight(true)) / 2
            }, 1300);
        }
    });
});