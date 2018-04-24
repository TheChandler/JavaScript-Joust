function updateContestants(){
	if (player1!=null){
		player1.update();
	}
}
function spawnP1(){
	player1=new contestant(0,0,"player",new animationSet(sprite1));

}