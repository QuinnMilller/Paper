
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	paper = new Paper(50, 600, 25);
	dustbin = new Dustbin(675, 675, 100, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.position, {x:85,y:-85})
}


