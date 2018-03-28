function totalPhoneBill (counter){
var num= counter.split(', ');
var call=[];
var sms = [];
for (var c=0;c<num.length;c++){
if (num[c]==='call'){
call.push(num[c]);

}else if (num[c]==='sms'){
 sms.push(num[c]);
 }
}
var calltotal = call.length*2.75;
var smstotal = sms.length*0.65;
 var a =calltotal+smstotal
  return "R"+a.toFixed(2);
}
