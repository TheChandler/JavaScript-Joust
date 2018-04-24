var maxSize=100;
var maxMass=1000;
var ball0;
var balls=new Array;
function setup(){
	frameRate(60);
	angleMode(DEGREES);
	createCanvas(900,700);
	balls.push(new ball(10,100,100,100));
	balls.push(new ball(101,200,200,500));
}
function draw(){
	clear();
	for (var i =0;i<balls.length-1;i++){
		for (var j=i+1;j<balls.length;j++){
			balls[i].addVelocity(balls[j]);
		}
	}
	for (var i=0;i<balls.length;i++){
		balls[i].update();
		balls[i].drawThis();
	}
}
function ball(size,x,y,mass){
	this.x=x;
	this.y=y;
	this.size=size;
	this.mass=mass;
	this.xSpeed=0;
	this.ySpeed=0;
	this.update=function(){
		this.x+=this.xSpeed;
		this.y+=this.ySpeed;
		if (this.x<0||this.x>900){
			this.xSpeed=-this.xSpeed;
		}
		if (this.y<0||this.y>700){
			this.ySpeed=-this.ySpeed;
		}
	}
	this.addVelocity=function(ball2){
		var distance=dist(this.x,this.y,ball2.x,ball2.y);
		distance=miner(distance,(this.size+ball2.size)/2);

		var force=this.mass*ball2.mass/(distance*distance);
		force*=1;
		var acc=force/this.mass;
		var y=this.y-ball2.y;
		var x=this.x-ball2.x;
		var tangent=atan(y/x);
		print(tangent);
		this.ySpeed+=sin(tangent)*acc*-posOrNeg(y);
		print(sin(tangent));
		this.xSpeed+=cos(tangent)*acc*-posOrNeg(x);

		acc=force/ball2.mass;
		ball2.ySpeed+=sin(tangent)*acc*posOrNeg(y);
		ball2.xSpeed+=cos(tangent)*acc*posOrNeg(x);
		
	}
	this.drawThis=function(){
		fill(size/maxSize*255,mass/maxMass*255,(mass/maxMass)/(size/maxSize)*255);
		ellipse(this.x,this.y,size);
	}
}
function keyTyped(){
	if (key=='a'){
		print(ball0.xSpeed);
	}else if (key=='s'){
		print(ball1.xSpeed);
	}else if(key=='q'){
		print(ball0.x);
	}else if (key=='w'){
		print(ball1.x);
	}else if (key=='m'){
		var m=random(maxSize);
		balls.push(new ball(m,100,100,m));
		print("HEY");
	}
}