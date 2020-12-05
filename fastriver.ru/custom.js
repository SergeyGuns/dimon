var header = document.querySelector("#rec254409915");
var screenHeight = document.querySelector("#rec254109717").clientHeight;
var menuWhite = document.querySelector("#rec257714979");
var menuBlue = document.querySelector("#rec254409915");

var MENU_COLOR = {
  blue: "blue",
  white: "white",
};
var menuColor = MENU_COLOR.blue;

var scrollPrev = 0;
var isOut = false;
console.warn("v0.0.10");

function getColorByScroll(scrolled) {
  var scrolled = window.scrollY;
  return scrolled > screenHeight ? MENU_COLOR.white : MENU_COLOR.blue;
}

function showWhiteMenu() {
  menuBlue.hidden = true;
  menuWhite.hidden = false;
}

function showBlueMenu() {
  menuBlue.hidden = false;
  menuWhite.hidden = true;
}

function showMenuByColor(newColor) {
  console.log({ newColor, menuColor });
  if (menuColor === newColor) return;
  menuColor = newColor;
  menuColor === MENU_COLOR.white ? showWhiteMenu() : showBlueMenu();
}

function handlerScroll() {
  var scrolled = window.scrollY;
  if (scrolled > 100 && scrolled > scrollPrev) {
    if (isOut !== true) {
      menuWhite.classList.add("out");
      menuBlue.classList.add("out");
      isOut = true;
    }
  } else {
    if (isOut !== false) {
      menuWhite.classList.remove("out");
      menuBlue.classList.remove("out");
      isOut = false;
    }
  }
  scrollPrev = scrolled;
}

window.addEventListener("scroll", throttle(handlerScroll, 50));
window.addEventListener("scroll", () => showMenuByColor(getColorByScroll()));

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
