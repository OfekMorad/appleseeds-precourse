//This program checks if a string is a palindrome (identical from both sides):
'use strict';
let input = require('readline-sync');
let str = input.question('Write 1 word or number: ');
let flag=1;
for (let i=0; i < ((str.length-1)/2); i+=1) {
    if (str.charAt(i)!==str.charAt((str.length-1)-i)) {
        flag=0;
        console.log('\n\n', str, 'is not a palindrome...  :/\n');
        break;
    }
}
if (flag) {
    console.log('\n\n', str, 'is a palindrome!  :)\n');
}
