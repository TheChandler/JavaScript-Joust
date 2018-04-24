function setup(){
	var arr1=[1,2,3,4,5,6,7]
	print(arr1);
	print(subset(arr1,0,3));
	print(subset(arr1,4,3));
	var arr4;
	for (var i=0;i<arr1.length;i++){
		if (i==3){
			arr4=concat(subset(arr1,0,i),subset(arr1,i+1,arr1.length-i-1));
		}
	}
	print(arr4);
	removeFromArray(arr1,4);
	print(arr1);
}