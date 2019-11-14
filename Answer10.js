function convertToDecimal(a,b,c,d){
	console.log([parseFloat(a)/100,parseFloat(b)/100,parseFloat(c)/100,parseFloat(d)/100]);
}
const x = ["33%", "98.1%", "56.44%", "100%"];
convertToDecimal.apply(null,x);
