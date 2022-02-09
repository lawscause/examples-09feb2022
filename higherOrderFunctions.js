//assign function to a variable
const addFunction = function(a, b) {
    return a+b;
}

//use functions as arguments to other functions
function add10plus100(addFunction) {
    return addFunction(10,100);
}


function processNumbers(num1, num2, processFunct) {
    return processFunct(num1, num2);
}

function testProcessNumbers(a1, a2, pFunct) {
    console.log("a1: ", a1);
    console.log("a2: ", a2);
    console.log("pFunct: ", pFunct);
    let result = pFunct(a1, a2);
    console.log(`processNumbers(${a1}, ${a2}, ${pFunct}) returns ${pFunct(a1, a2)} `);
}

console.log(`add10plus100(addFunction) is ${add10plus100(addFunction)}`);
testProcessNumbers(1, 2, addFunction);