

var x, y, x1, y1, x2, y2,x3,y3;
let n1, n2, n3, n4;
let bubble1,bubble2,bubble3,bubble4;
let count =0;
let viral1, viral2, viral3, viral4;
var virus;
var MARGIN = 100;
var sprites;
let goneViral;

function preload() {
  viral2 = loadImage('viral2.png')
  viral3 = loadImage('viral3.png')



}
function setup(){

	startSketch();
}


function startSketch() {
	goneViral = true;
  createCanvas(windowWidth, windowHeight);
 virus = createSprite(width/2,0,100,100);
 virus.addAnimation("virus","virus_0.png","virus_1.png","virus_1.png");
 virus.setCollider("circle",0,0,50);
 x = 90;
 

 sprites = new Group();

for(var i = 0; i<150; i++) {
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

function draw() {
  background(0);
  x=x+random(-1,1);
  virus.setSpeed(1, x);
  
  image(viral1,0,0, 400, 400); 

  image(viral2,width/2,0,400,400);

  image(viral3,0,height/2,400,400); 

  image(viral4,width/2,height/2,400, 400);



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
	
}
//console.log(a.getAnimationLabel());
}

if(goneViral==true){
	text("It can't be stopped", width/2,height/2);
}
drawSprites();


}

function createPixels(type, x, y) {
  var a = createSprite(x, y);
  //var img  = loadImage("laugh0"/*+floor(random(0,1))*/+".png");
 // var img2 = loadImage("laugh1.png");

  a.addAnimation("laugh","laugh1.png","laugh0.png","laugh0.png");
  a.addAnimation("virus","virus_0.png","virus_1.png","virus_1.png");
 
  a.setSpeed(2.5-(type/2), random(360));
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
goneViral= true;
setTimeout(startSketch,5000);

}