$(document).ready(function () {
  $(".slider").slick({
    mobileFirst: true,
    arrow: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    infinite: true,
    fade: true,
    cssEase: "linear",
  });
});
$(".command").slick({
  infinite: true,
  arrow: true,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 1500,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".last").slick({
  infinite: true,
  arrow: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 1500,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".header-burger").click(function (event) {
  $(".header-burger,.menu").toggleClass("active");
  $("body").toggleClass("lock");
  $(".website-menu").toggleClass("active");
});
$(document).click(function (e) {
  var container = $(".header-burger");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".website-menu, .menu.active").removeClass("active");
    $(".header-burger.active").removeClass("active");
    $("body").removeClass("lock");
  }
});
$(document).ready(function () {
  $(".partners").slick({
    infinite: true,
    arrow: true,
    autoplay: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    speed: 1500,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
