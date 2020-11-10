let state = "title"
let cnv
let points = 0

function setup() {
  cnv = createCanvas(600, 600);

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
  text("click for points", 250, 400)
  
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
  points++;
  if(points >=10){
    state = "win"
  }
}

