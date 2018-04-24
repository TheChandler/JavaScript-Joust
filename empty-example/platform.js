function checkPlats(x,y){
	for (var i =0;i<plats.length;i++){
		p = plats[i];
		if (p.x<x+contSize*13&&p.x+p.width>x&&p.y<y+contSize*18&&p.y+p.height>y){
			return false;
		}
	}
	return true;
}
function checkInsides(x,y){
	for (var i=0;i<plats.length;i++){
		p=plats[i];
		if (x+contSize*5<p.x+p.width&&x+contSize*8>p.x&&y+contSize<p.y+p.height&&y+contSize*18>p.y){
			return false;
		}
	}
	return true;
}
function checkPixel(x,y){
		for (var i =0;i<plats.length;i++){
		p = plats[i];
		if (p.x<x&&p.x+p.width>x&&p.y<y&&p.y+p.height>y){
			return false;
		}
	}
	return true;
}
function checkLine(x1,y1,x2,y2){
		for (var i =0;i<plats.length;i++){
		p = plats[i];
		if (p.x<x2&&p.x+p.width>x1&&p.y<y2&&p.y+p.height>y1){
			return false;
		}
	}
	return true;	
}
function checkFloor(cords){
		for (var i =0;i<plats.length;i++){
		p = plats[i];
		if (p.x+contSize*3<cords[0]+13*contSize&&p.x+p.width-contSize*3>cords[0]&&p.y<cords[1]+18*contSize&&p.y+p.height>cords[1]+18*contSize){
			cords[1]=p.y-18*contSize;
			return false;
		}
	}
	return true;	
}
function checkCeiling(cords){
		for (var i =0;i<plats.length;i++){
		p = plats[i];
		if (p.x<cords[0]+13*contSize&&p.x+p.width>cords[0]&&p.y<cords[1]&&p.y+p.height>cords[1]){
			return false;
		}
	}
	return true;	
}

function checkSides(cords){
		for (var i =0;i<plats.length;i++){
		p = plats[i];
		if (p.x+contSize*2<cords[0]&&
			p.x+p.width-contSize*2>cords[0]&&
			p.y<cords[1]+contSize*18-3&&
			p.y+p.height>cords[1]+2){
			return false;
		}else if(p.x+contSize*2<cords[0]+13*contSize&&p.x+p.width-contSize*2>cords[0]+13*contSize&&p.y<cords[1]-3+contSize*18&&p.y+p.height>cords[1]+2){
			return false;
		}
	}
	return true;	
}

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
function drawPlatforms(){
	
}