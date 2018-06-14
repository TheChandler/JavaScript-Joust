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
				player1.bounceOff(this.birds[i].y,this.birds[i].x);
				makeEgg(this.birds[i].x+13*contSize/2,this.birds[i].y+18*contSize/2,this.birds[i].xSpeed);
				enemyCount--;
				this.birds[i]=null;
			}else if (this.birds[i].y<player1.y){
				this.birds[i].bounceOff(player1.y,player1.x);
				player1=null;
			}else{
				this.birds[i].bounceOff(player1.y,player1.x);
				player1.bounceOff(this.birds[i].y,this.birds[i].x);
			}
			sounds.playDeath();
		}
	}

}
function spawnEn(){
	enemyCount++;
	ran=random(5);
	var spawnX,spawnY;
	if (ran>=4){
		events.push(new event("Enemy1"));
	}else if (ran>=3){
		events.push(new event("Enemy2"));
	}else if (ran>=2){
		events.push(new event("Enemy3"));
	}else if (ran>=1){
		events.push(new event("Enemy4"));
	}else if (ran>=0){
		events.push(new event("Enemy5"));
	}
}
function spawnEnemy(i){
	switch (i){
		case 1:
			aiCont.addBird(new contestant(99,400-18*2.5,"enemy",new animationSet(sprite2)));
			break;
		case 2:
			aiCont.addBird(new contestant(700,400-18*2.5,"enemy",new animationSet(sprite2)));
			break;
		case 3:
			aiCont.addBird(new contestant(370,270-18*2.5,"enemy",new animationSet(sprite2)));
			break;
		case 4:
			aiCont.addBird(new contestant(790,150-18*2.5,"enemy",new animationSet(sprite2)));
			break;
		case 5:
			aiCont.addBird(new contestant(44,150-18*2.5,"enemy",new animationSet(sprite2)));
			break;
	}
}
