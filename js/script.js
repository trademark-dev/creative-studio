jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
     Loading Timeout
     ====================================== */
    setTimeout(function () {
        $("#loader-fade").fadeToggle();

    }, 1500);

    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "flipInX",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 3000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

    /* ===================================
       Revolution Slider
       ====================================== */

    /*Design Studio*/
    $("#rev_slider_8_1").show().revolution({
        sliderType: "standard",
        jsFileLocation: "//localhost/revslider/revslider/public/assets/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "on",
            touch: {
                touchenabled: "on",
                touchOnDesktop: "off",
                swipe_threshold: 75,
                swipe_min_touches: 50,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            }
            ,
            arrows: {
                style: "uranus",
                enable: false,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: '<div class="hvr-pulse"></div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                }
            }
            ,
            bullets: {
                enable: false,
                hide_onmobile: true,
                hide_under: 600,
                style: "hephaistos",
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: ''
            }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [868, 600, 500, 400],
        lazyType: "smart",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2000,
            speedbg: 0,
            speedls: 0,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 10, 11, 12, 13, 14, 55],
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });
});
// end

// $(document).ready(function () {
   

// })
jQuery(function ($) {
    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();

    function animatedCursor() {

        if ($("#animated-cursor").length) {

            var e = { x: 0, y: 0 }, t = { x: 0, y: 0 }, n = .25, o = !1, a = document.getElementById("cursor"),
                i = document.getElementById("cursor-loader");
            TweenLite.set(a, { xPercent: -50, yPercent: -50 }), document.addEventListener("mousemove", function (t) {
                var n = window.pageYOffset || document.documentElement.scrollTop;
                e.x = t.pageX, e.y = t.pageY - n
            }), TweenLite.ticker.addEventListener("tick", function () {
                o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, TweenLite.set(a, { x: t.x, y: t.y }))
            }),
                $(".animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, { scale: 2 }), TweenMax.to(a, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, { scale: .5 }), o = !0
                }),
                $(".animated-wrap").mouseleave(function (e) {
                    TweenMax.to(this, .3, { scale: 1 }), TweenMax.to(a, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        opacity: 1
                    }), TweenMax.to(i, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        top: 0,
                        left: 0
                    }), TweenMax.to($(this).children(), .3, { scale: 1, x: 0, y: 0 }), o = !1
                }),

                $(".testimonial-images .animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, { scale: 2 }), TweenMax.to(a, .3, {
                        scale: 1.5,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, { scale: .5 }), o = !0
                }),

                $(".animated-wrap").mousemove(function (e) {
                    var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                    n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
                        x: t.x,
                        y: t.y
                    }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
                        x: (w - u.width / 2) / u.width * x,
                        y: (f - u.height / 2 - m) / u.height * x,
                        ease: Power2.easeOut
                    })
                }),
                $(".hide-cursor,.btn,.tp-bullets").mouseenter(function (e) {
                    TweenMax.to("#cursor", .2, { borderWidth: "1px", scale: 2, opacity: 0 })
                }), $(".hide-cursor,.btn,.tp-bullets").mouseleave(function (e) {
                    TweenMax.to("#cursor", .3, { borderWidth: "2px", scale: 1, opacity: 1 })
                }), $(".link ").mouseenter(function (e) {
                    TweenMax.to("#cursor", .2, {
                        borderWidth: "0px",
                        scale: 3,
                        backgroundColor: "rgba(255, 255, 255, 0.27)",
                        opacity: .15
                    })
                }), $(".link").mouseleave(function (e) {
                    TweenMax.to("#cursor", .3, {
                        borderWidth: "2px",
                        scale: 1,
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        opacity: 1
                    })
                })

        }

    }
    if ($(window).width() > 991) {
        setTimeout(function () {
            animatedCursor();
        }, 1000);
    }

})


AOS.init();