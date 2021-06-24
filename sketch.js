const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
rub = new Rubber(560,500,30);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
console.log(rub.body.position.x);
console.log(rub.body.position.y); 
console.log(rub.body.angle);


rub.display();
    plane.display();
    hammer.display();

    
 
}