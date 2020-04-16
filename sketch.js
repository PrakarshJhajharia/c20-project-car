var wall, car1, car2, car3, car4,w1,w2,w3,w4,s1,s2,s3,s4,d1,d2,d3,d4,l1,l2,l3


function setup() {
  createCanvas(1600,400);
  w1 = random(400,1500)
  w3 = random(400,1500)
  w4 = random(400,1500)
  w2 = random(400,1500)
  s1 = random(30,95)
  s2 = random(30,95)
  s3 = random(30,95)
  s4 = random(30,95)
  l1 = createSprite(700,95,1600,10);
  l1.shapeColor = "white"
  l2 = createSprite(700,285,1600,10);
  l2.shapeColor = "white"
  l3 = createSprite(700,195,1600,10);
  l3.shapeColor = "white"
  wall = createSprite(1230, 200, 60, 400);
  wall.shapeColor = (80,80,80)
  car1 = createSprite(100,50,20,20)
  car1.shapeColor = "white"
  car1.velocityX = s1/8
   car2 = createSprite(100,140,20,20)
  car2.shapeColor = "white"
  car2.velocityX = s2/8
  car3 = createSprite(100,230,20,20)
  car3.shapeColor = "white"
  car3.velocityX = s3/8
  car4 = createSprite(100,320,20,20)
  car4.shapeColor = "white"
  car4.velocityX = s4/8

}

function draw() {
  background(0,0,0); 
  if(wall.x - car1.x < wall.width/2 + car1.width/2
    && car1.x - wall.x < wall.width/2 + car1.width/2)
    {
      car1.velocityX = 0
      d1 = (0.5 * w1 * s1 * s1)/22500
      if(d1<100){
        car1.shapeColor = "green"
        
      }
      if(d1>99 && d1 < 181){
        car1.shapeColor = "yellow"
      }
      if(d1>180){
        car1.shapeColor = "red"
      }
    } 
    if(wall.x - car2.x < wall.width/2 + car2.width/2
      && car2.x - wall.x < wall.width/2 + car2.width/2)
      {car2.velocityX = 0
        d2 = (0.5 * w2 * s2 * s2)/22500
        if(d2<100){
          car2.shapeColor = "green"
        }
        if(d2>99 && d2 < 181){
          car2.shapeColor = "yellow"
        }
        if(d2>180){
          car2.shapeColor = "red"
        }
      } 
      if(wall.x - car3.x < wall.width/2 + car3.width/2
        && car3.x - wall.x < wall.width/2 + car3.width/2)
        {car3.velocityX = 0
          d3 = (0.5 * w3 * s3 * s3)/22500
          if(d3<100){
            car3.shapeColor = "green"
          }
          if(d3>99 && d3 < 181){
            car3.shapeColor = "yellow"
          }
          if(d3>180){
            car3.shapeColor = "red"
          }
        } 
        if(wall.x - car4.x < wall.width/2 + car4.width/2
          && car4.x - wall.x < wall.width/2 + car4.width/2)
          {car4.velocityX = 0
            d4 = (0.5 * w4 * s4 * s4)/22500
            if(d4<100){
              car4.shapeColor = "green"
            }
            if(d4>99 && d4 < 181){
              car4.shapeColor = "yellow"
            }
            if(d4>180){
              car4.shapeColor = "red"
            }
          } 
  drawSprites();
}