function posOrNeg(value){
	if (value>0){
		return 1;
	}else if (value<0){
		return -1;
	}else{
		return 0;
	}
}
function updateTimer(time){
	if (time>0){
		return time-1;
	}else if(time<0){
		return time+1;
	}else{
		return 0;
	}
}
function maxer(num1,num2){
	if (num1>num2){
		return num2;
	}else{
		return num1;
	}
}
function miner(num1,num2){
	if (num1<num2){
		return num2;
	}else{
		return num1;
	}
}
function removeFromArray(arr,num){
	arr=concat(subset(arr,0,num),subset(arr,num+1,arr.length-num-1));
	return arr;
}
function timer(){
	var time=millis();
	this.set=function(){
		time=millis();
	}
	this.get=function(){
		return millis()-time;
	}
}