function move(x, y) {
  var left = 
    parseInt(window.getComputedStyle(square)
             .getPropertyValue("left"));
  if (left >= 20&&x === -20) {
  square.style.left = left + x + "px";
  }
  if (left <= 260&&x === 20) {
  square.style.left = left + x + "px";
  }

  var top = 
    parseInt(window.getComputedStyle(square)
             .getPropertyValue("top"));
  if (top >= 20&&y === -20) {
  square.style.top = top + y + "px";
  }
  if (top <= 220&&y === 20) {
  square.style.top = top + y + "px";
  }
}

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") {
  move(20, 0);
  }  
  if (event.key === "ArrowLeft") {
  move(-20, 0);
  }
  if (event.key === "ArrowDown") {
  move(0, 20);
  }  
  if (event.key === "ArrowUp") {
  move(0, -20);
  }
});