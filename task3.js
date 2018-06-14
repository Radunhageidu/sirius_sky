var n1 = Number(process.argv[2]);
var n2 = Number(process.argv[3]);

 function NOD(a,b) {
if (b!=0){
var temp=a % b;
return NOD(b,temp);
	}
else {
return Math.abs(a);
	}
}
console.log(NOD(n1, n2));
