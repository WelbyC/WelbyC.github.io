let lifeButton;
let deathButton;
let animating = false;
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
  "Scam Artist",
  "Programmer",
  "Veteran",
  "Disabled",
  "Fighter",
  "Master",
  "Legend",
];
let fate = fates[1];

function setup() {
  createCanvas(800, 800);
  background(255);
  lifeButton = createButton("Life Button");
  lifeButton.style(
    "background-image",
    "linear-gradient(to right, cyan, yellow)"
  );
  lifeButton.size(100, 50);
  deathButton = createButton("Erase");
  deathButton.style(
    "background-image",
    "linear-gradient(to right, black, red)"
  );
  deathButton.style("color", "white");
  deathButton.size(100, 50);
}

function draw() {
  lifeButton.mousePressed(randomLife);
  deathButton.mousePressed(randomDeath);

  if (animating === true) {
    fill(255);
    rect(random(width), random(height), random(width / 2), random(width / 2));
    ellipse(random(width), random(height), random(width / 2));
  }
}

function randomLife() {
  textSize(32);
  text(fates[int(random(0, fates.length - 1))], random(0, 700), random(0, 700));
  fill(0, 102, 153);
  text(fates[int(random(0, fates.length - 1))], random(0, 700), random(0, 700));
  fill(0, 102, 153);
  text(fates[int(random(0, fates.length - 1))], random(0, 700), random(0, 700));
  fill(0, 102, 153);
}
function randomDeath() {
  animating = true;
  setTimeout(falsify, 3000);
}
function falsify() {
  animating = false;
}
