 const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, enemy1;
var ball;
var platform1;
var image1;

function preload(){

}


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(500,370,40,40);
    box2 = new Box(540,370,40,40);
    box3 = new Box(580,370,40,40);

    box4 = new Box(620,370,40,40);
    box5 = new Box(660,370,40,40);
    box6 = new Box(580,290,40,40);

    box7 = new Box(540,330,40,40);
    box8 = new Box(580,330,40,40);
    box9 = new Box(620,330,40,40);
   
    enemy1 = new Enemy(540,330,30,40);
    enemy2 = new Enemy(620,330,30,40);
    ball = new Ball(450,400,40,50);
    
  //  platform1 = new Box(390,30,60,70);
  //  platform2 = new Box(30,0,40,70);

}

function draw(){
    background("white");
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();

    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
   
    enemy1.display();
    enemy2.display();
    ball.display();

   // platform1.display();
   // platform2.display();
}