 const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, enemy1;
var backgroundImg;
var ball;
var platform1;
var image1;
//var slingShot;
var bg = "bg.png";

function preload(){
  getBackgroundImg();

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
    //slingShot = new SlingShot();

}

function draw(){
  if(backgroundImg)
    background(backgroundImg);

    
    
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
    //slingShot.display();
}

function mouseDragged(){
     Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}


 async function getBackgroundImg(){
    var response =   await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour>=06 && hour<=19){
        bg = "bg1.png";
    }
    else{
        bg = "bg.png";
    }

    text("Time: " + hour,700,50);
    textSize(15);
    stroke(10);

    text("Time left to change frame above" + hour == 24>19);
    textSize(15);
    stroke(10);

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}