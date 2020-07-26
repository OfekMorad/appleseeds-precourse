/*This program creates an array with 5 elements, and logs every element in a separate line: */
'use strict';
let input = require('readline-sync');
let n=5;
let arr=[];
arr.length=n;
for (let i=0; i<arr.length; i+=1) {
    arr[i]=Math.floor(Math.random() * 101);
    console.log(arr[i]);
}
console.log('\nThe array is: ',arr);