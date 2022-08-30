"use strict";

//cdn.jsdelivr.net/npm/vanillajs-datepicker@1.2.0/dist/js/datepicker-full.min.js"
https: $(function () {
  console.log("Hello Bootstrap5");
});

$(".menuBtn").click(function (e) {
  e.preventDefault();
  $(".dropdown").toggleClass("active");
});
var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  autohide: true
}); //index footer swiper
// <!-- Initialize Swiper -->

var swiper = new Swiper(".swiper", {
  effect: "fade",
  loop: true,
  // 分頁
  pagination: {
    el: ".swiper-pagination"
  },
  // 左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // 滾動條
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  }
});
//# sourceMappingURL=all.js.map
