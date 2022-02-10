function power(x,y){
	var pow=1;
	for (var i=0;i<y;i++){
        console.log(`i:${i}, pow is assigned ${pow}*${x}`);
		pow = pow*x;
        console.log(`pow is now ${pow}`);
	}
	return pow;
}


function powerRec(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * powerRec(base, exponent - 1);
    }
}


let test_power1 = power(2,10);
let test_powerRec1 = powerRec(2,10);

let test_power2 = power("a",10);
let test_powerRec2 = powerRec("a",10);
console.log(test_powerRec2);