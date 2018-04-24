function aiController(difficulty){
	switch(difficulty){
		case "easy":
			this.inputDelay=10;
			break;
		case "medi":
			this.inputDelay=8;
			break;
		case "hard":
			this.inputDelay=6;
			break;
	}


	this.birds=new Array();
	this.addBird=function(num){
		this.birds.push(num);
	}
	this.remove=function(num){
		for (var i=0;i<this.birds.length;i++){
			print(this.birds[i]+" "+num);
			if(this.birds[i]==num){

				this.removeBird(i);
			}
		}
	}
	this.removeBird=function(num){
		this.birds=removeFromArray(this.birds,num);
	}


	this.update=function(){
		for (var i=0;i<this.birds.length;i++){
			this.updateBird(this.birds[i]);
		}
	}

	this.updateBird=function(num){
		this.bird=contestants[num];
		this.bird.flap();
	}
}