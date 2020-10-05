class Paper {
    constructor(x ,y,diameter){
        var options = {
            isStatic : false,
            restituton:0.3,
            friction : 0.5,
            density :1.2
        }
        this.body=Bodies.circle(x,y,diameter,options);
        this.diameter=diameter;
        World.add(world,this.body); 

    }
    display(){
        push()
        fill("blue");
        ellipseMode(RADIUS);
        translate(this.body.position.x,this.body.position.y);
        ellipse(0,0,this.diameter,this.diameter);
        pop()
    }
}