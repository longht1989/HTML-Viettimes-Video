/* ====================================
   Onload functions
   ==================================== */
/*sticky */
function stickyads(contentbox, sidebarbox, sidebartop, sticky, top) {
    var contentHeight = $(contentbox).height();
    var sidebarHeight = $(sidebarbox).height();
    if (sidebarHeight < contentHeight) {
        $(window).scroll(function() {
            var curPos = $(window).scrollTop();
            var stickyTop = curPos - top;
            if ($(sidebartop).length > 0) {
                stickyTop = curPos - $(sidebartop).offset().top - $(sidebartop).height();
            }
            var stickyBottom = curPos - $(contentbox).offset().top - $(contentbox).height() + $(sticky).height() + top;
            if (stickyTop > 0) {
                $(sticky).addClass("fixed");
                $(sticky).css("top", top + "px");
            } else {
                $(sticky).removeClass("fixed");
                $(sticky).css("top", "0px");
            }
            if (stickyBottom > 0) $(sticky).css("top", -1 * stickyBottom);
        });
    }
}

$(function() {
    /*show search bar*/
    $('.navigator__search > .fa-search').click(function() {
        $(this).toggleClass('fa-close');
        $(this).parent('.navigator__search').toggleClass('is-active');
        $(this).siblings(".navigator__child").slideToggle('fast');
    });
    stickyads(".sidebar-col", ".aside-col", "#stickhead", ".sticky-wrap", 5);
    $('#site-header .fa-bars').click(function() {
        $('.navbar').slideToggle();
        $(this).toggleClass("is-active");
    });
    $('#site-header .container > .fa-search').click(function() {
        $(this).siblings('.search__wrap').slideToggle("fast");
        $(this).toggleClass("is-active");
    });
});
