

var x, y, x1, y1, x2, y2,x3,y3;
let n1, n2, n3, n4;
let bubble1,bubble2,bubble3,bubble4;
let count =0;
let viral1, viral2, viral3, viral4;
var virus;
var MARGIN = 100;
var sprites;
let goneViral;
let virusCounter;
let counter = 0;
let song;
let xx = 3000;
let speed=0;
let knuckle;
let fast = false;
let toofast = false;
function preload(){

song = loadSound('Running90s.mp3');
song.setVolume(0.06);


viral2 = loadImage('viral2.png');
viral3 = loadImage('viral3.png');
uhoh = loadImage('uhoh.jpg');
ugandan = loadImage('ugandan.png');
harambe = loadImage('harambe.jpg');
lamb = loadImage('lamb.png');
mark = loadImage('mark.png');
knuckles = loadImage('knuckles.jpg');
knuckles2 = loadImage('knuckles2.jpg');
flat = loadImage('flat.jpg');
tired = loadImage('tired.jpg');
doctor = loadImage('doctor.jpg');
}
function setup(){

	createCanvas(2850, 1461);
	
	setTimeout(startSketch,5500);
	song.play();
  
}


function startSketch() {
	goneViral = false;
	virusCounter = 0;


	virus = createSprite(width/2,0,150,100);
	virus.addAnimation("virus","virus_0.png","virus_1.png","virus_1.png");
	virus.setCollider("circle",0,0,50);
	x = 90;
	virus.setSpeed(1.5, x);
 

 sprites = new Group();

for(var i = 0; i<300; i++) {
var ang = random(360);
var px = width/2 + 1000 * cos(radians(ang));
var py = height/2+ 1000 * sin(radians(ang));
createPixels(3, px, py);

}




viral1 = createVideo(['viral1.mov','viral1.mp4']);
viral1.hide(); 
viral1.volume(0);                 
viral1.loop();

viral4 = createVideo(['viral4.mov','viral4.mp4']);
viral4.hide(); 
viral4.volume(0);                 
viral4.loop();



}

function draw(){
background(0);
x=x+random(-1,1);


image(mark,width/2-800,height/2-400, 400, 400); 

image(lamb,width/2+400,height/2-400,400,400);

image(ugandan,width/2-800,height/2,400,600); 

image(harambe,width/2+400,height/2,400, 600);



if(goneViral == true){
image(viral1,width/2-400,height/2-400, 400, 400); 

image(viral2,width/2,height/2-400,400,400);

image(viral3,width/2-400,height/2,400,400); 

image(viral4,width/2,height/2,400, 400);

}



if (speed >3||speed<-6)
{
fast =true;
}
if (fast==true){
image(tired,width/2+800,height/2-400,500,400);
image(flat,width/2-1200,height/2-400,400, 400);
image(uhoh,width/2-1250,height/2,500, 600);
image(doctor,width/2+800,height/2,500, 700);
}


console.log(width,height);

 if (xx <= -590) {
    knuckle = knuckles2;
    speed = speed+3;
  } else if (xx >= width+100) {
    knuckle = knuckles;
    speed = -speed-3;
  }

 image(knuckle, xx, height/2,400,200 );
 image(knuckle, xx+500, height/2+400,400,200 );
 image(knuckle, xx+600, height/2-400,400,200 );
 image(knuckle, xx+900, height/2+300,400,200 );
 image(knuckle, xx+900, height/2-700,400,200 );
 image(knuckle, xx+1200, height/2-300,400,200 );
 image(knuckle, xx+550, height/2-50,400,200 );
  xx = xx + speed;

if(goneViral==true){
	fill('red');
	textSize(50);
	text("Zoo tries to stop Harambe meme", width/2+200,height/2-400);
	text("He can not be stopped!", width/2+200,height/2-200);
	fill('green');
	textSize(50);
	text("Listen here kid... I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills.  I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo... suka blet", width - counter,height/2);
	counter = counter+20;
	fill('red');
	textSize(60);
	text("DO you no Da Wae?", random(200, 800),random(200, 800));
	fill('blue');
	textSize(50);
	text("Where is the queen?", random(200, 800),random(200, 800));

}




/*
if (speed >12||speed<-12)
{
toofast == true;
}
//if(toofast == true){
*/
//}
  for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
  if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
  if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
  if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
 // console.log(s.getAnimationLabel());
  }
  
 
 
  for(var i=0; i<allSprites.length; i++) {
  var a = allSprites[i];
  	for(var j=0; j<allSprites.length; j++){
	var b = allSprites[j];
 	if(a.getAnimationLabel()=="virus"&&b.getAnimationLabel()!="virus") 
 	{
 		if(a.overlap(b)) b.changeAnimation(virus.getAnimationLabel());
 	}



 // console.log(s.getAnimationLabel());
  }
}
//console.log(a.getAnimationLabel());



for (i=0;i<allSprites.length;i++){

    if("virus" === allSprites[i].getAnimationLabel()){
        virusCounter += 1;
    }
    if(virusCounter >= allSprites.length){
    	goneViral = true;
	}
    else
    {
    	goneViral = false;
	}

}
//console.log(virusCounter);
virusCounter = 0;
//console.log(goneViral);

drawSprites();

//console.log(goneViral);
}

function createPixels(type, x, y) {
 
let numberChoices = ['laugh','mystery','ninja'];
let ohno = ['laugh','mystery','ninja','virus'];

//console.log(r);
var a = createSprite(x, y);

 

a.addAnimation('laugh','laugh1.png','laugh0.png','laugh0.png'); 
a.addAnimation('mystery','mystery1.png','mystery0.png','mystery0.png');
a.addAnimation('ninja','ninja0.png','ninja1.png','ninja2.png','ninja2.png');
a.addAnimation('virus','virus_0.png','virus_1.png','virus_1.png');
 

a.changeAnimation(random(numberChoices));

  a.onMousePressed = function() {
  this.changeAnimation(random(ohno));
  this.animation.goToFrame(this.animation.getLastFrame());
  }
  

a.setSpeed(3-(type/2), random(360));
a.rotationSpeed = .5;
  //a.debug = true;
a.type = type;
  
if(type == 2)
    a.scale = .6;
if(type == 1)
    a.scale = .3;
  
a.mass = 2+a.scale;
a.setCollider("circle", 0, 0, 50);
sprites.add(a);

return a;

} 

function allVirus(){
	//display text
goneViral =false;
setTimeout(startSketch,5000);

}