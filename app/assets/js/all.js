//cdn.jsdelivr.net/npm/vanillajs-datepicker@1.2.0/dist/js/datepicker-full.min.js"

https: $(function () {
  console.log("Hello Bootstrap5");
});

$(".menuBtn").click(function (e) {
  e.preventDefault();
  $(".dropdown").toggleClass("active");
});

const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  autohide: true,
});
