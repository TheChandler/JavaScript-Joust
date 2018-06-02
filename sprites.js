var midplat;
function makePlatform(){
	midplat=createImage(70,4);
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
	midplat.loadPixels();
	var xSpot=0;
	var ySpot=0;
	for (var i=0;i<topMid.length;i+=2){
		if (topMid[i]==-1){
			i++;
			xSpot=0;
			ySpot++;
		}
		for (var j=0;j<topMid[i+1];j++){
			midplat.set(xSpot,ySpot,platColors[topMid[i]]);
			xSpot++;
		}
	}
	midplat.updatePixels();
}
var frame0;
function makePlayer(){

	colors.push(color(0,0));
	colors.push(color(248,248,0));
	colors.push(color(0,176,216));
	colors.push(color(0,72,144));
	colors.push(color(248,248,216));
	colors.push(color(32,72,72));
	colors.push(color(144,72,0));
	colors.push(color(248,144,72));
	colors.push(color(72,32,0));
	var frame =[0,0,0,0,1,1,0,0,6,6,0,0,0,
				 0,0,0,0,1,2,0,0,7,2,1,0,0,
				 0,0,0,0,1,1,0,0,7,6,0,0,0,
				 0,0,0,1,1,1,1,0,8,7,0,0,0,
				 3,2,0,1,1,1,1,2,1,6,7,1,1,
				 2,4,2,3,2,5,5,1,5,6,7,0,0,
				 0,5,3,2,5,4,4,3,6,7,6,0,0,
				 0,0,5,3,5,2,2,3,6,6,0,0,0,
				 0,0,0,5,2,5,2,5,3,0,0,0,0,
				 0,0,0,5,5,6,3,5,0,0,0,0,0,
				 0,0,0,6,6,8,6,6,0,0,0,0,0,
				 0,0,8,7,7,0,7,6,0,0,0,0,0,
				 0,0,6,7,8,6,7,0,0,0,0,0,0,
				 0,0,7,7,0,6,7,0,0,0,0,0,0,
				 0,0,6,7,0,6,7,8,0,0,0,0,0,
				 0,0,8,7,0,0,6,6,0,0,0,0,0,
				 0,0,6,7,0,0,8,7,0,0,0,0,0,
				 0,0,6,7,0,0,0,7,7,0,0,0,0];
	frame0=createImage(16,18);
	frame0.loadPixels();
	xSpot=0;
	ySpot=0;
	for (var i=0;i<18;i++){
		for (var j=0;j<13;j++){
			frame0.set(xSpot,ySpot,colors[frame[i*13+j]]);
			xSpot++;
		}
		xSpot=0;
		ySpot++;
	}
	frame0.updatePixels();
	var frame =[0,0,0,0,1,1,0,0,6,6,0,0,0,
				 0,0,0,0,1,2,0,0,7,2,1,0,0,
				 0,0,0,0,1,1,0,0,7,6,0,0,0,
				 0,0,0,1,1,1,1,0,8,7,8,0,0,
				 3,2,0,1,1,1,1,2,1,6,7,1,1,
				 2,4,2,3,5,5,5,5,0,6,7,0,0,
				 0,5,3,2,2,4,2,2,6,7,8,0,0,
				 0,0,5,3,2,2,3,2,7,6,0,0,0,
				 0,0,0,3,3,5,2,2,3,0,0,0,0,
				 0,0,0,5,4,6,4,4,5,0,0,0,0,
				 0,0,6,6,6,8,6,6,0,0,0,0,0,
				 0,7,7,6,0,0,7,6,0,0,0,0,0,
				 0,8,7,7,0,6,7,0,0,0,0,0,0,
				 0,0,0,6,7,7,6,0,0,0,0,0,0,
				 0,0,0,0,8,7,7,8,0,0,0,0,0,
				 0,0,0,0,8,7,6,0,0,0,0,0,0,
				 0,0,0,0,8,7,6,0,0,0,0,0,0,
				 0,0,0,0,8,6,7,6,0,0,0,0,0];

	frame1=createImage(16,18);
	frame1.loadPixels();
	xSpot=0;
	ySpot=0;
	for (var i=0;i<18;i++){
		for (var j=0;j<13;j++){
			frame1.set(xSpot,ySpot,colors[frame[i*13+j]]);
			xSpot++;
		}
		xSpot=0;
		ySpot++;
	}
	frame1.updatePixels();

	var frame =[0,0,0,0,1,1,0,6,6,0,0,0,0,
				 0,0,0,0,1,2,0,7,2,1,0,0,0,
				 0,0,0,0,1,1,0,7,8,0,0,0,0,
				 0,0,0,1,1,1,1,0,7,8,0,0,0,
				 3,2,0,1,1,1,1,2,6,6,7,1,1,
				 2,4,2,3,5,5,5,1,0,6,7,0,0,
				 0,5,3,2,2,4,2,3,2,7,6,0,0,
				 0,0,5,3,0,2,3,2,7,6,0,0,0,
				 0,0,0,3,3,3,4,2,2,0,0,0,0,
				 0,0,0,5,3,2,2,3,5,0,0,0,0,
				 0,0,0,5,6,6,6,5,0,0,0,0,0,
				 0,0,0,0,0,7,7,6,0,0,0,0,0,
				 0,0,0,0,6,7,6,8,0,0,0,0,0,
				 0,0,0,8,6,7,7,6,0,0,0,0,0,
				 0,0,0,8,7,6,0,7,7,6,0,0,0,
				 0,0,0,6,7,0,0,0,8,6,6,0,0,
				 0,0,0,6,7,6,0,0,0,0,6,0,0,
				 0,0,0,8,7,7,0,0,0,0,0,0,0];

	frame2=createImage(16,18);
	frame2.loadPixels();
	xSpot=0;
	ySpot=0;
	for (var i=0;i<18;i++){
		for (var j=0;j<13;j++){
			frame2.set(xSpot,ySpot,colors[frame[i*13+j]]);
			xSpot++;
		}
		xSpot=0;
		ySpot++;
	}
	frame2.updatePixels();

	var frame =[0,0,0,0,1,1,0,6,6,0,0,0,0,
				 0,0,0,0,1,2,0,7,2,1,0,0,0,
				 0,0,0,0,1,1,0,7,6,0,0,0,0,
				 0,0,0,1,1,1,1,0,7,6,0,0,0,
				 3,2,0,1,1,1,1,2,6,6,7,1,1,
				 2,4,2,2,5,2,2,1,0,6,7,0,0,
				 0,5,3,0,2,4,2,5,6,7,6,0,0,
				 0,0,5,5,5,2,3,2,7,6,0,0,0,
				 0,0,3,2,2,4,4,2,3,0,0,0,0,
				 0,0,5,3,5,2,2,3,5,0,0,0,0,
				 0,0,0,5,6,6,6,5,0,0,0,0,0,
				 0,0,0,0,7,6,7,8,0,0,0,0,0,
				 0,0,0,6,7,6,8,7,0,0,0,0,0,
				 0,0,0,7,6,0,8,7,6,0,0,0,0,
				 0,0,8,7,6,0,0,6,7,6,0,0,0,
				 0,0,6,7,8,0,0,0,6,7,8,0,0,
				 0,0,7,6,0,0,0,0,0,6,7,8,0,
				 0,0,7,7,0,0,0,0,0,8,8,7,0];


	frame3=createImage(16,18);
	frame3.loadPixels();
	xSpot=0;
	ySpot=0;
	for (var i=0;i<18;i++){
		for (var j=0;j<13;j++){
			frame3.set(xSpot,ySpot,colors[frame[i*13+j]]);
			xSpot++;
		}
		xSpot=0;
		ySpot++;
	}
	frame3.updatePixels();


	var frame =[0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,1,1,0,0,8,6,6,0,0,
				 0,0,0,0,1,2,0,0,0,2,7,1,0,
				 0,0,0,0,1,1,0,0,0,7,7,0,0,
				 0,3,2,1,1,1,1,0,0,6,7,0,0,
				 3,4,3,5,2,1,1,2,1,6,7,1,1,
				 3,3,2,3,2,4,4,6,6,6,7,0,0,
				 0,5,4,2,2,4,4,3,6,7,7,0,0,
				 0,0,2,3,5,5,3,2,7,7,6,0,0,
				 0,0,0,3,2,4,2,2,7,6,0,0,0,
				 0,0,0,5,2,7,7,2,5,0,0,0,0,
				 0,0,0,0,6,7,7,6,0,0,0,0,0,
				 0,0,0,0,0,7,7,6,8,0,0,0,0,
				 0,0,0,0,0,0,7,6,7,0,0,0,0,
				 0,0,0,0,0,0,8,7,6,7,0,0,0,
				 0,0,0,0,0,0,0,6,7,6,7,0,0,
				 0,0,0,0,0,0,0,0,7,7,8,7,0]

	frame4=createImage(16,18);
	frame4.loadPixels();
	xSpot=0;
	ySpot=0;
	for (var i=0;i<18;i++){
		for (var j=0;j<13;j++){
			frame4.set(xSpot,ySpot,colors[frame[i*13+j]]);
			xSpot++;
		}
		xSpot=0;
		ySpot++;
	}
	frame4.updatePixels();


	var frame =[2,3,3,0,1,1,0,0,0,6,6,0,0,
				 4,4,2,3,1,2,0,0,0,7,2,1,0,
				 0,2,2,3,1,1,0,0,0,7,6,0,0,
				 0,4,4,2,3,1,1,0,0,7,6,0,0,
				 0,0,2,2,3,1,1,2,1,7,6,1,1,
				 0,0,4,4,3,2,1,1,6,7,6,0,0,
				 0,0,0,3,2,3,3,3,7,7,8,0,0,
				 3,4,2,3,3,4,4,3,7,8,0,0,0,
				 3,3,3,3,3,2,2,3,6,0,0,0,0,
				 0,0,0,8,3,3,3,3,8,0,0,0,0,
				 0,0,0,8,6,6,8,6,8,0,0,0,0,
				 0,0,0,0,0,0,0,8,6,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0]

	frame5=createImage(16,18);
	frame5.loadPixels();
	xSpot=0;
	ySpot=0;
	for (var i=0;i<18;i++){
		for (var j=0;j<13;j++){
			frame5.set(xSpot,ySpot,colors[frame[i*13+j]]);
			xSpot++;
		}
		xSpot=0;
		ySpot++;
	}
	frame5.updatePixels();


	 var frame=[0,0,0,0,1,1,0,0,0,0,6,6,0,
	 			 0,0,0,0,1,2,0,0,0,0,7,2,1,
	 			 0,0,0,1,1,1,1,0,0,0,7,6,0,
	 			 0,0,0,1,1,1,1,2,1,1,7,6,0,
	 			 0,3,3,2,2,3,3,3,0,8,7,8,0,
	 			 3,3,3,4,4,2,2,3,6,7,6,0,0,
	 			 0,0,3,3,2,3,2,3,6,6,0,0,0,
	 			 0,0,0,3,3,3,4,3,3,0,0,0,0,
	 			 0,0,0,8,3,3,3,3,8,0,0,0,0,
	 			 0,0,0,8,6,6,8,6,8,0,0,0,0,
	 			 0,0,0,0,0,0,0,8,6,0,0,0,0,
	 			 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 			 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 			 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 			 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 			 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 			 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 			 0,0,0,0,0,0,0,0,0,0,0,0,0]


	frame6=createImage(16,18);
	frame6.loadPixels();
	xSpot=0;
	ySpot=0;
	for (var i=0;i<18;i++){
		for (var j=0;j<13;j++){
			frame6.set(xSpot,ySpot,colors[frame[i*13+j]]);
			xSpot++;
		}
		xSpot=0;
		ySpot++;
	}
	frame6.updatePixels();



sprite1=[frame0,frame1,frame2,frame3,frame4,frame5,frame6];

}