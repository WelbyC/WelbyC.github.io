class Cloud{
  
  constructor( x, y, size, speed, pic){
    
    this.x = x;
    this.y = y; 
    this.size = size;
    this.speed = speed;
    this.pic = pic;

    
  }
  
  display() {
    
    
  // ear ring
  push();
    stroke(255);
    strokeWeight(1);
    fill(255);
    scale(this.size);
    ellipse(this.x, this.y, 24, 24);
    ellipse(this.x+10,this.y+10,24,24);
    ellipse(this.x+30,this.y+10,24,24);
    ellipse(this.x+30,this.y-10,24,24);
    ellipse(this.x+20,this.y-10,24,24);
    ellipse(this.x+40,this.y,24,24);
    image(this.pic, this.x, this.y-15,75, 50);
  pop();
  push();
    
  pop();
   
  }
 
  move ()
    {
    if (this.x <= 350){

      this.x += this.speed;
    }else {
      this.x = -50;
      this.y = random(0, height/4);
      this.speed = random(1, 5)/5;
      
      floor.velocity.x = this.speed*this.size;
          
    }
    }
  platform(){
    fill(0)
    floor = createSprite(this.x*this.size, this.y*this.size,50,1);
    floor.velocity.x = this.speed;
    floor.scale = this.size;
    
  }
  platformMove(){
    floor.scale = this.size;
    floor.velocity.x = this.speed;
    floor.position.x = this.x*this.size;
    floor.position.y = this.y*this.size;
  }
}