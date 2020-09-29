let skin = 0;
let value0 = 72;
let value = 52;
let value2 = 117;
let move = 0;
var clouds = [];
let ohno = ["ninja", "cloud"];

let gravity = 1;
let MARGIN = 50;
let jump = 15;

let player;
let ground;

let left;
let right;

function setup() {
  createCanvas(600, 1000 / 1.5);
  background(200, 100, 100);
  mic = new p5.AudioIn();
  mic.start();
  mic.stop();
  for (var i = 0; i < 8; i++) {
    clouds[i] = new Cloud(
      random(0, width),
      random(0, height / 4),
      random(1, 3),
      random(1, 5) / 5
    );
    clouds[i].platform();
  }

  ground = createSprite(width / 2, height - 40, width + 100, 2);

  player = createSprite(width / 2 - width / 2.6, 0, width / 11, width / 11);
  player.addAnimation("cloud", "aPics/cloud.png");
  player.addAnimation(
    "ninja",
    "aPics/ninja1.png",
    "aPics/ninja2.png",
    "aPics/ninja2.png"
  );
  player.addAnimation(
    "ninjab",
    "aPics/ninjab1.png",
    "aPics/ninjab2.png",
    "aPics/ninjab2.png"
  );
  player.addAnimation("ninjai", "aPics/ninjai.png");
  player.addAnimation("ninjaib", "aPics/ninjaib.png");
  player.addAnimation("ninjaj", "aPics/Jumping.png");
  player.addAnimation("ninjajb", "aPics/Jumpingb.png");

  player.setCollider("circle", 0, 0, 50);

  //when pressing the player, it changes to ninja or cloud
  player.onMousePressed = function () {
    this.changeAnimation(random(ohno));
  };
}

function draw() {
  move++;
  if (move > 600 + MARGIN) {
    move = -400;
  }
  // Create an Audio input
  let vol = mic.getLevel();
  let h = map(vol, 0, 1, 0, width / 2);
  background(value0 + h, value, value2);
  for (var i = 0; i < clouds.length; i++) {
    clouds[i].move();
    clouds[i].display();
    clouds[i].platformMove();

    if (player.collide(floor)) {
      player.velocity.y = 0;
    }
  }

  drawLegsAndEars(150, h, move);
  drawTail(150, h, move);
  drawFace(h, move);

  //eye player controls
  //left, right
  if (keyDown("a")) {
    left = true;
    right = false;
    if (player.velocity.y == 0) {
      if (
        player.getAnimationLabel() == "ninja" ||
        player.getAnimationLabel() == "ninjaib" ||
        player.getAnimationLabel() == "ninjai" ||
        player.getAnimationLabel() == "ninjaj" ||
        player.getAnimationLabel() == "ninjajb"
      ) {
        player.changeAnimation("ninjab");
      }
    }
    player.velocity.x = -2;
  } else if (keyDown("d")) {
    left = false;
    right = true;
    if (player.velocity.y == 0) {
      if (
        player.getAnimationLabel() == "ninjab" ||
        player.getAnimationLabel() == "ninjaib" ||
        player.getAnimationLabel() == "ninjai" ||
        player.getAnimationLabel() == "ninjaj" ||
        player.getAnimationLabel() == "ninjajb"
      ) {
        player.changeAnimation("ninja");
      }
    }

    player.velocity.x = 2;
  } else {
    player.velocity.x = 0;
  }

  //gravity
  player.velocity.y += gravity;

  if (player.collide(ground)) {
    player.velocity.y = 0;
  }

  if (keyWentDown("w")) {
    player.velocity.y = -jump;
    if (
      (player.getAnimationLabel() == "ninjab" &&
        left &&
        !player.collide(ground)) ||
      (player.getAnimationLabel() == "ninjaib" &&
        left &&
        !player.collide(ground)) ||
      (player.getAnimationLabel() == "ninjai" &&
        left &&
        !player.collide(ground)) ||
      (player.getAnimationLabel() == "ninjaj" &&
        left &&
        !player.collide(ground)) ||
      (player.getAnimationLabel() == "ninjajb" &&
        left &&
        !player.collide(ground))
    ) {
      player.changeAnimation("ninjajb");
    }
    if (
      (player.getAnimationLabel() == "ninja" &&
        right &&
        !player.collide(ground)) ||
      (player.getAnimationLabel() == "ninjai" &&
        right &&
        !player.collide(ground)) ||
      (player.getAnimationLabel() == "ninjaj" &&
        right &&
        !player.collide(ground))
    ) {
      player.changeAnimation("ninjaj");
    }
  }
  //ninja idle animation
  if (player.velocity.x == 0 || player.collide(ground)) {
    if (
      (player.getAnimationLabel() == "ninjajb" && player.velocity.y == 0) ||
      (player.getAnimationLabel() == "ninjab" && player.velocity.x == 0)
    ) {
      player.changeAnimation("ninjaib");
    }
    if (
      (player.getAnimationLabel() == "ninjaj" && player.velocity.y == 0) ||
      (player.getAnimationLabel() == "ninja" && player.velocity.x == 0)
    ) {
      player.changeAnimation("ninjai");
    }
  }
  //changes character when clicked in center
  if (player.getAnimationLabel() == "cloud") {
    player.scale = 0.2;
  } else {
    player.scale = 0.5;
  }

  //when sprite reachs edges, it goes back

  for (var i = 0; i < allSprites.length; i++) {
    var s = allSprites[i];
    if (s.position.x < -MARGIN) s.position.x = width + MARGIN;
    if (s.position.x > width + MARGIN) s.position.x = -MARGIN;
    if (s.position.y < -MARGIN) s.position.y = height + MARGIN;
    if (s.position.y > height + MARGIN) s.position.y = -MARGIN;
  }
  drawSprites();
}

function drawLegsAndEars(color, vol, move) {
  let t1;
  let t2;
  let t3;
  let t4;
  let tt;
  let tt2;
  fill(color + skin);
  if (
    (move < -250 && move > -300) ||
    (move < -150 && move > -200) ||
    (move < -50 && move > -100) ||
    (move < 50 && move > 0) ||
    (move < 150 && move > 100) ||
    (move < 250 && move > 200) ||
    (move < 350 && move > 300) ||
    (move < 450 && move > 400)
  ) {
    //back ear
    triangle(
      180 + vol + move,
      100 + 250,
      280 + vol + move,
      10 + 250,
      280 + vol + move,
      100 + 250
    );
    //back legs
    t1 = triangle(
      160 + vol + move,
      300 + 250,
      190 + vol + move,
      380 + 250,
      200 + vol + move,
      310 + 250
    );
    t2 = triangle(
      280 + vol + move,
      310 + 250,
      290 + vol + move,
      380 + 250,
      320 + vol + move,
      300 + 250
    );
    //body
    circle(width / 2.5 + vol + move, 450, width / 2);
    //front legs
    t3 = triangle(
      160 + vol + move,
      300 + 250,
      140 + vol + move,
      380 + 250,
      195 + vol + move,
      310 + 250
    );
    t4 = triangle(
      280 + vol + move,
      310 + 250,
      340 + move,
      380 + 250,
      320 + vol + move,
      300 + 250
    );
  } else {
    //back ear
    triangle(
      180 + vol + move,
      100 + 250,
      280 + vol + move,
      10 + 250,
      280 + vol + move,
      100 + 250
    );
    //back legs
    t1 = triangle(
      160 + vol + move,
      300 + 250,
      140 + vol + move,
      380 + 250,
      195 + vol + move,
      310 + 250
    );
    t2 = triangle(
      280 + vol + move,
      310 + 250,
      340 + move,
      380 + 250,
      320 + vol + move,
      300 + 250
    );
    //body
    circle(width / 2.5 + vol + move, 450, width / 2);
    //front legs
    t3 = triangle(
      160 + vol + move,
      300 + 250,
      190 + vol + move,
      380 + 250,
      200 + vol + move,
      310 + 250
    );
    t4 = triangle(
      280 + vol + move,
      310 + 250,
      290 + vol + move,
      380 + 250,
      320 + vol + move,
      300 + 250
    );
  }
}

function drawTail(color, vol, move) {
  fill(color + skin);
  beginShape();
  vertex(91 + vol + move, 220 + 250);
  bezierVertex(
    0 + vol + move,
    200 + 250,
    50 + vol + move,
    105 + 250,
    30 + vol + move,
    105 + 250
  );
  bezierVertex(
    60 + vol + move,
    100 + 250,
    80 + vol + move,
    215 + 250,
    90 + vol + move,
    210 + 250
  );
  (move < -150 && move > -100) || endShape();
}

function drawFace(vol, move) {
  //eye
  fill(153, 255, 255);
  circle(width / 1.875 + vol + move, width / 3.15789473684 + 250, width / 15);
  //pupil
  fill(10 + vol);
  rect(315 + vol + move, 180 + 250, 20 + vol, 20);
  //ears
  fill(150 + vol + skin);
  triangle(
    165 + vol + move,
    100 + 250,
    265 + vol + move,
    10 + 250,
    265 + vol + move,
    100 + 250
  );
  fill(255, 153, 204);
  triangle(
    195 + vol + move,
    90 + 250,
    255 + vol + move,
    35 + 250,
    255 + vol + move,
    90 + 250
  );
  //mouth
  triangle(
    350 + vol + move,
    250 + 250,
    355 + vol + move,
    300 + 250,
    380 + vol + move,
    250 + 250
  );
}

function mouseClicked() {
  if (value < 156) {
    value0 = 224;
    value = 255;
    value2 = 255;
    skin = 255;
  } else {
    value0 = 72;
    value = 52;
    value2 = 117;
    skin = 0;
  }
}
