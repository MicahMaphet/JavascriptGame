function move(x, y) {
  var wallwidth = 
    parseInt(window.getComputedStyle(wall)
    .getPropertyValue("width"));

  var wallheight = 
    parseInt(window.getComputedStyle(wall)
    .getPropertyValue("height"));

  var wallleft = 
    parseInt(window.getComputedStyle(wall)
    .getPropertyValue("left"));
  
  var walltop = 
    parseInt(window.getComputedStyle(wall)
    .getPropertyValue("top"));
  
  var left = 
    parseInt(window.getComputedStyle(square)
    .getPropertyValue("left"));
  
  var top = 
    parseInt(window.getComputedStyle(square)
             .getPropertyValue("top"));
  
  if (left >= 20&&x === -20) {

    if (top > wallheight + walltop
       ||top < wallheight - walltop
       ||left > wallleft + wallwidth
       ||left < wallleft + wallwidth) 
    {
      square.style.left = left + x + "px";
    } 
  }
  
  if (left <= 260&&x === 20) {

    if (top > wallheight + walltop
       ||top < wallheight - walltop
       ||left > wallleft - wallwidth
       ||left < wallleft - wallwidth) 
    {
      square.style.left = left + x + "px";
    }
  }


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