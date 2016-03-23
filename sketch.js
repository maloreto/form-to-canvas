var canvas;
var x;
var y;
var ySpeed;
var xSpeed;

function setup() {
	canvas = createCanvas(600, 600); 
	canvas.parent('middle_panel');
	x = width/2;
	y = height/2;
	ySpeed = 0;
	xSpeed = 0;
	
}

function draw() {
	background(255, 102, 204);
	fill(255, 204, 0);
	ellipse(x,y,40,40);
	y = y + ySpeed;
	x = x + xSpeed;
}

function down() {
	ySpeed = ySpeed - 1;
}

function up() {
	ySpeed = ySpeed + 1;
}

function right(){
  xSpeed = xSpeed + 1;
}

function left (){
  xSpeed = xSpeed -1;
}