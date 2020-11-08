let skin = 0;
let value0 = 72;
let value = 52;
let value2 = 117
let move = 0;
let wind
var clouds = [];
let win = false;
let sickkid = false;




let gravity = 1;
let MARGIN = 50;
let jump = 15;

let player;
let antimasker;
let masker;
let oldman;
let kid;
let ground;

let left;
let right;

function setup() {
  wind = loadImage('wind.png');
  antimasker = loadImage('anti-masker.png');
  createCanvas(600, 1000 / 1.5);
  background(200, 100, 100);

  for (var i = 0; i < 12; i++) {
    clouds[i] = new Cloud(random(0, width), random(0, height / 3), random(1, 3), random(1, 5) / 5, wind);
    clouds[i].platform();
  }

  ground = createSprite(width / 2, height - 70, width + 100, 3);
  masker = createSprite(80, 80, width / 11, width / 11);
  masker.addAnimation("masker","masker.png");	
  masker.setCollider("circle",0,0,100);
  oldman = createSprite(width - width / 8, 80, width / 11, width / 11);
  oldman.addAnimation("old","old-man.png");	
  oldman.addAnimation("dead","dead.png");	
  oldman.setCollider("circle",0,0,100);
  kid = createSprite(width/2, 80, width / 11, width / 11);
  kid.addAnimation("kid","kid.png");	
  kid.addAnimation("sick","sick.png");	
  kid.setCollider("circle",0,0,100);
  player = createSprite(width / 2 - width / 2.9, height-100, width / 11, width / 11);
  player.addAnimation("virus","virus_0.png","virus_1.png","virus_1.png");	


  player.setCollider("circle", 0, 0, 50);

  //when pressing the player, it changes to ninja or cloud

}

function draw() {
  
  
  move++;
  if (move > width + MARGIN) {
    move = -400;
  }


  background(value0, value, value2);
  for (var i = 0; i < clouds.length; i++) {
    clouds[i].move();
    clouds[i].display();
    clouds[i].platformMove();

    if (player.collide(floor)) {
      player.velocity.y = 0;

    }
  }



  

  //eye player controls
  //left, right
  if (keyDown("a")) {

    player.velocity.x = -2;
  } else if (keyDown("d")) {

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

    }
  if(win){
    text("Grats you kills some kid's beloved grandpa", width/4, height/1.5);
  }
  if(sickkid){
    text("After returning home, the kid you infected also infected his loving grandpa", width/4, height/2.5);
  }
  
  textSize(20);
  text("Some kid's grandpa",  410, 200);
  text("Some kid's parent", 10, 200);
  text("Some kid", 250, 200);
  if(win){
    textSize(40);
    text("YOU WIN", width/4, height/2);
  }
  //character scales

    player.scale = 0.5;
    masker.scale = 0.5;
    oldman.scale = 0.5;
    kid.scale = 0.5;
  
  
  //collision
  player.collide(masker)
  if(player.overlap(oldman)){
    oldman.changeAnimation("dead")
    win = true;
    
  }
    
  if(player.overlap(kid)){
    kid.changeAnimation("sick");
    oldman.changeAnimation("dead")
    win = true;
    sickkid = true;
    
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
  image(antimasker,0,590,100,100);
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
    value2 = 117
    skin = 0;
  }
}