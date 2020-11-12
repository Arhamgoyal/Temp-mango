class Mango {
    constructor(x, y,r) {
      var options = {
          'restitution':0,
          'friction':1,
          'isStatic':true
      } 
     
      this.x = x;
      this.y = y;
      this.r = r;
     
      this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
      World.add(world, this.body);
      this.image = loadImage("mango.png");
   }
    display(){
      var Pos =this.body.position;
      push();
      translate(Pos.x, Pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, 50, 50);
      pop();
    }
  };
  