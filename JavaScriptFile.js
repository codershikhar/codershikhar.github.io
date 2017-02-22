function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#myNavbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#myNavbar ul li a').removeClass("active");
            currLink.addClass("active");
        }
    else{
            currLink.removeClass("active");
    }
});
}
//carousel sliding
var $myCarousel = $('#myCarousel');

// Initialize carousel
$myCarousel.carousel();