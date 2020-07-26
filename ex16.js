/*This program prints in a new array2[] the index of the maximum number and the minimum from an array1[n]. n is decided by user: */

'use strict';
let input = require('readline-sync');
let n=input.questionInt('Chose a number for the length of the array: ');
let arr=[], index=[0,0];
let max=0, min=100;
arr.length=n;
for (let i=0; i<arr.length; i+=1) {
    arr[i]=Math.floor(Math.random() * 101);
    if (arr[i]>max) {
        max=arr[i];
        index[1]=i;
    }
    if (arr[i]<min) {
        min=arr[i];
        index[0]=i;
    }
}
console.log(arr);
console.log('\nAnd the index array for min (0) and max(1) is:',index,'\n');
