function countAllFromTown (number, locInd){
console.log (number);
var train =[];
  var num =0;
var toyota =number.split(',');
for (var a=0;a<toyota.length;a++){
if (toyota[a].trim().startsWith(locInd)){
num+=1;
}
}
return num;

};
