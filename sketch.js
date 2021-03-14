var car, wall;
var speed, weight;







function setup() {
  createCanvas(800,400);
  car=createSprite(400, 200, 50, 50);
  wall=createSprite(800,200,60,100);

  car.velocityX=5;

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black"); 
  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5 * weight * speed * speed/22510
    if(deformation/180){
      car.shapeColor=color("yellow")
      wall.shapeColor=color("blue")
    }
if (deformation<180 && deformation>180){
  car.shapeColor=color("green");
  wall.shapeColor=color("blue");
}
if (deformation<100){
  car.shapeColor=color("red")
  wall.shapeColor=color("blue")
}
  }
  
  drawSprites();
}