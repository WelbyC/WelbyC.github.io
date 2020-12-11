//normal game stuff
let state = "title"
let cnv
let points = 0
let w = 640*1.8
let h = 480*1.8

let future = false;

let timer = 60;

let coin = []
let timemachine = []

let playerImg
let coinImg
let timemachineImg
//posenet stuff
let video;
let poseNet;
let pose;
let skeleton;
let img;

function preload(){
   playerImg = loadImage("masker.png")
   coinImg = loadImage("vaccine.png")
   timemachineImg = loadImage("covid.png")
}
function setup() {
  
  cnv = createCanvas(w, h);
  player = new Player(playerImg)
  coin.push(new Coin(coinImg))
  timemachine.push(new Timemachine(timemachineImg))


 //posenet stuff
  video = createCapture(VIDEO);
  video.size(width, height)
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

  

}

//posenet stuff
function gotPoses(poses) {
  //console.log(poses); 
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}



function draw() {
  switch(state){
    case "title":
      title();
      cnv.mouseClicked(titleMouseClicked)
      break
    case "level1":
      level1()
      level1MouseClicked()
      time()
      break
    case "win":
      win()
      cnv.mouseClicked(youWinMouseClicked)
      break
    case "lose":
      lose()
      cnv.mouseClicked(youWinMouseClicked)
      break
    default:
      break
         }
/*
        if (keyIsDown(LEFT_ARROW)) {
          player.direction = "left"
        }
      
        if (keyIsDown(RIGHT_ARROW)) {
          player.direction = "right"
        }
      
        if (keyIsDown(UP_ARROW)) {
          player.direction = "up"
        }
      
        if (keyIsDown(DOWN_ARROW)) {
          player.direction = "down"
        }
*/

if(future){
  coin.splice(0, coin.length)
  timemachine.splice(0,timemachine.length)
}

  
}
/*
function keyPressed(){
  if(keyCode == LEFT_ARROW)
  {
    player.direction = "left"
  }
  else if(keyCode == RIGHT_ARROW)
  {
    player.direction = "right"
  }
  else if(keyCode == UP_ARROW)
  {
    player.direction = "up"
  }
  else if(keyCode == DOWN_ARROW)
  {
    player.direction = "down"
  }

}
function keyReleased(){
  player.direction = "still"
}
*/

function title(){
  background(100)
  textSize(82)
  stroke(255)
  text("Dodging Covid AND Cure", w/2-440, 100)
  
  textSize(30)
  text("Click to start", w/2-70,300)
  textSize(20)
  text("You are scared of Covid-19 and the cure so you want to avoid getting it", w/2-270,h/2)
  text("You win when you avoid both Covid-19 and the cure until it passes into nothing", w/2-300,h/2+100)
  text("You lose when you either get the  recently released cure or the virus", w/2-260,h/2+200)
  
}

function titleMouseClicked(){
  state = "level1"
}

function level1(){
  background(50, 150, 200)
//posenet stuff
  image(video, 0, 0, width, height);

  if (pose) {

    fill(0, 255, 0);
    player.display(pose.nose.x, pose.nose.y)
    player.move()


  }

//normal game stuff

if(random(1)<= 0.01){
  coin.push(new Coin(coinImg))
}
if(random(1)<= 0.01){
  timemachine.push(new Timemachine(timemachineImg))
}



  for(let i = 0; i < coin.length; i++){
    coin[i].display()
    coin[i].move()
  }

  
  for(let i = 0; i < timemachine.length; i++){
    timemachine[i].display()
    timemachine[i].move()
  }

  //check collision
  for(let i = coin.length-1; i >= 0; i--){
    if(dist(player.x, player.y, coin[i].x, coin[i].y)<= (player.r + coin[i].r)/2){
      points++
      future = true

      }
    }
  for(let i = timemachine.length-1; i >= 0; i--){
    if(dist(player.x, player.y, timemachine[i].x, timemachine[i].y)<= (player.r + timemachine[i].r)/2){
      points++
      future = true

      }
    }


text("time: "+ timer, w/10, h-30)
}
function win(){
  background(51, 204, 255)
  textSize(82)
  stroke(255)
  text("YOU WIN", w/2-200, 100)
  
  textSize(20)
  text("Click to restart", w/2-50,300) 
  future = true
}
function youWinMouseClicked(){
  state = "title"
  points = 0
  timer = 60
  future = false
}
function level1MouseClicked(){
  
  if(points >=1){
    state = "lose"
  }
}
function time(){
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }

  
 
  if (timer == 0) {
    state = "win"
  }
}
function lose(){
  background(255,100,200)
  textSize(82)
  stroke(255)
  text("YOU LOSE", w/2-200, 100)
  
  textSize(20)
  text("Click to restart", w/2-50,300) 
  

  
  
}

