class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  