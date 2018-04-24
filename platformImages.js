var img;
function setup(){

	createCanvas(700,600);
	background(0);
	noSmooth();
	img=createImage(51,7);
	createPlatforms();
}
function createPlatforms(){
	img.loadPixels();
	colors=new Array();
	colors.push(color(0,0));
	colors.push(color(176,104,72));
	colors.push(color(248,144,72));
	colors.push(color(144,72,0));
	orders=[1,51,-1,
			3,1,2,1,1,6,2,4,1,1,2,4,1,4,2,3,1,6,2,6,1,1,2,1,1,2,2,8,1,1,2,2,-1,
			0,2,3,49,-1,
			0,3,3,45,-1];
	xspot=0;
	yspot=0;
	for (var i=0;i<orders.length;i+=2){
		if (orders[i]==-1){
			i++;
			yspot++;
			xspot=0;
		}
		collar=colors[orders[i]];
		for (var j=0;j<orders[i+1];j++){
			img.set(xspot,yspot,collar);
			xspot++;
		}
	}
	img.updatePixels();
}
function draw(){
	image(img,10,10,500,100);
	image(img,100,100,510,65);
}