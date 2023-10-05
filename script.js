// Function without argument

function myFunc() {
    console.log('Hello this is my first function');
};

myFunc();

// Function with arguments

function myArgumentFunc(a, b) {
    return a + b;
};

console.log(myArgumentFunc(20, 87));


// Convert Fahrenheit to Celsius

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit - 32)
};

console.log(toCelsius(79).toFixed(2));



// passing argument

function isSleeping(name, time) {
    console.log(`${name} is sleeping from ${time}`)
};

isSleeping('Abul', '10pm');
isSleeping('Babul', '11pm');
isSleeping('Kabul', '12pm');
isSleeping('Habul', '9pm');


// FUNCTION RETURN

function calculateFunc(a, b) {
    return a * b;
};

let x = calculateFunc(12, 88);
console.log(x);


// Function Scope

function scopeFunc(a) {
   let y = 'Nabila';
   return y;
};
// it will not possible to access a function scope variable. because its a function scope.
console.log(scopeFunc());


// A function can be declare from a variable. its a anonymous functions

const a = function(x, y) {
    return x * y ;
};

let z = a(12, 33);
console.log(z);

// Function will not hoisting if we keep it in a variable

const staticeFunc =  function(a, b){
    return a + b ;
};

console.log(staticeFunc(33, 12));

// Self invoking functions IIFE(Immidiatly )

(function(){
    console.log('I am a freelancer');
})();


// Functions arguments and parameters. we can give different arguments in same function. Functions parameter has no datatype.

function newFunc(para1, para2, para3){
    return Number(para1 + para2 + para3);
};

console.log(newFunc(12, 45, 78));
console.log(newFunc(10, 22, 66));
console.log(newFunc('Nabila', 22, 11));



