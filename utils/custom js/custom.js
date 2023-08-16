!(function(e) {
  "use strict";
  let o = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1
  );
  if (
    (
    e(".counter").length && e(".counter").counterUp({ delay: 10, time: 1200 }),
      e(window).on("scroll", function() {
        let o = e(".sticky-menu");
        e(window).scrollTop() >= 100
          ? o.addClass("fixed")
          : o.removeClass("fixed");
      }),
      e(window).on("scroll", function() {
        e(this).scrollTop() > 200
          ? e(".scroll-top").fadeIn()
          : e(".scroll-top").fadeOut();
      }),
      e(".mixitUp-container").length)
  ) {
    let s = document.querySelector(".mixitUp-container");
    mixitup(s);
  }
  e("#page-scroll-container-one").length &&
  e("#page-scroll-container-one").pagepiling({
    scrollingSpeed: 50,
    loopTop: !0,
    loopBottom: !0
  }),
  e("#page-scroll-container-two").length &&
  e("#page-scroll-container-two").pagepiling({
    scrollingSpeed: 50,
    loopTop: !0,
    loopBottom: !0
  });
}(jQuery))

