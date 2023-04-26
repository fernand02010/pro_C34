const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var backgroundImg,predioimg,predio,cannon,cannonball;

var score = 0;

function preload() {
 predioimg = loadImage('predio-1.png.png');
  backgroundImg = loadImage("New Piskel-1.png.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  predio = createSprite(1200,325);
  predio.addImage(predioimg);
  predio.scale = 1;
  cannon = new Cannon(200,325,100,200,35);
  cannonball = new CannonBall(cannon.x,cannon.y);
}

function draw(){
  
  image(backgroundImg,0,0,width,height);
  cannon.display();
  cannonball.display();
  drawSprites();
}

