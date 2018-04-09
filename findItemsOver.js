function findItemsOver(list,threshold){
	var empty = [];

for(var i=0;i<list.length;i++){
	var index = list[i];

	if (index.qty>threshold){
		empty.push(index);
		}
	}
return empty;
}
