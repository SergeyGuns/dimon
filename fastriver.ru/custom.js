var header = document.querySelector("#rec254409915");

var menuWhite = document.querySelector("#rec257714979");
var menuBlue = document.querySelector("#rec254409915");

var MENU_COLOR = {
  blue: "blue",
  white: "white",
};
var menuColor = MENU_COLOR.blue;

var scrollPrev = 0;
var isOut = false;
console.warn("v0.0.6");

function getColorByScroll(scrolled) {
  var scrolled = window.scrollY;
  return scrolled > 1080 ? MENU_COLOR.white : MENU_COLOR.blue;
}

function showWhiteMenu() {
  menuBlue.display = "none";
  menuWhite.display = "block";
}

function showBlueMenu() {
  menuBlue.display = "block";
  menuWhite.display = "none";
}

function showMenuByColor(newColor) {
  if (menuColor === newColor) return;
  menuColor = newColor;
  menuColor === MENU_COLOR.white ? showWhiteMenu() : showBlueMenu();
}

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

function compose() {
  var fns = Array.prototype.split.call(arguments);
  return fns.reduce(function (acc, fn) {
    return fn(acc);
  });
}
