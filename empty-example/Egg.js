function makeEgg(x,y,xSpeed){
	eggs.push(new egg(x,y,xSpeed));
}
function egg(x,y,xSpeed){
	this.x=x;
	this.y=y;
	this.xSpeed=xSpeed;
	this.ySpeed=0;
	this.updateEgg=function(){
		this.ySpeed+=.1;
		this.x+=this.xSpeed;
		this.y+=this.ySpeed;
		this.checkCollision();
		if (this.x<0){
			this.x+=900;
		}else if (this.x>900){
			this.x-=900;
		}
	}
	this.checkCollision=function(){
		for (var i=0;i<plats.length;i++){
			if (this.x<plats[i].x+plats[i].width&&this.x>plats[i].x){
				if (this. y+10>plats[i].y&&this.y+10<plats[i].y+plats[i].height){
					this.ySpeed=-this.ySpeed/3;
					this.xSpeed=this.xSpeed/3;
					this.y=plats[i].y-10;
				}
			}
		}
	}
}
function removeEgg(j){
	score++;
	print("SCORE: "+score);
	document.getElementById("score").innerHTML = "SCORE: "+score;
	sounds.playEgg();
	for (var i = 0 ; i<eggs.length;i++){
		if (i==eggs.length-1){
			eggs=subset(eggs,0,i);
		}else if (i>=j){
			eggs[i]=eggs[i+1]
		}

	}
}

