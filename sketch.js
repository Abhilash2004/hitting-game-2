const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;
  plank1=new Plank(290,600,250,10)
  box1=new Boxes(200,590,30,40) 
  box2=new Boxes(230,590,30,40) 
  box3=new Boxes(260,590,30,40) 
  box4=new Boxes(290,590,30,40) 
  box5=new Boxes(320,590,30,40) 
  box6=new Boxes(350,590,30,40) 
  box7=new Boxes(380,590,30,40) 
 

 
  box8=new Boxes(230,550,30,40) 
  box9=new Boxes(260,550,30,40) 
  box10=new Boxes(290,550,30,40) 
  box11=new Boxes(320,550,30,40) 
  box12=new Boxes(350,550,30,40) 

  box13=new Boxes(260,510,30,40) 
  box14=new Boxes(290,510,30,40) 
  box15=new Boxes(320,510,30,40) 

  box16=new Boxes(290,470,30,40) 

  plank2=new Plank(660,400,130,10)
  box1a=new Boxes(620,370,20,30) 
  box1b=new Boxes(640,370,20,30) 
  box1c=new Boxes(660,370,20,30) 
  box1d=new Boxes(680,370,20,30) 
  box1e=new Boxes(700,370,20,30) 

  box1f=new Boxes(640,330,20,30) 
  box1g=new Boxes(660,330,20,30) 
  box1h=new Boxes(680,330,20,30) 

  box1i=new Boxes(660,300,20,30)

  hexagon=new Hexagon(500,500,60,60)
   
   holder= new Holder(hexagon.body,{x:100,y:300});


Engine.run(engine);
  
}


function draw() {
 
  background(64,31,13);
Engine.update(engine)
 
  plank1.display();
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()

box8.display()
box9.display()
box10.display()
box11.display()
box12.display()

box13.display()
box14.display()
box15.display()

box16.display()

plank2.display()

box1a.display()
box1b.display()
box1c.display()
box1d.display()
box1e.display()

box1h.display()
box1f.display()
box1g.display()

box1i.display()

 hexagon.display()
 
 holder.display(); 



  drawSprites();
 
}

 function mouseDragged () {
Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY})
 }
 

function mouseReleased () {
   holder.fly()
     
}
function keyPressed(){

  if(keyCode==32)
  {
      holder.attach(hexagon.body);
  }
  }
  
  