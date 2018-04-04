
function mostProfitableDepartment(salesData){
var map = {}
var max = 0;
 var name = '';
  for( var i=0;i<salesData.length;i++){
  var saleslist  = salesData[i];
    if (map[saleslist.department] === undefined){
    	map[saleslist.department]=0
    }
    map[saleslist.department] += saleslist.sales
  }
  for(var sos in map){
  	if (map[sos]>max ){
    max = map[sos]
      name = sos
    }
  }
  return name
}
