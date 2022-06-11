var Level = 1;
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
  NewLevel();
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
  if (event.key === "a") {
  NewLevel();
  }
});

//I don't think you want to know how it works
function NewLevel() {
  Level++;

  if (Level === 2) {
  x = 20;
  y = 0;
  square.style.left = x + "px";
  square.style.top = y + "px"; 
  
  wall.style.top = 0 + "px";
  wall.style.left = 40 + "px";
  wall.style.height = 240 + "px";
  wall.style.width = 20 + "px";

  wall2.style.top = 20 + "px";
  wall2.style.left = 80 + "px";
  wall2.style.height = 240 + "px";
  wall2.style.width = 20 + "px";

  wall3.style.top = 0 + "px";
  wall3.style.left = 120 + "px";
  wall3.style.height = 240 + "px";
  wall3.style.width = 20 + "px";

  wall4.style.top = 20 + "px";
  wall4.style.left = 160 + "px";
  wall4.style.height = 240 + "px";
  wall4.style.width = 20 + "px";

  wall5.style.top = 0 + "px";
  wall5.style.left = 200 + "px";
  wall5.style.height = 240 + "px";
  wall5.style.width = 20 + "px";

  wall6.style.top = 20 + "px";
  wall6.style.left = 240 + "px";
  wall6.style.height = 240 + "px";
  wall6.style.width = 20 + "px";

  wall7.style.top = 0 + "px";
  wall7.style.left = 280 + "px";
  wall7.style.height = 240 + "px";
  wall7.style.width = 20 + "px";

  wall8.style.top = 0 + "px";
  wall8.style.left = 0 + "px";
  wall8.style.height = 260 + "px";
  wall8.style.width = 20 + "px";

  wall9.style.width = 0 + "px";
  wall10.style.width = 0 + "px";
  wall11.style.width = 0 + "px";
  wall12.style.width = 0 + "px";
  wall13.style.width = 0 + "px";
  wall14.style.width = 0 + "px";
  wall15.style.width = 0 + "px";
  wall16.style.width = 0 + "px";
  wall17.style.width = 0 + "px";
  wall18.style.width = 0 + "px";
  wall19.style.width = 0 + "px";
  wall20.style.width = 0 + "px";
  wall21.style.width = 0 + "px";
  wall22.style.width = 0 + "px";
  wall23.style.width = 0 + "px";
  wall24.style.width = 0 + "px";
  wall25.style.width = 0 + "px";
  }
  
  if (Level === 3) {
  x = 0;
  y = 0;
  square.style.left = x + "px";
  square.style.top = y + "px"; 
    
  wall.style.top = 0 + "px";
  wall.style.left = 20 + "px";
  wall.style.height = 100 + "px";
  wall.style.width = 20 + "px";
  wall.style.backgroundColor = "white";

  wall2.style.top = 20 + "px";
  wall2.style.left = 60 + "px";
  wall2.style.height = 160 + "px";
  wall2.style.width = 20 + "px";
  wall2.style.backgroundColor = "white";

  wall3.style.top = 120 + "px";
  wall3.style.left = 0 + "px";
  wall3.style.height = 40 + "px";
  wall3.style.width = 40 + "px";
  wall3.style.backgroundColor = "white";

  wall4.style.top = 0 + "px";
  wall4.style.left = 100 + "px";
  wall4.style.height = 140 + "px";
  wall4.style.width = 20 + "px";
  wall4.style.backgroundColor = "white";

  wall5.style.top = 80 + "px";
  wall5.style.left = 80 + "px";
  wall5.style.height = 20 + "px";
  wall5.style.width = 40 + "px";
  wall5.style.backgroundColor = "white";

  wall6.style.top = 180 + "px";
  wall6.style.left = 20 + "px";
  wall6.style.height = 60 + "px";
  wall6.style.width = 20 + "px";
  wall6.style.backgroundColor = "white";

  wall7.style.top = 160 + "px";
  wall7.style.left = 100 + "px";
  wall7.style.height = 80 + "px";
  wall7.style.width = 20 + "px";
  wall7.style.backgroundColor = "white";

  wall8.style.top = 200 + "px";
  wall8.style.left = 80 + "px";
  wall8.style.height = 20 + "px";
  wall8.style.width = 60 + "px";
  wall8.style.backgroundColor = "white";

  wall9.style.top = 120 + "px";
  wall9.style.left = 140 + "px";
  wall9.style.height = 120 + "px";
  wall9.style.width = 20 + "px";
  wall9.style.backgroundColor = "white";

  wall10.style.top = 20 + "px";
  wall10.style.left = 140 + "px";
  wall10.style.height = 80 + "px";
  wall10.style.width = 20 + "px";
  wall10.style.backgroundColor = "white";

  wall11.style.top = 0 + "px";
  wall11.style.left = 180 + "px";
  wall11.style.height = 20 + "px";
  wall11.style.width = 80 + "px";
  wall11.style.backgroundColor = "white";

  wall12.style.top = 40 + "px";
  wall12.style.left = 260 + "px";
  wall12.style.height = 80 + "px";
  wall12.style.width = 20 + "px";
  wall12.style.backgroundColor = "white";

  wall13.style.top = 20 + "px";
  wall13.style.left = 180 + "px";
  wall13.style.height = 40 + "px";
  wall13.style.width = 20 + "px";
  wall13.style.backgroundColor = "white";

  wall14.style.top = 40 + "px";
  wall14.style.left = 180 + "px";
  wall14.style.height = 20 + "px";
  wall14.style.width = 60 + "px";
  wall14.style.backgroundColor = "white";

  wall15.style.top = 160 + "px";
  wall15.style.left = 160 + "px";
  wall15.style.height = 20 + "px";
  wall15.style.width = 40 + "px";
  wall15.style.backgroundColor = "white";

  wall16.style.top = 80 + "px";
  wall16.style.left = 160 + "px";
  wall16.style.height = 20 + "px";
  wall16.style.width = 60 + "px";
  wall16.style.backgroundColor = "white";

  wall17.style.top = 80 + "px";
  wall17.style.left = 220 + "px";
  wall17.style.height = 60 + "px";
  wall17.style.width = 20 + "px";
  wall17.style.backgroundColor = "white";

  wall18.style.top = 120 + "px";
  wall18.style.left = 180 + "px";
  wall18.style.height = 20 + "px";
  wall18.style.width = 20 + "px";
  wall18.style.backgroundColor = "white";

  wall19.style.top = 100 + "px";
  wall19.style.left = 240 + "px";
  wall19.style.height = 20 + "px";
  wall19.style.width = 60 + "px";
  wall19.style.backgroundColor = "white";

  wall20.style.top = 140 + "px";
  wall20.style.left = 260 + "px";
  wall20.style.height = 100 + "px";
  wall20.style.width = 20 + "px";
  wall20.style.backgroundColor = "white";

  wall21.style.top = 180 + "px";
  wall21.style.left = 180 + "px";
  wall21.style.height = 20 + "px";
  wall21.style.width = 60 + "px";
  wall21.style.backgroundColor = "white";

  wall22.style.top = 160 + "px";
  wall22.style.left = 220 + "px";
  wall22.style.height = 20 + "px";
  wall22.style.width = 40 + "px";
  wall22.style.backgroundColor = "white";

  wall23.style.top = 220 + "px";
  wall23.style.left = 180 + "px";
  wall23.style.height = 20 + "px";
  wall23.style.width = 20 + "px";
  wall23.style.backgroundColor = "white";

  wall24.style.top = 220 + "px";
  wall24.style.left = 220 + "px";
  wall24.style.height = 40 + "px";
  wall24.style.width = 20 + "px";
  wall24.style.backgroundColor = "white";

  wall25.style.top = 220 + "px";
  wall25.style.left = 240 + "px";
  wall25.style.height = 20 + "px";
  wall25.style.width = 20 + "px";
  wall25.style.backgroundColor = "white";


  }
  console.log(Level);
}