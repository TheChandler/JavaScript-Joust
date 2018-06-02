function aiController(difficulty){
	switch(difficulty){
		case "easy":
			this.inputDelay=20;
			break;
		case "medi":
			this.inputDelay=10;
			break;
		case "hard":
			this.inputDelay=6;
			break;
	}


	this.birds=new Array(10);
	this.nextSpot=0;
	this.addBird=function(bird){
		i=0;
		while (this.birds[i]!=null){
			i++;
		}
		this.birds[i]=bird;
		ran=random(3);
		if(ran>2){
			this.birdBars[i]=80;
		}else if(ran>1){
			this.birdBars[i]=200;
		}else{
			this.birdBars[i]=350;
		}
	}
	this.remove=function(num){
		for (var i=0;i<this.birds.length;i++){
			print(this.birds[i]+" "+num);
			if(this.birds[i]==num){
				this.birds[i]=null;
			}
		}
	}
	this.time=0;
	this.birdTimes=[0,0,0,0,0,0,0,0,0,0];
	this.birdBars=new Array(10);
	this.update=function(){
		this.time++;
		for (var i=0;i<this.birds.length;i++){
			if (this.birds[i]!=null){
						this.updateBird(i);
			}
		}
	}
	this.updateBird=function(i){
		if (this.time-this.birdTimes[i]>this.inputDelay&&this.birds[i].y>this.birdBars[i]){
			this.birds[i].flap();
			this.birdTimes[i]=this.time;
		}
		this.birds[i].left();
		this.birds[i].update();
		if (player1!=null){
			this.checkCollision(i);
		}
	}
	this.checkCollision=function(i){
		if (this.birds[i].x<player1.x+player1.width&&this.birds[i].x+this.birds[i].width>player1.x&&this.birds[i].y<player1.y+player1.height&&this.birds[i].y+this.birds[i].height>player1.y){
			if (this.birds[i].y>player1.y){
				player1.bounceOff(this.birds[i].y);
				this.birds[i]=null;
			}else if (this.birds[i].y<player1.y){
				this.birds[i].bounceOff(player1.y);
				player1=null;
			}else{
				this.birds[i].bounceOff(player1.y);
				player1.bounceOff(this.birds[i].y);
			}
			sounds.playDeath();
		}
	}

}
function spawnEn(){
	ran=random(5);
	var spawnX,spawnY;
	print(ran);
	if (ran>=4){
		spawnX=99;
		spawnY=400;
	}else if (ran>=3){
		spawnX=700;
		spawnY=400;
	}else if (ran>=2){
		spawnX=370;
		spawnY=270;
	}else if (ran>=1){
		spawnX=790;
		spawnY=150;
	}else if (ran>=0){
		spawnX=44;
		spawnY=150;
	}
	aiCont.addBird(new contestant(spawnX,spawnY-18*2.5,"enemy",new animationSet(sprite1)));
}
