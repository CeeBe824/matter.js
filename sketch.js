const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var ground
var ball

function setup() {
  createCanvas(800,400);

  engine = Engine.create()
  world = engine.world;

  var option = {
    isStatic : true
  }
 
  ground = Bodies.rectangle(400,370,800,10,option) //creating Engine for my car
World.add(world,ground)//adding this car engine to planet Earth

var ball_option = {
restitution : 1
}

ball = Bodies.circle(400,100,30,ball_option)
World.add(world,ball);

}



function draw() {
  background("black"); 
  Engine.update(engine) ;
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,800,10);

 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,30,30);
}