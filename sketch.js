
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var tree_obj,stone_obj,ground_obj;
var boy_obj;
var mango_obj,mango_obj2,mango_obj3,mango_obj4,mango_obj5;
var constraint,Lstone,Lmango;

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	
	boy_obj=new Boy(200,320,0,0);
	stone_obj=new Stone(130,260,0,0);
	ground_obj=new Ground(600,390,1200,50);
	tree_obj=new Tree(1000,200,0,0);
	mango_obj=new Mango(950,100,40);
	mango_obj2=new Mango(890,150,40);
	mango_obj3=new Mango(1050,50,40);
	mango_obj4=new Mango(1150,170,40);
	mango_obj5=new Mango(1070,150,40);
	constraint=new Constraint_class(stone_obj.body,{x:140,y:270});

	Engine.run(engine);

}


function draw() {
	
	background("yellow");
	Engine.update(engine);
boy_obj.display();
stone_obj.display();
ground_obj.display();
tree_obj.display();
mango_obj.display();
mango_obj2.display();
mango_obj3.display();
mango_obj4.display();
mango_obj5.display(); 
constraint.display();

detectCollision(stone_obj,mango_obj);
detectCollision(stone_obj,mango_obj2);
detectCollision(stone_obj,mango_obj3);
detectCollision(stone_obj,mango_obj4);
detectCollision(stone_obj,mango_obj5);

drawSprites();
}

function keyPressed(){
	if(keyPressed===32){
		Matter.body.setPosition(stone_obj.body,{x:130,y:260})
		constraint.attach(stone_obj.body);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone_obj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    constraint.fly(stone_obj);
}

function detectCollision(Lmango,Lstone){
	mangoBodyPosition=Lmango.body.position;
	stoneBodyPosition=Lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}
}