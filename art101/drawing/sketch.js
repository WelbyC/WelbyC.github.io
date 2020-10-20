let array = [];
let ellipses = false
let lines = false
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(220, 50, 25)
}

function draw() {
  if(mouseIsPressed){
    //stroke(map(mouseX, 0, 600, 0, 255, true))
    //line(width - mouseX,height - mouseY,width - pmouseX, height - pmouseY)
    //line(mouseX,mouseY,pmouseX,pmouseY)
    array.push([mouseX, mouseY])
  }
  if(lines){
    for(let i = 0; i< array.length-1;i++){
      line(array[i][0],array[i][1],array[i+1][0],array[i+1][1])
    }
  }
  if(ellipses){
    for(let i = 0; i < array.length-1; i++){
      ellipse(mouseX, mouseY, 20, 20)
    }
  }
  if(keyIsDown(49)){
    lines = true
  }
  if(keyIsDown(50)){
    ellipses = true
  }
  if(!keyIsPressed){
    lines = false
    ellipses = false
    background(220, 50, 25)
  }
  console.log(lines)
  
  }


function keyTyped(){
  if(key === "s"){
    // save this image
    saveCanvas("fileName", "png")
  }

  return false;
}