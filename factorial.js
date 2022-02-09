function factorialSub(x) {

    if(x===0) {//if number is 0
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

const factorial_Pos10 = factorial(10);
console.log(`factorial_Pos10 is ${factorial_Pos10}.`);

const factorial_Neg10 = factorial(-10);
console.log(`factorial_Neg10 is ${factorial_Neg10}.`);
