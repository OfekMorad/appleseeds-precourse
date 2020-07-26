//This program gets a string from the user and prints the longest word in it:
'use strict';
let input = require('readline-sync');
let str = input.question('Write something: ');
let index, indexMax;
let count=0, countMax=0;
let space=' ';
for (let i=0; i<=str.length-1; i+=1) {
    if (str.charAt(i)==' ' || str.charCodeAt(i)<65 || (str.charCodeAt(i)>90 && str.charCodeAt(i)<97) || str.charCodeAt(i)>122) {
        count=0;
    }
    else {
        count+=1;
        if (count>=countMax) {
            indexMax=i;
            countMax=count;
        }
    }
}

console.log('\n', str.substr(indexMax-countMax+1, countMax), '(', countMax, ')\n');