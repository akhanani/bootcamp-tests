function countAllPaarl(count){
console.log (count);
var num = [];
var plates =count.split(',');
for (var l=0;l<plates.length;l++){
if (plates[l].trim().startsWith('CJ')){
num.push(plates[l])
}
}
 return num.length;

};
