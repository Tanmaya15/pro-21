var wall,thickness;
var bullet,speed,weight;
var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);
 
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

 bullet = createSprite(50, 200, 5, 20);
 wall = createSprite(1200,200,thickness,height/2)

}

function draw() {
  background(255,255,255);  

if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
        wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
        wall.shapeColor=color(0,255,0);
    }
}

  drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEdge = bullet.x+bullet.width;
wallLeftEdge =  wall.x;
if(bulletRightEdge>=wallLeftEdge){
    return true;
}
else return false;
}
