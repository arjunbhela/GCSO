var car,wall;
var speed,light,weight,speed1,light1,weight1;
var speed2,light2,weight2,speed3,light3,weight3;
function setup() {
  createCanvas(1600,400);
  bor = createSprite(300, 100,16000,5);
  bor.shapeColor = "white";

  bor1 = createSprite(300, 200,16000,5);
  bor1.shapeColor = "white";

  bor2 = createSprite(300, 300,16000,5);
  bor2.shapeColor = "white";

  speed=random(55,90);
  light=random(400,1500);
  weight=random(1552,5000);

  
  speed1=random(55,90);
  light1=random(400,1500);
  weight1=random(1552,5000);

  speed2=random(55,90);
  light2=random(400,1500);
  weight2=random(1552,5000);

  speed3=random(55,90);
  light3=random(400,1500);
  weight3=random(1552,5000);

  car1 = createSprite(50,250,50,50);
  car1.velocityX = speed;
car1.shapeColor = "white";
  car2= createSprite(50,150,50,50);
  car2.velocityX = speed1;
  car2.shapeColor = "white";
  wall1 = createSprite(1500,200,100,height/2);
  wall1.shapeColor = color(80,80,80);

  wall2 = createSprite(1500,200,100,1600);
  wall2.shapeColor = color(80,80,80);

  car3 = createSprite(50,350,50,50);
  car3.velocityX = speed2;
  car3.shapeColor = "white";

  car4 = createSprite(50,50,50,50);
  car4.velocityX = speed3;
  car4.shapeColor = "white";
}
function draw() {
  background(0);  

  if (isTouching(wall1,car1)) {
car1.velocityX = 0;
car1.x = 1425;
var def = 0.5 * weight * speed * speed/22509;
if (def>180)  {
car1.shapeColor=color(255,0,0)
}

if (def<180 && def>100) {
car1.shapeColor=color(230,230,0)
}

if (def<100) {
car1.shapeColor=color(0,255,0);
}
  }

  if (isTouching(wall1,car2)) {
    car2.velocityX = 0;
    car2.x = 1425;
    var def = 0.5 * weight1 * speed1 * speed1/22509;
    if (def>180)  {
    car2.shapeColor=color(255,0,0)
    }
    
    if (def<180 && def>100) {
    car2.shapeColor=color(230,230,0)
    }
    
    if (def<100) {
    car2.shapeColor=color(0,255,0);
    }
      }



      if (isTouching(wall1,car1)) {
car1.velocityX = 0;
car1.x = 1425;
var def = 0.5 * weight * speed * speed/22509;
if (def>180)  {
car1.shapeColor=color(255,0,0)
}

if (def<180 && def>100) {
car1.shapeColor=color(230,230,0)
}

if (def<100) {
car1.shapeColor=color(0,255,0);
}
  }

  if (isTouching(wall2,car3)) {
    car3.velocityX = 0;
    car3.x = 1425;
    var def = 0.5 * weight2 * speed2 * speed2/22509;
    if (def>180)  {
    car3.shapeColor=color(255,0,0)
    }
    
    if (def<180 && def>100) {
    car3.shapeColor=color(230,230,0)
    }
    
    if (def<100) {
    car3.shapeColor=color(0,255,0);
    }
      }

      if (isTouching(wall2,car4)) {
        car4.velocityX = 0;
        car4.x = 1425;
        var def = 0.5 * weight3 * speed3 * speed3/22509;
        if (def>180)  {
        car4.shapeColor=color(255,0,0)
        }
        
        if (def<180 && def>100) {
        car4.shapeColor=color(230,230,0)
        }
        
        if (def<100) {
        car4.shapeColor=color(0,255,0);
        }
          }
  drawSprites();
}