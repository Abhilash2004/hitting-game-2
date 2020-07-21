class Boxes {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height=height;
      
      
      World.add(world, this.body);
       
    }
    display(){
if(this.body.speed<3){

      var pos =this.body.position;
       
      var angle = this.body.angle;
      push();
  
       
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(200,40,180);
      strokeWeight=0
      rect(0,0, this.width, this.height);
      
      pop();
}
else{
  World.remove(world,this.body);
  push();
  this.Visibility=this.Visibility-10
tint(255,this.Visibility);

pop();



}
      
    }
  };
  