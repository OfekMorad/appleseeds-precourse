/*This program reverses an array of numbers in the length of n. n is decided by user: */
'use strict';
function rev() {
    let input = require('readline-sync');
    let n=input.questionInt('Chose a number for the length of the array: ');
    let arr=[];
    arr.length=n;
    for (let i=0; i<arr.length; i+=1) {
        arr[i]=Math.floor(Math.random()*50)+1;
    }
    console.log('\nNormal: ',arr);
    arr=arr.reverse();
    console.log('\nReversed: ',arr,'\n\n');
}
rev();