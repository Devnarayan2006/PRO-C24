
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var stone1,rubber1;

function preload()
{
	
}

function setup() {
    createCanvas(800, 800);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1 = new hammer(200,200,30,30);
	stone1 = new stone(400,400,20,20);


	Engine.run(engine);
  
}


function draw() {
  background("white"); 

  rectMode(CENTER);


  
  
  drawSprites();
 
}



