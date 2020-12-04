var header = document.querySelector("#rec254409915");
var scrollPrev = 0;
var isOut = false;
console.warn("v0.0.2");

function handlerScroll() {
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
}

window.addEventListener("scroll", throttle(handlerScroll, 50));

function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
