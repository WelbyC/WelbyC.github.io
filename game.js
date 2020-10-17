var MARGIN = 44;
let virus;
let ground;
let platform3;
let gravity = 1;
let jump = 15;
var entered = 0;



function setup(){

	createCanvas(windowWidth, windowHeight-100);
    background("#f5f5f5");
    document.body.style.backgroundColor = "#001c49";
	let numberChoices = ['laugh','mystery','ninja'];
	let ohno = ['laugh','mystery','ninja','virus'];
    

  
    //ground and platform sprites aka lines with color
	ground = createSprite(width / 2, height - 50, width +100, 2);
    platform3 = createSprite(width / 2 +width/2.6, height - height/4.2, width/11, 10);
    platform2 = createSprite(width / 2, height - height/4.2, width/11, 10);
    platform1 = createSprite(width / 2 -width/2.6, height - height/4.2, width/11, 10);
    ground.shapeColor = color(0);
    //door sprite leading to github
    door = createSprite(width/2,height - height/2.8 ,width/11,width/11);
    door.addAnimation('closedDoor','sprite0.png');
    door.addAnimation('openDoor','sprite1.png');
    door.setCollider("rectangle",0,0,50,50);
    door.scale = 0.8;

    //player sprite that can be a variety of things
	virus = createSprite(width / 2 -width/2.6,0,width/11,width/11);
	virus.addAnimation("virus","portfolio/3A/virus_0.png","portfolio/3A/virus_1.png","portfolio/3A/virus_1.png");	
	virus.addAnimation('laugh','portfolio/3A/laugh1.png','portfolio/3A/laugh0.png','portfolio/3A/laugh0.png'); 
	virus.addAnimation('mystery','portfolio/3A/mystery1.png','portfolio/3A/mystery0.png','portfolio/3A/mystery0.png');
	virus.addAnimation('ninja','portfolio/3A/ninja0.png','portfolio/3A/ninja1.png','portfolio/3A/ninja2.png','portfolio/3A/ninja2.png');
	virus.addAnimation('ninjab','portfolio/3A/ninjab0.png','portfolio/3A/ninjab1.png','portfolio/3A/ninjab2.png','portfolio/3A/ninjab2.png');
	virus.addAnimation('virus','portfolio/3A/virus_0.png','portfolio/3A/virus_1.png','portfolio/3A/virus_1.png');
 
	virus.velocity.x = 0;
	virus.changeAnimation(random(numberChoices));

  	virus.onMousePressed = function() {
  	this.changeAnimation(random(ohno));

	}

	virus.setCollider("circle",0,0,50);

    //this hole sprite leads to art portfolio
	hole = createSprite(width - width/8.6,height - height/3,200,150);
	hole.addAnimation('hole','portfolio/3A/hole0.png','portfolio/3A/hole1.png','portfolio/3A/hole2.png','portfolio/3A/hole3.png');
    hole.setCollider("circle",0,0,0,25);
    




  
}




function draw(){
background(255);
	textSize(width/50);
	text("Controls: W,A,S,D to move to a door or portal", width/2-width/5,height-height/1.1);
    textSize(width/80);
    text("Infinite Jumps", width/2-width/26,height-height/1.15);
    textSize(width/80);
	text("Click on character to change", width/2-width/13,height-height/1.20);
    textSize(width/80);
    text("GitHub", width/2.07,height - height/2);
    textSize(width/80);
    text("Art Porfolio", width - width/7,height-height/2);
	textSize(width/80);

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

    if (virus.collide(ground)||virus.collide(platform3)||virus.collide(platform2)||virus.collide(platform1)) {
        virus.velocity.y = 0;
        //virus.changeAnimation("virus");
    }


    if (keyWentDown("w")) {
      //  virus.changeAnimation("jumping");
        virus.animation.rewind(); //not sure why this is in example - sprite animation backwards?
        virus.velocity.y = -jump;
    }

    //check collision boxes

    if(virus.overlap(hole))
    if(entered == 0)
    {
        {window.location.href ="https://welbyc.github.io/portfolio/index.html"}
        entered = 1;
    }
    if(virus.overlap(door)){
    door.changeAnimation('openDoor');
    if(entered == 0)
    {
        setTimeout(window.location.href ="https://github.com/WelbyC",1500);
        entered = 1;
    }
    }
    else
  door.changeAnimation('closedDoor');


  for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
  if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
  if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
  if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
}


drawSprites();


}