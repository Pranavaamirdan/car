  var car,wall,speed,weight,deformation;
function setup() {
  createCanvas(1300,400);
  car = createSprite(50, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1100,200,50,200);
  car.shapeColor = "white" ; 
  wall.shapeColor = "white" ;
  car.velocityX = speed ;
}

function draw() {
  background(0); 
  if(wall.isTouching(car)){
  if (deformation<65){
    wall.shapeColor = "green" ; 
  }else if(deformation>65 && deformation<117){
    wall.shapeColor = "yellow" ; 
  }else if(deformation>117){
    wall.shapeColor = "red" ; 
  }
  car.velocityX = 0 ;
  } 
  Deformation();
  drawSprites();
}
function Deformation () {
  deformation = (0.5 * weight * speed * speed)/22500;
}
