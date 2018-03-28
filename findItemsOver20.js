function findItemsOver20(list){
	var empty = [];
for(var i=0;i<list.length;i++){
	var index = list[i];
	if (index.qty>20){
		empty.push(index);
		}
	}
return empty;
}
