let array = [];
let ellipses = false
let lines = false
let shrink = false
let grow = false
let ghost = false
let noiseOffset = 0.0
let strokeWidth = 5
let numCells
let n = 40
let ghosts = []
let rghost;

function setup() {
  createCanvas(windowWidth , windowHeight);
  
  background(175,238,238)
  ghost1 = loadImage('Ghost-1.png')
  ghost2 = loadImage('Ghost-2.png')
  ghosts = [ghost1,ghost2]
}

function draw() {
  //background(220, 50, 25, 10)
  //strokeWeight(strokeWidth)
  //noiseOffset += 0.05
  //strokeWidth = noise(noiseOffset) * 100

  


  rghost = random(ghosts)
  if(mouseIsPressed){
      if(ghost){
        image(rghost, mouseX-25, mouseY-25, 50, 50)
    
  }
    //stroke(map(mouseX, 0, 600, 0, 255, true))
    //line(width - mouseX,height - mouseY,width - pmouseX, height - pmouseY)
    //line(mouseX,mouseY,pmouseX,pmouseY)
    //array.push([mouseX, mouseY])
  }
  if(lines){
  strokeWeight(strokeWidth)
  noiseOffset += 0.05
  strokeWidth = noise(noiseOffset) * 100
  
  //line(width - mouseX,height - mouseY,width - pmouseX, height - pmouseY)
  line(mouseX,mouseY,pmouseX,pmouseY)
    array.push([mouseX, mouseY])
/*    
    for(let i = 0; i< array.length-1;i++){
      line(array[i][0],array[i][1],array[i+1][0],array[i+1][1])
    }
*/
  }
  if(ellipses){
    strokeWeight(1)
      ellipse(width - mouseX,height - mouseY, 20, 20)
    
  }
  if(shrink){
    
    strokeWeight(n)
    line(mouseX,mouseY,pmouseX,pmouseY)
    n -= 0.5
  }
  if(grow){
    
    strokeWeight(n)
    line(mouseX,mouseY,pmouseX,pmouseY)
    n += 0.5
  }

  if(keyIsDown(49)){
    lines = true
  }
  if(keyIsDown(50)){
    ellipses = true
  }
    if(keyIsDown(51)){
    shrink = true
  }
    if(keyIsDown(52)){
    grow = true
  }
    if(keyIsDown(53)){
    ghost = true
  }
  if(!keyIsPressed){
    lines = false
    ellipses = false
    shrink = false
    grow = false
    ghost = false
    n = 40
    //background(220, 50, 25)
  }
 
 console.log(rghost)
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

