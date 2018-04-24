function drawPlatform(x,y){
count=0;

	var platColors=[color(0,0),
				color(176,104,72),
				color(248,104,0),
				color(144,72,0),
				color(72,32,0),
				color(144,144,144)];

	var topMid= [1,10,2,3,3,1,4,2,5,22,4,1,2,2,1,1,2,2,1,26,-1,
				 1,5,2,8,3,2,4,3,5,18,4,2,3,7,2,7,1,3,2,5,1,2,2,8,-1,
				 0,2,2,3,3,4,2,4,3,3,4,21,3,10,2,8,3,2,2,4,3,2,4,5,0,2,-1,
				 0,5,4,7,3,2,4,2,3,2,4,23,3,4,4,1,3,14,4,5,2,2];

	var xSpot=x;
	var ySpot=y;
	for (var i=0;i<topMid.length;i+=2){
		if (topMid[i]==-1){
			i++;
			xSpot=x;
			ySpot=ySpot+contSize;
		}
		fill(platColors[topMid[i]]);
		
		for (var j=0;j<topMid[i+1];j++){
			drawPixel(xSpot,ySpot);
			xSpot+=contSize;
		}
	}
}
var count=0;
function drawPixel(x,y){
	rect(x,y,contSize,contSize);
	count++;
	print(count);

}