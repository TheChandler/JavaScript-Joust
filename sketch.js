var colors=new Array();
var sprite1;
var birb;
var walkSpeed=1;
var runSpeed=3;
var sprintSpeed=6;
var acceleration=.5;
var skidTime=30;
var inputDelay=20;
var right=true;
var contSize=2.5;

function setup() {
	createCanvas(900,600);
	// /frameRate(3);
	noStroke();
	background(0);
	colors.push(color(0,0));
	colors.push(color(248,248,0));
	colors.push(color(0,176,216));
	colors.push(color(0,72,144));
	colors.push(color(248,248,216));
	colors.push(color(32,72,72));
	colors.push(color(144,72,0));
	colors.push(color(248,144,72));
	colors.push(color(72,32,0));
	birb=new contestant(300,100,"birb");
	plats=[new platform(600,400,300,10),
		   new platform(0,400,300,10),
		   new platform(0,150,150,10),
		   new platform(750,150,150,10),
		   new platform(250,500,350,10),
		   new platform(250,250,350,10)];

var frame0 =[0,0,0,0,1,1,0,0,6,6,0,0,0,
			 0,0,0,0,1,2,0,0,7,2,1,0,0,
			 0,0,0,0,1,1,0,0,7,6,0,0,0,
			 0,0,0,1,1,1,1,0,8,7,0,0,0,
			 3,2,0,1,1,1,1,2,1,6,7,1,1,
			 2,4,2,3,2,5,5,1,5,6,7,0,0,
			 0,5,3,2,5,4,4,3,6,7,6,0,0,
			 0,0,5,3,5,2,2,3,6,6,0,0,0,
			 0,0,0,5,2,5,2,5,3,0,0,0,0,
			 0,0,0,5,5,6,3,5,0,0,0,0,0,
			 0,0,0,6,6,8,6,6,0,0,0,0,0,
			 0,0,8,7,7,0,7,6,0,0,0,0,0,
			 0,0,6,7,8,6,7,0,0,0,0,0,0,
			 0,0,7,7,0,6,7,0,0,0,0,0,0,
			 0,0,6,7,0,6,7,8,0,0,0,0,0,
			 0,0,8,7,0,0,6,6,0,0,0,0,0,
			 0,0,6,7,0,0,8,7,0,0,0,0,0,
			 0,0,6,7,0,0,0,7,7,0,0,0,0];

var frame1 =[0,0,0,0,1,1,0,0,6,6,0,0,0,
			 0,0,0,0,1,2,0,0,7,2,1,0,0,
			 0,0,0,0,1,1,0,0,7,6,0,0,0,
			 0,0,0,1,1,1,1,0,8,7,8,0,0,
			 3,2,0,1,1,1,1,2,1,6,7,1,1,
			 2,4,2,3,5,5,5,5,0,6,7,0,0,
			 0,5,3,2,2,4,2,2,6,7,8,0,0,
			 0,0,5,3,2,2,3,2,7,6,0,0,0,
			 0,0,0,3,3,5,2,2,3,0,0,0,0,
			 0,0,0,5,4,6,4,4,5,0,0,0,0,
			 0,0,6,6,6,8,6,6,0,0,0,0,0,
			 0,7,7,6,0,0,7,6,0,0,0,0,0,
			 0,8,7,7,0,6,7,0,0,0,0,0,0,
			 0,0,0,6,7,7,6,0,0,0,0,0,0,
			 0,0,0,0,8,7,7,8,0,0,0,0,0,
			 0,0,0,0,8,7,6,0,0,0,0,0,0,
			 0,0,0,0,8,7,6,0,0,0,0,0,0,
			 0,0,0,0,8,6,7,6,0,0,0,0,0];

var frame2 =[0,0,0,0,1,1,0,6,6,0,0,0,0,
			 0,0,0,0,1,2,0,7,2,1,0,0,0,
			 0,0,0,0,1,1,0,7,8,0,0,0,0,
			 0,0,0,1,1,1,1,0,7,8,0,0,0,
			 3,2,0,1,1,1,1,2,6,6,7,1,1,
			 2,4,2,3,5,5,5,1,0,6,7,0,0,
			 0,5,3,2,2,4,2,3,2,7,6,0,0,
			 0,0,5,3,0,2,3,2,7,6,0,0,0,
			 0,0,0,3,3,3,4,2,2,0,0,0,0,
			 0,0,0,5,3,2,2,3,5,0,0,0,0,
			 0,0,0,5,6,6,6,5,0,0,0,0,0,
			 0,0,0,0,0,7,7,6,0,0,0,0,0,
			 0,0,0,0,6,7,6,8,0,0,0,0,0,
			 0,0,0,8,6,7,7,6,0,0,0,0,0,
			 0,0,0,8,7,6,0,7,7,6,0,0,0,
			 0,0,0,6,7,0,0,0,8,6,6,0,0,
			 0,0,0,6,7,6,0,0,0,0,6,0,0,
			 0,0,0,8,7,7,0,0,0,0,0,0,0];

var frame3 =[0,0,0,0,1,1,0,6,6,0,0,0,0,
			 0,0,0,0,1,2,0,7,2,1,0,0,0,
			 0,0,0,0,1,1,0,7,6,0,0,0,0,
			 0,0,0,1,1,1,1,0,7,6,0,0,0,
			 3,2,0,1,1,1,1,2,6,6,7,1,1,
			 2,4,2,2,5,2,2,1,0,6,7,0,0,
			 0,5,3,0,2,4,2,5,6,7,6,0,0,
			 0,0,5,5,5,2,3,2,7,6,0,0,0,
			 0,0,3,2,2,4,4,2,3,0,0,0,0,
			 0,0,5,3,5,2,2,3,5,0,0,0,0,
			 0,0,0,5,6,6,6,5,0,0,0,0,0,
			 0,0,0,0,7,6,7,8,0,0,0,0,0,
			 0,0,0,6,7,6,8,7,0,0,0,0,0,
			 0,0,0,7,6,0,8,7,6,0,0,0,0,
			 0,0,8,7,6,0,0,6,7,6,0,0,0,
			 0,0,6,7,8,0,0,0,6,7,8,0,0,
			 0,0,7,6,0,0,0,0,0,6,7,8,0,
			 0,0,7,7,0,0,0,0,0,8,8,7,0];

var frame4 =[0,0,0,0,0,0,0,0,0,0,0,0,0,
			 0,0,0,0,0,0,0,0,0,0,0,0,0,
			 0,0,0,0,1,1,0,0,8,6,6,0,0,
			 0,0,0,0,1,2,0,0,0,2,7,1,0,
			 0,0,0,0,1,1,0,0,0,7,7,0,0,
			 0,3,2,1,1,1,1,0,0,6,7,0,0,
			 3,4,3,5,2,1,1,2,1,6,7,1,1,
			 3,3,2,3,2,4,4,6,6,6,7,0,0,
			 0,5,4,2,2,4,4,3,6,7,7,0,0,
			 0,0,2,3,5,5,3,2,7,7,6,0,0,
			 0,0,0,3,2,4,2,2,7,6,0,0,0,
			 0,0,0,5,2,7,7,2,5,0,0,0,0,
			 0,0,0,0,6,7,7,6,0,0,0,0,0,
			 0,0,0,0,0,7,7,6,8,0,0,0,0,
			 0,0,0,0,0,0,7,6,7,0,0,0,0,
			 0,0,0,0,0,0,8,7,6,7,0,0,0,
			 0,0,0,0,0,0,0,6,7,6,7,0,0,
			 0,0,0,0,0,0,0,0,7,7,8,7,0]

var frame5 =[2,3,3,0,1,1,0,0,0,6,6,0,0,
			 4,4,2,3,1,2,0,0,0,7,2,1,0,
			 0,2,2,3,1,1,0,0,0,7,6,0,0,
			 0,4,4,2,3,1,1,0,0,7,6,0,0,
			 0,0,2,2,3,1,1,2,1,7,6,1,1,
			 0,0,4,4,3,2,1,1,6,7,6,0,0,
			 0,0,0,3,2,3,3,3,7,7,8,0,0,
			 3,4,2,3,3,4,4,3,7,8,0,0,0,
			 3,3,3,3,3,2,2,3,6,0,0,0,0,
			 0,0,0,8,3,3,3,3,8,0,0,0,0,
			 0,0,0,8,6,6,8,6,8,0,0,0,0,
			 0,0,0,0,0,0,0,8,6,0,0,0,0,
			 0,0,0,0,0,0,0,0,0,0,0,0,0,
			 0,0,0,0,0,0,0,0,0,0,0,0,0,
			 0,0,0,0,0,0,0,0,0,0,0,0,0,
			 0,0,0,0,0,0,0,0,0,0,0,0,0,
			 0,0,0,0,0,0,0,0,0,0,0,0,0,
			 0,0,0,0,0,0,0,0,0,0,0,0,0]

 var frame6=[0,0,0,0,1,1,0,0,0,0,6,6,0,
 			 0,0,0,0,1,2,0,0,0,0,7,2,1,
 			 0,0,0,1,1,1,1,0,0,0,7,6,0,
 			 0,0,0,1,1,1,1,2,1,1,7,6,0,
 			 0,3,3,2,2,3,3,3,0,8,7,8,0,
 			 3,3,3,4,4,2,2,3,6,7,6,0,0,
 			 0,0,3,3,2,3,2,3,6,6,0,0,0,
 			 0,0,0,3,3,3,4,3,3,0,0,0,0,
 			 0,0,0,8,3,3,3,3,8,0,0,0,0,
 			 0,0,0,8,6,6,8,6,8,0,0,0,0,
 			 0,0,0,0,0,0,0,8,6,0,0,0,0,
 			 0,0,0,0,0,0,0,0,0,0,0,0,0,
 			 0,0,0,0,0,0,0,0,0,0,0,0,0,
 			 0,0,0,0,0,0,0,0,0,0,0,0,0,
 			 0,0,0,0,0,0,0,0,0,0,0,0,0,
 			 0,0,0,0,0,0,0,0,0,0,0,0,0,
 			 0,0,0,0,0,0,0,0,0,0,0,0,0,
 			 0,0,0,0,0,0,0,0,0,0,0,0,0]
	sprite1=[frame0,frame1,frame2,frame3,frame4,frame5,frame6];
}
function draw() {
	//clear();
	background(0);
	if (keyIsDown(LEFT_ARROW)){
		birb.left();
	}else if (keyIsDown(RIGHT_ARROW)){
		birb.right();
	}else{
		birb.none();
	}
	birb.update();
	for (var i=0;i<plats.length;i++){
		plats[i].draw();
	}
	fill(0);
	rect(0,0,20,600);
	rect(880,0,20,600)
}

function contestant(x,y,type){
	this.xSpeed=0;
	this.ySpeed=0;
	this.x=x;
	this.y=y;
	this.input="none";
	this.state=0;
	this.flying=false;
	this.flap=function(){
		this.flying=true;
		if(this.input=="left"){
			this.xSpeed-=2;
		}else if (this.input=="right"){
			this.xSpeed+=2;
		}
		this.ySpeed-=1.9;
		
		if(this.ySpeed<-4.5){
			this.ySpeed=-4.5;
		}
		if(abs(this.xSpeed)>11){
			this.xSpeed=11*posOrNeg(this.xSpeed);
		}
	}
	this.left=function(){
		this.input="left";
	}
	this.right=function(){
		this.input="right";
	}
	this.none=function(){
		this.input="none";
	}
	var inputTimer=0;
	var skidTimer=0;
	this.bounce=function(){
		this.state=-this.state;
		this.xSpeed=-this.xSpeed;
		right=!right;
	}
	this.setInput=function(){
		inputTimer=updateTimer(inputTimer);
		if (this.input=="right"){
			if (inputTimer>0){
				this.input="none";
			}else{
				inputTimer=inputDelay;
			}
		}else if (this.input=="left"){
			if (inputTimer<0){
				this.input="none";
			}else{
				inputTimer=-inputDelay;
			}
		}
	}
	this.update=function(){
		
		if (this.flying){
			this.updateFlying();
			this.x+=this.xSpeed;
		}else{
			this.updateWalking();
			this.x+=this.xSpeed*posOrNeg(this.state);
		}
		if(this.ySpeed<=-6){
			this.y+=-6;
		}else{
			this.y+=this.ySpeed;
		}
		if (this.x<0){
			this.x+=900;
		}else if (birb.x>900){
			this.x-=900;
		}
		if (this.flying){

			drawFlyingBird(this.x,this.y,posOrNeg(this.xSpeed));
		}else{
			drawBird(this.x,this.y,this.state);
		}
	}
	this.updatePosition=function(locations){
		plat.check(locations);
		this.x=locations[0];
		this.y=locations[1];
	}
	this.updateFlying=function(){
		this.ySpeed+=.09;
		if(this.ySpeed>4.5){
			this.ySpeed=4.5;
		}
	}
	this.updateWalking=function(){
		this.setInput();
		switch(this.state){
			case 3:
				if (this.input=="left"){
					this.state=.5;
					skidTimer=-skidTime;
				}
				break;
			case .5:
				if (this.input=="right"){
					this.state=2;
					skidTimer=0;
				}else if(skidTimer==0){
					this.state=0;
				}
				break;
			case -.5:
				if (this.input=="left"){
					this.state=-2;
					skidTimer=0;
				}else if(skidTimer==0){
					this.state=0;
				}
				break;
			case -3:
				if (this.input=="right"){
					this.state=-.5;
					skidTimer=skidTime;
				}
				break;
			default:
				if (this.input=="left"){
					if (this.state==0&&right){
						this.bounce();
					}else{
						this.state--;
					}
				}else if (this.input=="right"){
					if (this.state==0&&!right){
						this.bounce();
					}else{
						this.state++;
					}
				}else if(this.input!="none"){
					this.bounce();
				}
				break;
		}
		if (this.state<0){
			right=false;
		}else if (this.state>0){
			right=true;
		}
		switch(abs(this.state)){
			case 3:
				this.xSpeed=sprintSpeed;
				break;
			case 2:
				this.xSpeed=runSpeed;
				break;
			case 1:
				this.xSpeed=walkSpeed;
				break;
			case .5:
				if(skidTimer==0){
					this.state=0;
				}else{
					skidTimer=updateTimer(skidTimer);
					this.xSpeed=sprintSpeed/2;
				}
				break;
			case 0:
				this.xSpeed=0;
				break;
			default:
				print(this.state);
		}
	}
}
function posOrNeg(value){
	if (value>0){
		return 1;
	}else if (value<0){
		return -1;
	}else{
		return 0;
	}
}
function updateTimer(time){
	if (time>0){
		return time-1;
	}else if(time<0){
		return time+1;
	}else{
		return 0;
	}
}
function keyPressed(){
	if (keyCode==32){
		birb.flap();
		contSize+=1;
	}else if(keyCode==UP_ARROW){
		contSize+=.1;
	}else if (keyCode==DOWN_ARROW){
		contSize-=.1;
	}
} 
function makeBirdRed(){
		colors[1]=color(255,190,0);
		colors[2]=color(255,30,30);
		colors[3]=color(180,0,0,);
}
function makeBirdBlue(){
		colors[1]=color(80,190,190);
		colors[2]=color(30,30,250);
		colors[3]=color(0,0,180,);
}


var count=0;
var frame=0;
function platform(x,y,width,height){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.draw=function(){
		fill(140);
		rect(this.x,this.y,this.width,this.height);
	}
	this.check=function(locations){

	}
}
function drawFlyingBird(x,y,direction){
	var width=contSize*13;
	var height=contSize*18;
	if(x>900-width){
		drawFlyingBird(x-900,y,direction);
	}
	if(keyIsDown(32)){
		var sprite=getSprite(6,direction);
	}else{
		var sprite=getSprite(5,direction);
	}
	drawSprite(x,y,sprite);
}
function drawBird(x,y,state){
	var width=contSize*13;
	var height=contSize*18;
	if(x>900-width){
		drawBird(x-900,y,state);
	}

	switch (abs(state)){
		case 3:
			count+=3;
		case 2:
			count+=2;
		case 1:
			count+=1;
			break;
		case .5:
			frame=4;
			break;
		case 0:
			frame=0;
			break;
	}
	if (count>=6){
		count-=6;
		frame=(frame+1)%4;
	}
	var sprite=getSprite(frame,posOrNeg(state));
	drawSprite(x,y,sprite);
}
function drawSprite(x,y,sprite){
	var width=contSize*13;
	var height=contSize*18;
	for (var i =0;i<18;i++){
		for (var j=0;j<13;j++){
			fill(colors[sprite[i*13+j]]);
			rect(x+width/13*j,y+height/18*i,width/12,height/17);//Should probably be divided by 13 and 18, but then you can see the lines between the pixels sometimes
		}
	}	
}
function getSprite(frame,flipped){
	switch(flipped){
		case 1:
			return sprite1[frame];
			break;
		case 0:
			if (right){
				return sprite1[frame];
			}
		case -1:
			var temp=new Array();
			for (var i = 0 ;i<18;i++){
				for (var j=12;j>=0;j--){
					temp.push(sprite1[frame][i*13+j]);
				}
			}
			return temp;
			break;
	}
}