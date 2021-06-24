class Rubber{
	constructor(x,y,radius)
	{
var a = {
	'restitution':0.8,
    'friction':0.3,
    'density':1.0
}
	// assign options to the rubber ball
	this.body=Matter.Bodies.circle(x,y,radius,a)
		this.x=x;
		this.y=y;
		this.r=radius;
		World.add(world, this.body);
        console.log(this.body)
	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
		    rotate(this.body.angle)
			strokeWeight(5);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipseMode(0,0,this.radius,this.radius)
            ellipse(0,0,this.radius)
			pop()
	}

}