/*This program joins 2 string arrays into 1: */
'use strict';
let input = require('readline-sync');
let sen=input.question('\nWrite first sentence: \n');
let a=[], b=[];
a=sen.split(' ');
console.log(a);
sen=input.question('\nNow write second sentence: \n');
b=sen.split(' ');
console.log(b);
a=a.concat(b);
console.log('\nAnd the new combined array is:',a,'\n\n');