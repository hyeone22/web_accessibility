var bg = document.querySelector(".item-bg");
var items = document.querySelectorAll(".news__item");
var item = document.querySelector(".news__item");

function cLog(content) {
  console.log(content);
}

if (window.innerWidth > 800) {
  document.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("news__item")) {
      var newsItems = document.querySelectorAll(".news__item");
      newsItems.forEach(function (element, index) {
        element.addEventListener("mouseover", function () {
          var x = this.getBoundingClientRect().left;
          var y = this.getBoundingClientRect().top;
          var width = this.getBoundingClientRect().width;
          var height = this.getBoundingClientRect().height;

          bg.classList.add("active");
          items.forEach(function (item) {
            item.classList.remove("active");
          });

          bg.style.width = width + "px";
          bg.style.height = height + "px";
          bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
        });

        element.addEventListener("mouseleave", function () {
          bg.classList.remove("active");
          items.forEach(function (item) {
            item.classList.remove("active");
          });
        });
      });
    }
  });
}

var swiper = new Swiper(".news-slider", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  keyboard: true,
  spaceBetween: 0,
  slidesPerView: "auto",
  speed: 300,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 3,
    slideShadows: false
  },
  breakpoints: {
    480: {
      spaceBetween: 0,
      centeredSlides: true
    }
  },
  simulateTouch: true,
  navigation: {
    nextEl: ".news-slider-next",
    prevEl: ".news-slider-prev"
  },
  pagination: {
    el: ".news-slider__pagination",
    clickable: true
  },
  on: {
    init: function () {
      var activeItem = document.querySelector(".swiper-slide-active");

      var sliderItem = activeItem.querySelector(".news__item");

      sliderItem.classList.add("active");

      var x = sliderItem.getBoundingClientRect().left;
      var y = sliderItem.getBoundingClientRect().top;
      var width = sliderItem.getBoundingClientRect().width;
      var height = sliderItem.getBoundingClientRect().height;

      bg.classList.add("active");

      bg.style.width = width + "px";
      bg.style.height = height + "px";
      bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
    }
  }
});

swiper.on("touchEnd", function () {
  items.forEach(function (item) {
    item.classList.remove("active");
  });
  var activeItem = document.querySelector(".swiper-slide-active");

  var sliderItem = activeItem.querySelector(".news__item");

  sliderItem.classList.add("active");

  var x = sliderItem.getBoundingClientRect().left;
  var y = sliderItem.getBoundingClientRect().top;
  var width = sliderItem.getBoundingClientRect().width;
  var height = sliderItem.getBoundingClientRect().height;

  bg.classList.add("active");

  bg.style.width = width + "px";
  bg.style.height = height + "px";
  bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
});

swiper.on("slideChange", function () {
  items.forEach(function (item) {
    item.classList.remove("active");
  });
});

swiper.on("slideChangeTransitionEnd", function () {
  items.forEach(function (item) {
    item.classList.remove("active");
  });
  var activeItem = document.querySelector(".swiper-slide-active");

  var sliderItem = activeItem.querySelector(".news__item");

  sliderItem.classList.add("active");

  var x = sliderItem.getBoundingClientRect().left;
  var y = sliderItem.getBoundingClientRect().top;
  var width = sliderItem.getBoundingClientRect().width;
  var height = sliderItem.getBoundingClientRect().height;

  bg.classList.add("active");

  bg.style.width = width + "px";
  bg.style.height = height + "px";
  bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
});
