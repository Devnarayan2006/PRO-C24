class hammer{
  constructor(x,y,width,height,angle) {
    var options = {
        'density':2,
        'friction': 1.0,
        'restitution': 0.5,
    };
  }
  display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y)
      rotate(angle);
      pop();
  }
  
    
}
    
