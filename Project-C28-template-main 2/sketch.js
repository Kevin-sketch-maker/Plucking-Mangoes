
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var groundObject;
var world;
var tree1;
var mango1, mango2, mango3, mango4, mango5;
var boy1;
var stone1;
var launcherObject;
var launcherForce = 100;

//Declare launcherObject and launchForce variable here


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  boy1 = createSprite(160,500)
	boy1.addImage("boy1",boy)
  boy1.scale = 1/10
	groundObject=new Ground(width/2,600,width,20);
  //create launcherObject here
  mango1 = new Mango(700,200,30,30);
  mango2 = new Mango(500,200,30,30);
  mango3 = new Mango(450,200,30,30);
  mango4 = new Mango(600,200,30,30);
  mango5 = new Mango(550,200,30,30);
  testmango = new Mango(290,490,30,30);
  stone1 = new Stone(250,465,20);
  tree1 = new Tree(600,300,400,600)
  launcherObject = new Launcher(stone1.body,{x:120,y:460})
  

	Engine.run(engine);
}

function draw() {

  background(230);
  
  text(mouseX + "," + mouseY, mouseX, mouseY)
  groundObject.display();
  // display launcher object here
  tree1.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  testmango.display()
  stone1.display()
  detectCollision(stone1, mango1)
  detectCollision(stone1, mango2)
  detectCollision(stone1, mango3)
  detectCollision(stone1, mango4)
  detectCollision(stone1, mango5)

  drawSprites()
  launcherObject.display()

  
}
function mouseDragged() {
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})

}
function mouseReleased() {
launcherObject.fly()

}

function detectCollision(stoneL, mangoL) {
mangoPosition = mangoL.body.position
stonePosition = stoneL.body.position
var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)
if(distance<=mangoPosition.r+stonePosition.r)
{
  Matter.Body.setStatic(mangoPosition.body, false)
}

}


