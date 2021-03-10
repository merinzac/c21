function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true
  movingRect=createSprite(800, 400, 80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  box1= createSprite(100,100,50,50)
  box2= createSprite(200,100,50,50)
  box1.shapeColor="green";
  box2.shapeColor="green";
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (isTouching(movingRect,box2)){
    box2.shapeColor="red";
    movingRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"
   box2.shapeColor="green";
  }

drawSprites();
}

