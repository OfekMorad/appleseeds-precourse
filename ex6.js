//This program validates a number is largerer than 10:
'use strict';
let input = require('readline-sync');
let num=input.questionInt('please choose a number larger than 10: ');
let flag=1;
while (flag) {
    let num=input.questionInt('please choose a number LARGER than 10: ');
    if (num > 10) {
        flag=0;
    }
}
console.log ('thank you');