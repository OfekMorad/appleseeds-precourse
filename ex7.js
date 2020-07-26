//This program calculates N! (N factorial).
function factorial(counter) { //Does the multipules of the reduced numbers.
    if (counter>1) {
        result=result*counter;
        counter-=1;
        factorial(counter);
    }
}
function positive() { //Makes sure a number is positive.
    let num=input.questionInt('Enter a positive number: ');
    if (num<0) {
        num=positive();
    }
    return num; 
}
'use strict';
let input = require('readline-sync');
let result=1;
let num=positive();
if (num==0) {
    result=0;
}
else {
    factorial(num);
}
console.log(result);
