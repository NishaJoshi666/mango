class tree{
  constructor(x, y, width, height) {
      var options = {  
        restitution :0.4,
        friction :0.0,
    }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("image/tree.png")
      World.add(world, this.body);

    }
    display(){
      image(this.image,800,125,500,300);

      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);

     
      pop();
    }
}