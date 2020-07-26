//This program prints all prime numbers from 1 to n.
function positive() { //Makes sure a number is positive.
    let num=input.questionInt('Enter a positive number: ');
    if (num<0) {
        num=positive();
    }
    return num; 
}
'use strict';
let input = require('readline-sync');
let n=positive();
for (let i=2; i<=n; i+=1) {
    for (let j=2; j<=i; j+=1) {
        if ((i%j)==0) {
            if(i==j) {
                console.log(i);
            }
            else {
                break;
            }
        }
    }
}
