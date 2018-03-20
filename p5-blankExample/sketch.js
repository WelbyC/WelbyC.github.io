function setup() {
	createCanvas(500, 500);
	background(200);
}

function draw() {
	if (mouseIsPressed) {
		fill(10, 100, 200);
		ellipse(mouseX, mouseY, 80, 80);
	} else {
		fill(255, 100, 50);
		rectMode(CENTER);
		rect(mouseX, mouseY, 80, 80);
	}
}