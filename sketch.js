var back;
var rocket,rocketImg;
var spaceCraft,stationeryCraft,forwardCraft,leftCraft,rightCraft;
var gameState = "Play"

function preload(){
  back = loadImage("images/spacebg.jpg");
  rocketImg = loadImage("images/iss.png");
  stationeryCraft = loadImage("images/spacecraft1.png");
  forwardCraft = loadImage("images/spacecraft2.png");
  rightCraft = loadImage("images/spacecraft3.png");
  leftCraft = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(1024,768);

  rocket = createSprite(512, 284, 50, 50);
  rocket.addImage(rocketImg);

  spaceCraft = createSprite(470,484,50,50);
  spaceCraft.addImage(stationeryCraft);
  spaceCraft.scale=0.38;

}

function draw() {
  background(back);  
if(gameState==="Play"){
  spaceCraft.x += random(-2,2);

  if(spaceCraft.x<470){
    spaceCraft.addImage(rightCraft);
  } 
  if(spaceCraft.x>470){
    spaceCraft.addImage(leftCraft);
  }

  if(keyIsDown(UP_ARROW)){
    spaceCraft.addImage(forwardCraft)
    spaceCraft.y -= 1;
  }
  else if(keyIsDown(LEFT_ARROW)){
    spaceCraft.x -= 1;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    spaceCraft.x += 1;
  }

 

  if(spaceCraft.x>468 && spaceCraft.y<400){
    gameState = "End"
  }
}

if(gameState ==="End"){
  spaceCraft.addImage(stationeryCraft);
  spaceCraft.x=470;
  spaceCraft.y=395;
  fill("white")
  textSize(25)
  text("DOCKING COMPLETED",30,100)
}
 

  drawSprites();
}
