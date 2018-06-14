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
var spawnTimer;
var eggs;
var enemyCount;
var spawnTime;
var switches;
var level;
var score;
function setup() {
	score=0;
	level=1;
	switches=[0,0,0,0,0,0,0,0,0,0];
	enemyCount=0;
	spawnTime=new timer();
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
		   new platform(150,525,550,10),
		   new platform(250,275,350,10),
		   new platform(0,-10,900,10)];
   	
   	aiCont=new aiController("easy");
   	makePlatform();
	makePlayer();
	makeEnemies();
	spawnTimer=new timer();
	eggs=new Array();
	events.push(new event("SpawnPlayer1"));

}
	

function draw() {
	background(0);
	for (var i=0;i<plats.length;i++){
		plats[i].draw();
	}
	update();
	updateEvents();
	for (var i=0;i<eggs.length;i++){
		eggs[i].updateEgg();
		fill(0,255,0);
		rect(eggs[i].x,eggs[i].y,10,10);
		if (player1!=null){
			if (player1.x+player1.width>eggs[i].x&&player1.x<eggs[i].x+10){
				if (player1.y+player1.height>eggs[i].y&&player1.y<eggs[i].y+10){
					removeEgg(i);
				}
			}
		}
	}
	if (enemyCount==0&&switches[0]==2){
		spawnTime.set();
		switches=[0,0,0,0,0,0,0,0,0,0];
		level++;
		if (level>10){
			level=10;
		}
	}
	for (var i = 0 ; i<level;i++){
		if (switches[i]==0){
			if (spawnTime.get()>i*500){
				switches[i]=1;
			}
		}else if (switches[i]==1){
			switches[i]=2;
			spawnEn();
		}
	}
	if (player1!=null&&player1.y>1000){
		player1=null;
	}
}