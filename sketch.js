var movingRectangle;
var standStillRectangle;

function setup() {
  createCanvas(800,400);
 movingRectangle = createSprite(400, 200, 100, 50);
 movingRectangle.shapeColor = "blue";
 standStillRectangle = createSprite(600,200,100,50);
 standStillRectangle.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;
  console.log(movingRectangle.x - standStillRectangle.x) 
  console.log(movingRectangle.y - standStillRectangle.y)

  if(movingRectangle.x-standStillRectangle.x < standStillRectangle.width/2 + movingRectangle.width/2
    && standStillRectangle.x - movingRectangle.x < standStillRectangle.width/2 + movingRectangle.width/2 && 
    movingRectangle.y - standStillRectangle.y < standStillRectangle.height/2 + movingRectangle.height/2 &&
    standStillRectangle.y - movingRectangle.y < standStillRectangle.height/2 + movingRectangle.height/2){

    movingRectangle.shapeColor = "green";
    standStillRectangle.shapeColor = "green";

    standStillRectangle.velocityY = -5;
  }
  else{
    movingRectangle.shapeColor = "blue";
    standStillRectangle.shapeColor = "blue";
    standStillRectangle.velocityY = 0;
  }
  drawSprites();
}