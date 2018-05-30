var events=new Array();
function spawn(name){
	
}
function event(name){
	this.time=millis();
	this.length=0;
	this.drawThis=function(){}
	if (this.name="SpawnPlayer1"){
		this.length=1000;
		this.drawThis=drawSpawnPlayer1;
	}
}
function drawSpawnPlayer1(){
	fill(248,248,0);
	rect(364,230,13*contSize,18*contSize);
}
function updateEvents(){
	for (var i=0;i<events.length;i++){
		if (millis()-events[i].time>events[i].length){
			player1=new contestant(364,230,"player",new animationSet(sprite1));
			events=	concat(subset(events,0,i),subset(events,i+1,events.length-i-1));
		}else{
			events[i].drawThis();
		}
	}
}