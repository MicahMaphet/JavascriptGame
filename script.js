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
  /* the function colide makes sure that
  if the guy went to the x and y quardanites
  would he be in a wall or not. If it is in a wall
  it goes back to the last position, if it is in 
  a wall then it goes back to its last position*/
  if (colide(wall)
     ||colide(wall2)
     ||colide(wall3)
     ||colide(wall4)
     ||colide(wall5)
     ||colide(wall6)
     ||colide(wall7)
     ||colide(wall8)
     ||colide(wall9)
     ||colide(wall10)
     ||colide(wall11)
     ||colide(wall12)
     ||colide(wall13)
     ||colide(wall14)
     ||colide(wall15)
     ||colide(wall16)
     ||colide(wall17)
     ||colide(wall18)
     ||colide(wall19)
     ||colide(wall20)
     ||colide(wall21)
     ||colide(wall22)
     ||colide(wall23)
     ||colide(wall24)
     ||colide(wall25)) {
    x = xp;
    y = yp;
  } else if (colide(win)) {
    alert("you win");
  }
  square.style.left = x + "px";
  square.style.top = y + "px"; 
  
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