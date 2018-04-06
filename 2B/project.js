
// for red, green, and blue color values
var r, g, b;
var r1, g1, b1;
var r2, g2, b2;
var r3, g3, b3;
var x, y, x1, y1, x2, y2,x3,y3;
let n1, n2, n3, n4;
let bubble1,bubble2,bubble3,bubble4;

//var Y_AXIS = 1;
//var X_AXIS = 2;
//var b1, b2, c1, c2;

function setup() {
  createCanvas(800, 800);
  // Pick colors randomly
  
  r = random(255);
  g = random(255);
  b = random(255);

  r1 = random(255);
  g1 = random(255);
  b1 = random(255);
  
  r2 = random(255);
  g2 = random(255);
  b2 = random(255);
  
  r3 = random(255);
  g3 = random(255);
  b3 = random(255);


  x = width / 2;
  x1 = width / 2;
  x2 = width;
  x3 = 0;

  y = height;
  y1 = 0;
  y2 = height/2;
  y3 = height/2;

  bubble1 = new Bubble(x,y,200,200);
  bubble2 = new Bubble(x1,y1,200,200);

  bubble3 = new Bubble(x2,y2,200,200);

  bubble4 = new Bubble(x3,y3,200,200);

  
}

function draw() {
  background(0);
  //setGradient(0, 0, 1200, 1200, c1, c2, Y_AXIS);

bubble1.make(r,b,g);
bubble2.make(r1,b1,g1);
bubble3.make(r2,b2,g2);
bubble4.make(r3,b3,g3);

bubble1.move(-10, 10, -5, 7);
bubble2.move(-10, 10, -7, 5);
bubble3.move(-7, 5, -10, 10);
bubble4.move(-5, 7, -10, 10);
  
  // Reset to the bottom
  if (bubble1.y < 0) {
  bubble1.y = height;
  r = random(255);
  g = random(255);
  b = random(255);
  }
  if (bubble1.x < 0) {
   bubble1.x = width;
  r = random(255);
  g = random(255);
  b = random(255);

  }
  if (bubble1.x > width) {
  bubble1.x = 0;
  r = random(255);
  g = random(255);
  b = random(255);
  }

  if (bubble2.y > height) {
  bubble2.y = 0;
  r1 = random(255);
  g1 = random(255);
  b1 = random(255);
  }
  if (bubble2.x < 0) {
  bubble2.x = width;
  r = random(255);
  g = random(255);
  b = random(255);
  }
  if (bubble2.x > width) {
  bubble2.x = 0;
  r3 = random(255);
  g3 = random(255);
  b3 = random(255);
  }


  if (bubble3.x < 0) {
   bubble3.x = width;
  r3 = random(255);
  g3 = random(255);
  b3 = random(255);
  if (bubble3.y < 0) {
  bubble3.y = width;
  r = random(255);
  g = random(255);
  b = random(255);
  }
  if (bubble3.y > width) {
  bubble3.y = 0;
  r3 = random(255);
  g3 = random(255);
  b3 = random(255);
  }

  }
  if (bubble4.x > width) {
  bubble4.x = 0;
  r3 = random(255);
  g3 = random(255);
  b3 = random(255);
  }
  if (bubble4.y < 0) {
  bubble4.y = width;
  r = random(255);
  g = random(255);
  b = random(255);
  }
  if (bubble4.y > width) {
  bubble4.y = 0;
  r3 = random(255);
  g3 = random(255);
  b3 = random(255);
  }

  if(bubble2.intersects(bubble1)){
  r1 = r;
  g1 = g;
  b1 = b
  }
  if(bubble3.intersects(bubble1)){
  r2 = r;
  g2 = g;
  b2 = b
  }
  if(bubble4.intersects(bubble1)){
  r3 = r;
  g3 = g;
  b3 = b
  }
  

  
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, bubble1.x, bubble1.y);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }

      var h = dist(mouseX, mouseY, bubble2.x, bubble2.y);
  if (h < 100) {
    // Pick new random color values
    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
}
      var f = dist(mouseX, mouseY, bubble3.x, bubble3.y);
  if (f < 100) {
    // Pick new random color values
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
}
      var g = dist(mouseX, mouseY, bubble4.x, bubble4.y);
  if (g < 100) {
    // Pick new random color values
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
  }
}
class Bubble{
  constructor(x,y,n,m) {
    this.x = x;
    this.y = y;
    this.n = n;
    this.m = m;
}

  intersects(other) {
    let distance = dist(this.x, this.y, other.x, other.y);
    return ( distance < 200 );

  }
  make(r,g,b) {  
  this.r = r;
  this.g = g;
  this.b = b;

  strokeWeight(2);
  stroke(this.r, this.g, this.b);
  fill(this.r, this.g, this.b, 127);
  ellipse(this.x, this.y, 200, 200);
}
  move(n1,n2,n3,n4) {
  this.n1 = n1;
  this.n2 = n2;  
  this.n3 = n3;  
  this.n4 = n4;    
  this.x = this.x + random(this.n1,this.n2);
  this.y = this.y - random(this.n3,this.n4);

  }
}
 /* function setGradient(a, t, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = t; i <= t+h; i++) {
      var inter = map(i, t, t+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(a, i, a+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = a; i <= a+w; i++) {
      var inter = map(i, a, a+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, t, i, t+h);
    }
  }
  */
