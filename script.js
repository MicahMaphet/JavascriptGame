var x = 
  parseInt(window.getComputedStyle(square)
                .getPropertyValue("left"));
var xp = x;
var y = 
  parseInt(window.getComputedStyle(square)
                .getPropertyValue("top"));
var yp = y; //this will keep track of the position for the collision

function colide(a) {
  var wallwidth = 
    parseInt(window.getComputedStyle(a)
    .getPropertyValue("width"));

  var wallheight = 
    parseInt(window.getComputedStyle(a)
    .getPropertyValue("height"));

  var wallleft = 
    parseInt(window.getComputedStyle(a)
    .getPropertyValue("left"));
  
  var walltop = 
    parseInt(window.getComputedStyle(a)
    .getPropertyValue("top"));
  
  if (x < wallwidth + wallleft
     && y < walltop + wallheight
     && y > walltop - 20
     && x > wallleft - 20
     && x < wallleft + wallwidth
     || x > 280
     || x < 0
     || y < 0
     || y > 240)
  {
  return true;
  }

  return false;
}

function move(xc, yc) {

  x = x + xc;
  y = y + yc;
  
  if (colide(wall)
     ||colide(wall2)
     ||colide(wall3)
     ||colide(wall4)) {
    x = xp;
    y = yp;
  square.style.left = x + "px";
  square.style.top = y + "px"; 
  } else {
  square.style.left = x + "px";
  square.style.top = y + "px"; 
  }
  
  //all the movement happens here
  xp = x;
  yp = y;  
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