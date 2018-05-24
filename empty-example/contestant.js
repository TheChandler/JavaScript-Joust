function contestant(x,y,type,as){
	this.xSpeed=0;
	this.ySpeed=0;
	this.x=x;
	this.y=y;
	this.type=type;
	this.width=13*contSize;
	this.height=18*contSize;
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
		this.ySpeed-=1.5;
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
		this.xSpeed=-this.xSpeed/1.5;
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
			this.xSpeed=posOrNeg(this.xSpeed)*maxer(abs(this.xSpeed),6);
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
		
		if(show){
			this.as.animate(this.x,this.y,this.state,this.flying,this.faceRight);
		}
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
		this.x+=this.xSpeed;
		this.y+=this.ySpeed;
		for (var i=0;i<plats.length;i++){
			this.bottomCheck(plats[i]);
			this.topCheck(plats[i]);
			this.sideCheck(plats[i]);
		}
		if (!this.flying&&this.noFloor()){
			this.flying=true;
			print("false Flying");
		}
	}
	this.bottomCheck=function(plat){
		if(plat.x<this.x+this.width&&plat.x+plat.width>this.x){//if they collide horizontally
			if (plat.y<this.y+this.height&&plat.y+plat.height>this.y+this.height){//if the bottom collides with the platform 
				this.flying=false;
				this.y=plat.y-this.height;
				this.ySpeed=0;
				this.setGroundSpeed();
				print("True walking");
			}
		}
	}
	this.sideCheck=function(plat){
		if (plat.x<this.x&&plat.x+plat.width>this.x&&plat.y<this.y+this.height&&plat.y+plat.height>this.y){
			this.x+=3;
			this.bounce();
		}else if (plat.x<this.x+this.width&&plat.x+plat.width>this.x+this.width&&plat.y<this.y+this.height&&plat.y+plat.height>this.y){
			this.bounce();
			this.x-=3;
		}
	}
	this.topCheck=function(plat){
		if (plat.x<this.x+this.width&&plat.x+plat.width>this.x&&plat.y<this.y&&plat.y+plat.height>this.y){
			this.ySpeed=-this.ySpeed/2
			this.y+=4;
		}
	}
	this.noFloor=function(){
		for(var i=0;i<plats.length;i++){
			if (plats[i].x 				  <this.x+this.width
			  &&plats[i].x+plats[i].width >this.x
			  &&plats[i].y 				  <this.y+this.height+1
			  &&plats[i].y+plats[i].height>this.y+this.height+1
			  ){
				return false;
			}
		}
		return true;
	}
	this.setGroundSpeed=function(){
		this.state=0;
		if(abs(this.xSpeed)>=sprintSpeed){
			this.state=3;
		}else if (abs(this.xSpeed)>=runSpeed){
			this.state=2;
		}else if(abs(this.xSpeed)>=walkSpeed){
			this.state=1;
		}
		this.state*=posOrNeg(this.xSpeed);
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