let button;
let fates = [
  "Celebrity",
  "Dead Early",
  "Teacher",
  "Hater",
  "Villain",
  "Hero",
  "Average",
  "Janitor",
  "Sales Clerk",
  "Gamer",
  "Gave up",
  "President",
  "Professional Couch Warmer",
  "Successful",
];
let fate = fates[1];

function setup() {
  createCanvas(800, 800);
  background(255);
  button = createButton("Life Button");
  button.position(19, 19);
}

function draw() {
  button.mousePressed(randomLife);
}

function randomLife() {
  textSize(32);
  text(fates[int(random(0, 14))], random(50, 750), random(50, 750));
  fill(0, 102, 153);
  text(fates[int(random(0, 14))], random(50, 750), random(50, 750));
  fill(0, 102, 153);
  text(fates[int(random(0, 14))], random(50, 750), random(50, 750));
  fill(0, 102, 153);
}
