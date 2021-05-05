const script = (cursorId) => `(function() {
    console.log(init script)
    var follower, init, mouseX, mouseY, positionElement, timer;
  
    follower = document.getElementById('${cursorId}');
  
    mouseX = (event) => {
      return event.clientX;
    };
  
    mouseY = (event) => {
      return event.clientY;
    };
  
    positionElement = (event) => {
      var mouse;
      mouse = {
        x: mouseX(event),
        y: mouseY(event)
      };
      follower.style.top = mouse.y + 'px';
      return follower.style.left = mouse.x + 'px';
    };
  
    timer = false;
  
    window.onmousemove = init = (event) => {
      console.log(event)
      var _event;
      _event = event;
      return timer = setTimeout(() => {
        return positionElement(_event);
      }, 1);
    };
  
  })();`;
export { script };
