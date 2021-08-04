class particle{
    constructor(){
var options = {
    restitution : 0.8,
    density :1.0,
    isStatic : false

}
this.body = Bodies.Cirlce(x,y,10,options);
this.radius = radius;
World.add(world,this.body);




    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        this.color = color(random(0,255),random(0,255),random(0,255));
        ellipse(pos.x,pos.y,this.radius,this.radius);
        
        
        pop();






    }
}