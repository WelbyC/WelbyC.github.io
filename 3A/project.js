
var MARGIN = 100;
let virus;
let ground;
let ground2;
let gravity = 1;
let jump = 15;



function setup(){

	createCanvas(800, 800);
	
	let numberChoices = ['laugh','mystery','ninja'];
	let ohno = ['laugh','mystery','ninja','virus'];


	ground = createSprite(width / 2, height - 50, width +100, 2);
	ground2 = createSprite(width / 2+300, height - 200, width/5-50, 10);
    ground.shapeColor = color(0);

	virus = createSprite(200,0,150,100);
	virus.addAnimation("virus","virus_0.png","virus_1.png","virus_1.png");	
	virus.addAnimation('laugh','laugh1.png','laugh0.png','laugh0.png'); 
	virus.addAnimation('mystery','mystery1.png','mystery0.png','mystery0.png');
	virus.addAnimation('ninja','ninja0.png','ninja1.png','ninja2.png','ninja2.png');
	virus.addAnimation('ninjab','ninjab0.png','ninjab1.png','ninjab2.png','ninjab2.png');
	virus.addAnimation('virus','virus_0.png','virus_1.png','virus_1.png');
 
	virus.velocity.x = 0;
	virus.changeAnimation(random(numberChoices));

  	virus.onMousePressed = function() {
  	this.changeAnimation(random(ohno));

	}

	virus.setCollider("circle",0,0,50);


	hole = createSprite(700,height - 270,150,100);
	hole.addAnimation('hole','hole0.png','hole1.png','hole2.png','hole3.png');
	hole.setCollider("circle",0,0,0.1);


  
}




function draw(){
background(255);
	textSize(50);
	text("W,A,S,D to move", width/2,100);
	textSize(25);
	text("Endless pit of dank memes", width/2+60,height - 350);
	textSize(25);
	text("----->", width/2+ 100,height - 230);
    //eye player controls
    //left, right
    if (keyDown("a")) {
    	if (virus.getAnimationLabel() == "ninja"){
        virus.changeAnimation("ninjab");
	}
        virus.velocity.x = -2;
    } else if (keyDown("d")) {
    	if (virus.getAnimationLabel() == "ninjab"){
        virus.changeAnimation("ninja");
	}
        virus.velocity.x = 2;
    } else {
        virus.velocity.x = 0;
      //a  virus.changeAnimation("virus");
    }

    //jump
    virus.velocity.y += gravity;

    if (virus.collide(ground)||virus.collide(ground2)) {
        virus.velocity.y = 0;
        //virus.changeAnimation("virus");
    }

    if (keyWentDown("w")) {
      //  virus.changeAnimation("jumping");
        virus.animation.rewind(); //not sure why this is in example - sprite animation backwards?
        virus.velocity.y = -jump;
    }

    //check collision boxes

    if(virus.overlap(hole)){window.location.href ="https://welbyc.github.io/3B/index.html"}

  for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
  if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
  if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
  if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
}


drawSprites();


}

