let navbar = jQuery(".navbar");
jQuery.noConflict();
jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
        let oTop = jQuery(".section-2").offset().top - window.innerHeight;
        if (jQuery(window).scrollTop() > oTop) {
            navbar.addClass("sticky");
        }
        else {
            navbar.removeClass("sticky");
        }
    });
});

// Counter Animation

let nCount = function (selector) {
    jQuery(selector).each(function () {
        jQuery(this).animate({
            Counter: jQuery(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function (value) {
                jQuery(this).text(Math.ceil(value));
            }
        })
    });
}
let a = 0;
jQuery(window).scroll(function () {
    let oTop = jQuery(".numbers").offset().top - window.innerHeight;
    if (a == 0 && jQuery(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect> h1");
    }

})
