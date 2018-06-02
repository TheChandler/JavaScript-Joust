		
function animationSet(f){
	this.frames=f;
	this.frame=0;
	this.count=0;
	this.sprite;
	this.isFlap=0;
	this.flap=function(){
		this.isFlap=7;
	}
	this.animate=function(x,y,state,flying,faceRight){
		if(flying){
			this.drawFlyingBird();
		}else{
			this.drawWalkingBird(state);
		}
		if (this.faceRight){
			print("right");
		}
		this.setSprite(faceRight);
		this.drawSprite(x,y,faceRight);
	}


	this.drawFlyingBird=function(){
		if (this.isFlap>0){
			this.frame=6;
			this.isFlap--;
		}else{
			this.frame=5;
		}
	}

	this.drawWalkingBird=function(state){
		switch (abs(state)){
			case 0:
				this.frame=0;
				break;
			case .5:
				this.frame=4;
				break;
			default:
				this.count+=abs(state);
				if (this.count>6){
					this.frame++;
					this.frame%=4;
					this.count-=6;
			}
		}
	}

	this.setSprite=function(){
		this.sprite=this.frames[this.frame];
	}

	this.drawSprite=function(x,y,flipped){//flipped is either -1 or 1. not a boolean
		if (x>900-13*2.5){
			this.drawSprite(x-900,y,flipped);
		}
		var width=contSize*13;
		var height=contSize*18;
		if (flipped==-1){
			print("Flipped");
			push();
			translate(width+x*2,0);
			scale(-1,1);
			image(this.sprite,x,y,width,height);
			pop();
		}else{
			image(this.sprite,x,y,width,height);
		}

	}
}
