var player1=-1;
var player2=-1;


function setPlayer1(num){
	player1=num;
	print("Player1= "+num);
}
function keyPressed(){
	if (player1>-1){
		if (keyCode==32){
			contestants[player1].flap();
		}
	}else{
		if(keyCode==32){
			events.push(new event("SpawnPlayer1"));
		}
	}
}
function keyTyped(){
	if (key=='o'){
		spawnEn();
	}else if (key=='j'){
	 	frameRate(1);
	}else if(key=='k'){
		frameRate(60);
	}
}
function update(){
	if (player1>-1){
		if (keyIsDown(LEFT_ARROW)){
			contestants[player1].left();
		}else if (keyIsDown(RIGHT_ARROW)){
			contestants[player1].right();
		}else{
			contestants[player1].none();
		}
	}
	aiCont.update();
}