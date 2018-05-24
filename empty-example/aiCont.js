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
		}else{
			this.birds[i].left();
		}
		this.birds[i].update();
	}
}
function spawnEn(){
	aiCont.addBird(new contestant(100,100,"enemy",new animationSet(sprite1)));
}
