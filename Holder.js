class Holder {
    constructor(bodyA,pointB)
    {
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:10
    }
    
    this.pointB=pointB;

    
    this.holder=Constraint.create(options)
    World.add(world,this.holder)
    }
    attach(body){
        this.holder.bodyA=body;
    }
    fly (){
        this.holder.bodyA=null   
     }
    
    display() {
        if(this.holder.bodyA){
    var pointA =this.holder.bodyA.position
    var pointB =this.pointB;
   // strokeWeight(5)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    }
    
    }
}