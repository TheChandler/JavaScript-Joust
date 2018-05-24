var player1=null;
var player2=-1;


function setPlayer1(num){
	player1=num;
	print("Player1= "+num);
}
function keyPressed(){
	if (player1!=null){
		if (keyCode==32){
			player1.flap();
		}
	}else{
		if(keyCode==32){
			events.push(new event("SpawnPlayer1"));
		}
	}
}
show=true;
function keyTyped(){
	if (key=='o'){
		spawnEn();
	}else if (key=='j'){
	 	frameRate(1);
	}else if(key=='k'){
		frameRate(60);
	}else if(key=='i'){
		show=!show;
	}
}
function update(){
	if (player1!=null){
		if (keyIsDown(LEFT_ARROW)){
			player1.left()
		}else if (keyIsDown(RIGHT_ARROW)){
			player1.right();
		}else{
			player1.none();
		}
	}
	aiCont.update();
}