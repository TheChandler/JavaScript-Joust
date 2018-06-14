var events=new Array();
function spawn(name){
	
}
function event(name){
	this.name=name;
	this.time=millis();
	this.length=0;
	this.drawThis=function(){

	}	
	switch (name){
		case "SpawnPlayer1":
			this.length=1000;
			this.drawThis=drawSpawnPlayer1;
			break;
		case "Enemy1":
			this.length=1000;
			this.drawThis=drawSpawnEnemy1;
			break;
		case "Enemy2":
			this.length=1000;
			this.drawThis=drawSpawnEnemy2;
			break;
		case "Enemy3":
			this.length=1000;
			this.drawThis=drawSpawnEnemy3;
			break;		
		case "Enemy4":
			this.length=1000;
			this.drawThis=drawSpawnEnemy4;
			break;
		case "Enemy5":
			this.length=1000;
			this.drawThis=drawSpawnEnemy5;
			break;	
		}
}
function drawSpawnPlayer1(){
	fill(248,248,0);
	rect(364,230,13*contSize,18*contSize);
}
function drawSpawnEnemy1(){
	fill(248,0,0);
	rect(99,375,13*contSize,18*contSize);
}
function drawSpawnEnemy2(){
	fill(248,0,0);
	rect(700,375,13*contSize,18*contSize);
}
function drawSpawnEnemy3(){
	fill(248,0,0);
	rect(370,230,13*contSize,18*contSize);
}
function drawSpawnEnemy4(){
	fill(248,0,0);
	rect(790,105,13*contSize,18*contSize);
}
function drawSpawnEnemy5(){
	fill(248,0,0);
	rect(44,105,13*contSize,18*contSize);
}
function updateEvents(){
	for (var i=0;i<events.length;i++){
		if (millis()-events[i].time>events[i].length){
			
			switch(events[i].name){
				case "SpawnPlayer1":
					player1=new contestant(364,230,"player",new animationSet(sprite1));
					player1.maxSpeed=7;
					break;
				case "Enemy1":	
					spawnEnemy(1);
					break;
				case "Enemy2":
					spawnEnemy(2);
					break
				case "Enemy3":
					spawnEnemy(3);
					break;
				case "Enemy4":
					spawnEnemy(4);
					break;
				case "Enemy5":
					spawnEnemy(5);
					break;
			}
			events=	concat(subset(events,0,i),subset(events,i+1,events.length-i-1));
		}else{
			events[i].drawThis();
		}
	}
}