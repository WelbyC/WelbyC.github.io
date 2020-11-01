var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 200; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(1000, 800);  // canvas size
background(screenbg);   // use our background screen color
  ghost = loadImage('Ghost-1.png')
  ghost2 = loadImage('Ghost-2.png')
  witch = loadImage('witch.png')
  bat = loadImage('bat.png')
  skull = loadImage('skull.png')

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    image(ghost, mouseX-25, mouseY-25, 50, 50);
    
    
    
  } else if (toolChoice == '2') { // second tool

    image(ghost2, mouseX-25, mouseY-25, 50, 50);
  } else if (toolChoice == '3') { // third tool
    image(witch, mouseX-25, mouseY-25, 50, 50);

  } else if (toolChoice == '4') {
    image(bat, mouseX-25, mouseY-25, 50, 50);
    
  } else if (key == '5') { // this tool calls a function
    image(skull, mouseX-25, mouseY-25, 50, 50);

    
    
    
    // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {
    squareColor = color(255, 0, 0);
    squareColor.setAlpha(random(0,255));
    fill(squareColor);
    rect(mouseX-25, mouseY-25, 55, 55, 20, 15, 10, 5);

  } else if (toolChoice == '7') {
    circleColor = color(100, 200, 100);
    circleColor.setAlpha(random(0,255));
    fill(circleColor);
    ellipse(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {

    fill(255);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {

    fill(300, 100, 0, 80);
    rect(mouseX-20, mouseY-20, 40, 40);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 200, 200);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
