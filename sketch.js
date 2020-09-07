
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  engine, world;

function setup() {
  createCanvas(1400,420);

  engine = Engine.create();
  world = engine.world;
 
  fruit1 = new mangoes(1005,200,30,40);
  fruit2 = new mangoes(1005,200,30,40);
  fruit3 = new mangoes(1005,200,30,40);
  fruit4 = new mangoes(1005,200,30,40);
  fruit5 = new mangoes(1005,200,30,40);
  Tree = new tree(1005,210,350,350);
  Stone = new stone(500,300);
  Boy = new boy(200,100,20,40);
  ground = new Ground(600,400,2000,40);
  chain = new launcher(Stone.body,{x:100, y:210});

  Engine.run(engine);
}

function draw() {
  background(223,223,223);  
  Engine.update(engine);
  strokeWeight(4);

  ground.display();
  fruit1.display();
  fruit2.display();
  fruit3.display();
  fruit4.display();
  fruit5.display();
  Tree.display();
  Boy.display();
  Stone.display();
  chain.display();

}

function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}