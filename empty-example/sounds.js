function sounds(){
	soundFormats('wav');
	flap=new Audio('sounds/joust_flap.wav');
	death=new Audio('sounds/DEATH.wav');
	skid=new Audio('sounds/joust_break2.wav');
	this.playFlap=function(){
		flap.play();
	}
	this.playDeath=function(){
		death.play();
	}
	this.playSkid=function(){
		skid.play();
	}
}