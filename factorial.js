function factorialSub(x) {
//if number is 0
    if(x===0) {
        return 1;
    }
    else {//if number is positive
        return x * factorialSub(x-1);
    }
}





function factorial(num) {
    let result;

    try {
        if(num < 0) {
            throw "Only the factorial of positive numbers can be calculated.";
        }
        //calling factorial(num) if num is non-negative
        result = factorialSub(num);
    }
    catch(err) {
        if(err.message === undefined){
            console.log(`factorial encountered an error => error: ${err}.`);
        } else {
            console.log(`factorial encountered an error => error message: ${err.message}.`);
        }
        
    }
    finally {
        
        console.log(`The factorial of ${num} is ${result}`);
    }

    return result;
}


/*
const factorial_Neg10 = factorial(-10);
console.log(`factorial_Neg10 is ${factorial_Neg10}.`);
*/

const factorial_Pos10 = factorial(3);
console.log(`factorial_Pos10 is ${factorial_Pos10}.`);

//0! is factorial(0) : 1
//1! is factorial(1) : 1*1
//2! is factorial(2) : 2*1*1
//3! is factorial(3) : 3*2*1*1

//3 * factorial(2)
//3*2*factorial(1))
//3*2*1*factorial(0))
//3*2*1*1

