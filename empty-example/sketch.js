var colors=new Array();
var sprite1;
var sprite2;
var birb;
var walkSpeed=1;
var runSpeed=3;
var sprintSpeed=6;
var acceleration=.5;
var skidTime=30;
var inputDelay=20;
var right=true;
var contSize=2.5;
var plats;
var aiCont;
var img;
var sounds;
function preload(){
}
function setup() {
	frameRate(60);
	createCanvas(900,600);
	sounds=new sounds();

	//frameRate(1);
	pixelDensity(2);
	noStroke();
	noSmooth();
	background(0);
	plats=[new platform(600,420,300,10),
		   new platform(0,420,300,10),
		   new platform(0,150,150,10),
		   new platform(750,150,150,10),
		   new platform(250,525,350,10),
		   new platform(250,275,350,10),
		   new platform(0,-10,900,10)];
   	
   	aiCont=new aiController("easy");
   	makePlatform();
	makePlayer();
}
function draw() {
	background(0);
	for (var i=0;i<plats.length;i++){
		plats[i].draw();
	}
	update();
	updateEvents();

}

function mousePressed(){
	print(mouseX+" "+mouseY);
}