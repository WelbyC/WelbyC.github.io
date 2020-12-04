//normal game stuff
let state = "title"
let cnv
let points = 0
let w = 600
let h = 600
let coin = []

//posenet stuff
let video;
let poseNet;
let pose;
let skeleton;
let img;


function setup() {
  
  cnv = createCanvas(w, h);
  player = new Player()
  coin.push(new Coin())


 //posenet stuff
  video = createCapture(VIDEO);
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
      cnv.mouseClicked(level1MouseClicked)
      break
    case "win":
      win()
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
}

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


function title(){
  background(100)
  textSize(82)
  stroke(255)
  text("MY GAME", 100, 100)
  
  textSize(20)
  text("Click to start", 250,300)
}

function titleMouseClicked(){
  state = "level1"
}

function level1(){
  background(50, 150, 200)
//posenet stuff
  image(video, 0, 0);

  if (pose) {
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
    fill(255, 0, 0);
    ellipse(img,pose.nose.x, pose.nose.y, );
    

    fill(0, 0, 255);

    
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill(0,255,0);
      ellipse(x,y,16,16);
    }
    
    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(2);
      stroke(255);
      line(a.position.x, a.position.y,b.position.x,b.position.y);      
    }
  }

//normal game stuff

if(random(1)<= 0.01){
  coin.push(new Coin())
}

  player.display()
  player.move()


  for(let i = 0; i < coin.length; i++){
    coin[i].display()
    coin[i].move()
  }

  //check collision
  for(let i = coin.length-1; i >= 0; i--){
    if(dist(player.x, player.y, coin[i].x, coin[i].y)<= (player.r + coin[i].r)/2){
      points++
      coin.splice(i, 1)
    }
}
text("points: "+ points, w/4, h-30)
}
function win(){
  background(255,100,200)
  textSize(82)
  stroke(255)
  text("YOU WIN", 100, 100)
  
  textSize(20)
  text("Click to restart", 250,300) 
}
function youWinMouseClicked(){
  state = "title"
  points = 0
}
function level1MouseClicked(){
  
  if(points >=10){
    state = "win"
  }
}

