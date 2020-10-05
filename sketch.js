
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3

var groundSprite

var paperBall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paperBall = new Paper(100,400,10);
	
	box1 = new Box (715,650,150,20) 
	box2 = new Box (790,600,20,130)
	box3 = new Box (630,600,20,130)

	groundSprite=new Ground(width/2, height-35, width,10);	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  paperBall.display();
  groundSprite.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){

        Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:15,y:-20});

	}
}



