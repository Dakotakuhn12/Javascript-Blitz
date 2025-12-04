// JS can create functions in two ways.
// 1. Function declarations
/*
function someThing(){
    ...code
    return someValue
}
*/
// 2. Function exspressions:
// treats a function as a value.

const getToWork = function(){
    for(let i=0; i < 1000; i++){
        console.log("get to work!");
    }
};

getToWork();

// this function was hoisted - it is available above.
// function getToWork(){
    // for(let i=0; i < 1000; i++){
        // console.log("get to work!");
    // }
// };