//Immediately Invoked Function Expressions
//if there is a same global scope vars declaration in other JS file of same HTML file, then you can use IIFE.
(function(){
    console.log("IIFE");
})();

//Challenge 1
const getCelsius = f => (f - 32) * (5/9);
const faren = 32;
console.log(`The temp for ${faren}\xB0F  is ${getCelsius(faren)}\xB0C`);

//challenge 2
let arr = [190,267,334,45]
let max = arr[0], min = arr[0];
//for max element
function maxi(){
    arr.forEach((n)=> {
        if(n > max){
            max = n;
        };
    });
    return max;
}
//For min element
function mini(){
    arr.forEach((n)=> {
        if(n < min){
            min = n;
        };
    });
    return min;
}

function minMax(arr){
    const max = maxi(arr);
    const min = mini(arr);
    return ({
        min,
        max
    })
};
console.log(minMax(arr));

//Challenge 3
(function(l,b){
    const area = l*b;
    console.log(`The area of a rectangle with a length ${l} and width ${b} is ${area}.`);
})(5,10);