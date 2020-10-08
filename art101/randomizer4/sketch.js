let lifeButton;
let deathButton;
let fateButton;
let animating = false;
let fates = [
  "Celebrity",
  "Person Dead Early",
  "Teacher",
  "Hater",
  "Villain",
  "Hero",
  "Average Person",
  "Janitor",
  "Sales Clerk",
  "Gamer",
  "Person who gave up",
  "President",
  "Professional Couch Warmer",
  "Successful Dreamer",
  "Scam Artist",
  "Programmer",
  "Veteran",
  "Mentally Disabled",
  "Fighter",
  "Master",
  "Legend",
  "Cripple",
  "Artist",
  "Meme Lord",
  "Myth",
];
let fate = fates[1];
let nameInput;
let count = 0;
let count2 = 0;

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

  nameInput = createInput();
  nameInput.style("display", "block");
  nameInput.style("margin-top", "10px");
  nameInput.hide();

  fateButton = createButton("Fate Button");
  fateButton.style("display", "inline");
  fateButton.style("background-color", "gray");
  fateButton.hide();
}

function draw() {
  lifeButton.mousePressed(randomLife);
  deathButton.mousePressed(randomDeath);
  fateButton.mousePressed(randomFate);
  if (count > 99) {
    nameInput.show();
    fateButton.show();
  }
  if (count > 60 && count < 1000) {
    randomLife();
  }
  if (count2 > 1) {
    randomDeath();
  }
  if (animating === true) {
    fill(255);
    rect(random(width), random(height), random(width / 2), random(width / 2));
    ellipse(random(width), random(height), random(width / 2));
    triangle(
      random(width),
      random(width),
      random(width),
      random(width),
      random(width),
      random(width)
    );
  }
}

function randomLife() {
  textSize(32);
  fill(0, 102, 153);
  text(fates[int(random(0, fates.length - 1))], random(0, 700), random(0, 700));

  text(fates[int(random(0, fates.length - 1))], random(0, 700), random(0, 700));

  text(fates[int(random(0, fates.length - 1))], random(0, 700), random(0, 700));

  count++;
}
function randomDeath() {
  animating = true;
  setTimeout(falsify, 3000);
  count = 0;
  count2 = 0;
}
function randomFate() {
  textSize(25);
  fill(255, 0, 102);
  const name = nameInput.value();

  nameInput.value("");

  text(
    name +
      " will be a " +
      fates[int(random(0, fates.length - 1))] +
      " who has a profession of ",
    0,
    height / 2
  );
  text(
    fates[int(random(0, fates.length - 1))] +
      " while having a history of a " +
      fates[int(random(0, fates.length - 1))],
    0,
    height / 2 + 30
  );
  count2++;
}
function falsify() {
  animating = false;
}
