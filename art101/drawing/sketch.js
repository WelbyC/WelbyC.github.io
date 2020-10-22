let array = [];
let ellipses = false
let lines = false
let noiseOffset = 0.0
let strokeWidth = 5


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(220, 50, 25)

  
}

function draw() {
  background(220, 50, 25, 10)
  strokeWeight(strokeWidth)

  noiseOffset += 0.05
  strokeWidth = noise(noiseOffset) * 100

  



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
  } else if (key === "c"){

  clear();
  }

  return false;
}