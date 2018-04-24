contestants=new Array();

function spawnP1(){
	contestants.push(new contestant(100,100,"p1",new animationSet(sprite1)));
	setPlayer1(contestants.length-1);
	contestants[player1].name="player 1";
}
function spawnEn(){
	contestants.push(new contestant(600,100,"en",new animationSet(sprite1)));
	aiCont.addBird(contestants.length-1);
}
function updateContestants(){
	for (var i =0;i<contestants.length;i++){
		for (var j=0;j<contestants.length;j++){
			if (i!=j&&collides(contestants[i],contestants[j])){
				if (contestants[i].y>contestants[j].y){
					print(contestants);
					contestants[j].bounceOff(contestants[i].y);
					contestants=removeFromArray(contestants,i);
					if (i!=player1&&i!=player2){
						aiCont.remove(i);
					}
					if (i<player1){
						player1--;
					}else if (i==player1){
						player1=-1;
					}
					if (i<player2){
						player2--;
					}else if (i==player2){
						player2=-1;
					}
				}
			}
		}
	}
	for (var i =0;i<contestants.length;i++){
		contestants[i].update();
	}
}
function collides(con1,con2){
	if (con1.x+13*contSize>con2.x&&con1.x<con2.x+contSize*13){
		if (con1.y+18*contSize>con2.y&&con1.y<con2.y+18*contSize){
			return true;
		}
	}
	return false;
}
function resolveCollision(con1,con2){
	if (con1.y>con2.y){

	}
}
function drawBlackBoxes(){
	fill(0);
	for (var i=0;i<contestants.length;i++){
		rect(contestants[i].x-1,contestants[i].y-1,contSize*15,contSize*18);
	}
}