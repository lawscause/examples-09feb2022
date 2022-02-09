const addValsInArray = function(anArray, index) {
    console.log( "anArray: ", anArray);
    console.log("anArray.length", anArray.length);
    console.log("index", index);
    if(anArray.length === 0) {
        console.log("return 0");
        return 0;
    }
    else if( index < anArray.length-1) {
        console.log("anArray[index]", anArray[index]);
        return anArray[index] + addValsInArray(anArray, index+1);
    }
   else 
    {
        console.log("anArray[index]", anArray[index]);
        return anArray[index];
    }
}

let arr = [1,2,3,4,5];
console.log(addValsInArray(arr, 0));


