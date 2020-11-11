
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,bin,bin1,bin2,paper,binimage,pimage;

function preload()
{
  binimage = loadImage("bin.png");
  
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
  world = engine.world;

  

  
  ground = new Ground(600,480,1200,10);
  bin2 = new Bin(1080,417,15,100);
  bin1 = new Bin(918,417,15,100);
  bin = new Bin(1000,467,150,15);
  paper = new Paper(100,460,10,10);  
  
  
	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:105,y:-120})
	}
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);
  ground.display();
  bin2.display();
  bin1.display();
  bin.display();
  paper.display();
  image(binimage,899,275,200,200);
  
  

  
  
  drawSprites();
 
}





