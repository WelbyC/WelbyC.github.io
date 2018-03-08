function setup() {
	createCanvas(500, 500);
	// background is very light grey
	background(230);
}

function draw() {

	// create bright green ellipse with white stroke
	// fill is bright green
	fill(0, 255, 0);
	// stroke is white
	stroke('red');
	strokeWeight(1); // reset to default
	ellipseMode(CORNER);
	ellipse(100, 100, 80, 80);

	// make transparent rectangle
	// a color fill with a fourth argument will define transparency
	// fill has about 50% transparency
	fill(255, 100, 50, 125);
	noStroke();
	rect(100, 100, 80, 80);

	// stroke weight will set thickness of line
	stroke(255, 0, mouseY, mouseX);
	strokeWeight(5);
	line(100, 100, mouseX, mouseY);
}