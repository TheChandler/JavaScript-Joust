
function animationSet(f){
	this.frames=f;
	this.frame=0;
	this.count=0;
	this.sprite;
	this.isFlap=0;
	this.flap=function(){
		this.isFlap=5;
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

	this.drawSprite=function(x,y,flipped){

		var width=contSize*13;
		var height=contSize*18;
		if (flipped==-1){
			for (var i =0;i<18;i++){
				for (var j=0;j<13;j++){
					fill(colors[this.sprite[i*13+j]]);
					rect(x+(13*contSize)-width/13*j,y+height/18*i,width/13,height/18);//Should probably be divided by 13 and 18, but then you can see the lines between the pixels sometimes
				}
			}			
		}else{
			for (var i =0;i<18;i++){
				for (var j=0;j<13;j++){
					fill(colors[this.sprite[i*13+j]]);
					rect(x+width/13*j,y+height/18*i,width/13,height/18);//Should probably be divided by 13 and 18, but then you can see the lines between the pixels sometimes
				}
			}	
		}
	}
}
