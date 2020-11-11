class Paper {  
    constructor(x, y){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic' : false
        }
        
        this.body = Bodies.circle(x,y,23,options);
        this.image = loadImage("paper23.png");
        World.add(world, this.body);
        
       
        
   }
   display(){
    push();
    var pos = this.body.position;
    translate(pos.x,pos.y);
    imageMode(CENTER);
    fill("white");
    image(this.image,0,0,200,200);
    pop();
   }
}