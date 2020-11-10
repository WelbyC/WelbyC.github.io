let state = "title"
let cnv

function setup() {
  cnv = createCanvas(600, 600);

}

function draw() {
  
  if(state==="title"){
    title();
    cnv.mouseClicked(titleMouseClicked)
  }
  else if(state === "level1"){
    level1();
    
  }
}

function mousePressed(){
  state = "level1"
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
  
}

function level1MouseClicked(){
  
}

