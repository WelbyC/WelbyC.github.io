
// for red, green, and blue color values
var r, g, b;
var r1, g1, b1;
var r2, g2, b2;
var r3, g3, b3;
var x, y, x1, y1, x2, y2,x3,y3;
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
  
}

function draw() {
  background(0);
  //setGradient(0, 0, 1200, 1200, c1, c2, Y_AXIS);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(x, y, 200, 200);

  stroke(r1, g1, b1);
  fill(r1, g1, b1, 127);
  ellipse(x1, y1, 200, 200);

  stroke(r2, g2, b2);
  fill(r2, g2, b2, 127);
  ellipse(x2, y2, 200, 200);
  
  stroke(r3, g3, b3);
  fill(r3, g3, b3, 127);
  ellipse(x3, y3, 200, 200);

   // Jiggling randomly on the horizontal axis
  x = x + random(-10, 10);
  x1 = x1 + random(-10, 10);
  x2 = x2 + random(-7, 5);
  x3 = x3 + random(-5, 7);

  // Moving up at a constant speed
  y = y - random(-5, 7);
  y1 = y1 - random(-7, 5);
  y2 = y2 - random(-10, 10);
  y3 = y3 - random(-10, 10);
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  r = random(255);
  g = random(255);
  b = random(255);
  }
   if (y1 > height) {
    y1 = 0;
  r1 = random(255);
  g1 = random(255);
  b1 = random(255);
  }
   if (x2 < 0) {
    x2 = width;
  r2 = random(255);
  g2 = random(255);
  b2 = random(255);

  }
   if (x3 > width) {
    x3 = 0;
  r3 = random(255);
  g3 = random(255);
  b3 = random(255);
  }

  
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, x, y);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }

      var h = dist(mouseX, mouseY, x1, y1);
  if (h < 100) {
    // Pick new random color values
    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
}
      var f = dist(mouseX, mouseY, x2, y2);
  if (f < 100) {
    // Pick new random color values
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
}
      var g = dist(mouseX, mouseY, x3, y3);
  if (g < 100) {
    // Pick new random color values
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
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
