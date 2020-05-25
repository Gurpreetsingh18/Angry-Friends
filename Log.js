class Log extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    var options = {
      isStatic: true,
      friction:0.8,
      restituion:0.7,
      stiffness:1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);

  }

  display(){
    super.display();
    rectMode(CENTER);
    fill("blue");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
  }
    
  };
  