
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  
  function preload()
  {
	
 }
  
  function setup() {
	  createCanvas(800, 700);
  
	  
	  engine = Engine.create();
	  world = engine.world;
  
	  //Create the Bodies Here.
	ground = new Ground(width/2,690,width,20)
	Dustbin = new dustbin(700,650)
	Paper = new paper(100,200,50)
  
  
	  Engine.run(engine);
	
  }
  
  function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:350,y:-350})
	}
  }
  function draw() {
	rectMode(CENTER);
	background("pink")
	Paper.display()
	ground.display()
	Dustbin.display()
	drawSprites();
  }