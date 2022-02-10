//assign function to a variable
const addFunction = function(a, b) {
    return a+b;
}

const traverseAndApplyToArray = function(functToApply, anArray, index) {
    console.log( "anArray: ", anArray);
    console.log("anArray.length", anArray.length);
    console.log("index", index);
    if(anArray.length === 0) {
        console.log("return 0");
        return 0;
    }
    else if( index < anArray.length-1) {
        console.log("anArray[index]", anArray[index]);
        return functToApply(anArray[index], traverseAndApplyToArray(functToApply, anArray, index+1))
    }
   else 
    {
        console.log("anArray[index]", anArray[index]);
        return anArray[index];
    }
}

const arrA = [1,2,3,4,5];
console.log(traverseAndApplyToArray(addFunction,arrA, 0));

console.log(traverseAndApplyToArray(addFunction,arrA, 3));

let multiplyFunction = function(x,y) {
    return x * y;
}

const arrB = [5,4,3,2,1];
console.log(traverseAndApplyToArray(multiplyFunction,arrB, 0));

console.log(traverseAndApplyToArray(multiplyFunction,arrB, 3));


let squaresPlusFunct = function(x,y) {
    return (x*x) + (y*y);
}
console.log(traverseAndApplyToArray(squaresPlusFunct,arrB, 0));

//rectangle has height, width

//doSomethingWithRectangle(afunction, height, width, color);