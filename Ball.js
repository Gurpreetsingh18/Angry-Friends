class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,20,20);
    var options ={
      isStatic: true,
      restitution: 0.7,
      friction: 0.1,
      density: 1.0
    }
    this.image = loadImage("friend.png");
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 40;
    World.add(world,this.body);
    this.body = this.image;
     }
   
  
  display(){
    imageMode(CENTER);
    image(this.image,200,300,40,50);
  }
}