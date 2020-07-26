/*This program prints the maximum number and the minimum numbers in an array in the length of n. n is decided by user: */
'use strict';
let input = require('readline-sync');
let n=input.questionInt('Chose a number for the length of the array: ');
let arr=[];
arr.length=n;
let min=50, max=1;
for (let i=0; i<arr.length; i+=1) {
    arr[i]=Math.floor(Math.random()*50)+1;
    if (arr[i]>max) {
        max=arr[i];
    }
    if (arr[i]<min) {
        min=arr[i];
    }
}
console.log(arr);
console.log('Minimum is',min,'\nMaximum is',max,'\n');