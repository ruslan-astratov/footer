$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    navText: ["", ""],
    smdots: false,
    smartSpeed: 1000,

    slideTransition: "ease-in",
  });
});

$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    slideBy: "page",
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  owl.on("mousewheel", ".owl-stage", function (e) {
    let delta = e.originalEvent.deltaY;
    if (delta < 0) {
      owl.trigger("next.owl.carousel");
    } else {
      owl.trigger("prev.owl.carousel");
    }
    e.preventDefault();
  });
});
