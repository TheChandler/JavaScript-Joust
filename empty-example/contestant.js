function contestant(x,y,type,as){
	this.xSpeed=0;
	this.ySpeed=0;
	this.x=x;
	this.y=y;
	this.input="none";
	this.state=0;
	this.flying=false;
	this.isDead=false;
	this.faceRight=-1;
	this.skidTimer=0;
	this.as=as;
	this.cords;
	this.flap=function(){
		this.flying=true;
		this.skidTimer=0;
		this.ySpeed-=1.3;
		as.flap();
		if(this.input=="left"){
			this.xSpeed-=1;
		}else if (this.input=="right"){
			this.xSpeed+=1;
		}
	}
	this.inputTimer=0;
	this.left=function(){
		this.input="left";
	}
	this.right=function(){
		this.input="right";
	}
	this.none=function(){
		this.input="none" ;
	}
	this.bounce=function(){
		this.state=-this.state;
		this.xSpeed=-this.xSpeed;
		this.faceRight*=-1;
	}
	this.bounceOff=function(y2){
		var dif=y2-this.y;
		if (dif<contSize*2){
			this.xSpeed=-this.xSpeed/1.7;
		}else if (dif<contSize*14){
			this.xSpeed=-this.xSpeed/2.5;
		}else{
			this.ySpeed=-this.ySpeed/2;
		}
	}
	this.updateFlying=function(){
			if(this.input=="left"){
				this.xSpeed-=.08;
				this.faceRight=-1;
			}else if(this.input=="right"){
				this.xSpeed+=.08;
				this.faceRight=1;
			}
			this.xSpeed=posOrNeg(this.xSpeed)*maxer(abs(this.xSpeed),600);
			this.ySpeed=maxer(this.ySpeed+.06,4.5);
			this.ySpeed=miner(this.ySpeed,-6);
	}
	this.update=function(){
		if (this.flying){
			this.updateFlying()
		}else{
			this.updateWalking();
		}
		this.updatePosition();
		this.teleportBird();
		this.as.animate(this.x,this.y,this.state,this.flying,this.faceRight);
	}
	this.teleportBird=function(){
		if (this.x<0||this.x>900){
			this.x+=900;
			this.x=this.x % 900;
		}
	}
	this.nextXPosition=function(){
		return this.x+this.xSpeed;
	}
	this.nextYPosition=function(){
		return this.y+this.ySpeed;
	}	
	this.updatePosition=function(){
		this.cords=[this.nextXPosition(),this.nextYPosition()];
		if (checkFloor(this.cords)){
			if(checkCeiling(this.cords)){
				if (!checkSides(this.cords)){
					this.xSpeed=-this.xSpeed/2;
				}
				this.y+=this.ySpeed;
			}else{
				this.xSpeed*=.85;
				this.ySpeed=-this.ySpeed/1.5;
			}
		}else{
			this.setGroundSpeed();
		}

		this.x+=this.xSpeed;
		if (checkLine(this.x+contSize*3,this.y+contSize*18+1,this.x+contSize*10,this.y+contSize*18+1)){
			if (this.flying==false){
				this.skidTimer=0;
				this.setGroundSpeed();
			}
			this.flying =true;
		}else{
			this.flying=false;
		}
		if (!checkInsides()){
			this.y+=10;
		}
	}
	this.setGroundSpeed=function(){
		if(abs(this.xSpeed)>=sprintSpeed){
			this.state=3;
		}else if (abs(this.xSpeed)>=runSpeed){
			this.state=2;
		}else if(abs(this.xSpeed)>=walkSpeed){
			this.state=1;
		}
		this.state*=posOrNeg(this.xSpeed);
		this.y=this.cords[1];
		this.ySpeed=0;

	}
	this.updateWalking=function(){
		if (this.inputTimer>=0&&this.input=="left"){
			this.inputTimer=-20;
		}else if (this.inputTimer<=0&&this.input=="right"){
			this.inputTimer=20;
		}else{
			this.inputTimer=updateTimer(this.inputTimer);
			this.input="none";
		}
		switch(this.state){
			case 3:
				if (this.input=="left"){
					this.state=.5;
					this.skidTimer=-skidTime;
				}
				break;
			case .5:
				if (this.input=="right"){
					this.state=2;
					this.skidTimer=0;
				}else if(this.skidTimer==0){
					this.state=0;
				}
				break;
			case -.5:
				if (this.input=="left"){
					this.state=-2;
					this.skidTimer=0;
				}else if(this.skidTimer==0){
					this.state=0;
				}
				break;
			case -3:
				if (this.input=="right"){
					this.state=-.5;
					this.skidTimer=skidTime;
				}
				break;
			default:
				if (this.input=="left"){
					if (this.state==0&&this.faceRight==1){
						this.bounce();
					}else{
						this.state--;
					}
				}else if (this.input=="right"){
					if (this.state==0&&this.faceRight==-1){
						this.bounce();
					}else{
						this.state++;
					}
				}
				break;
		}
		if (this.state<0){
			this.faceRight=-1;
		}else if (this.state>0){
			this.faceRight=1;
		}
		switch(abs(this.state)){
			case 3:
				this.xSpeed=sprintSpeed*posOrNeg(this.state);
				break;
			case 2:
				this.xSpeed=runSpeed*posOrNeg(this.state);
				break;
			case 1:
				this.xSpeed=walkSpeed*posOrNeg(this.state);
				break;
			case .5:
				if(this.skidTimer==0){
					this.state=0;
				}else{
					this.skidTimer=updateTimer(this.skidTimer);
					this.xSpeed=sprintSpeed/2*posOrNeg(this.state);
				}
				break;
			case 0:
				this.xSpeed=0;
				break;
			default:
				print("Unusual state "+this.state);
		}
	}
}

 
function makeBirdRed(){
		colors[1]=color(255,190,0);
		colors[2]=color(255,30,30);
		colors[3]=color(180,0,0,);
}
function makeBirdBlue(){
		colors[1]=color(180,210,10);
		colors[2]=color(30,30,250);
		colors[3]=color(0,0,180);
}