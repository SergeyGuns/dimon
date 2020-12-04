var header = document.querySelector("#rec254409915");
var scrollPrev = 0;
var isOut = false;
console.warn("v0.0.2");
window.addEventListener("scroll", function () {
  var scrolled = window.scrollY;
  if (scrolled > 100 && scrolled > scrollPrev) {
    if (isOut !== true) {
      header.classList.add("out");
      isOut = true;
    }
  } else {
    if (isOut !== false) {
      header.classList.remove("out");
      isOut = false;
    }
  }
  scrollPrev = scrolled;
});
