//This program get a string and recplaces every '_' with '*':
'use strict';
let input = require('readline-sync');
let string = input.question('Write a sentence: ');
let changed = string.replace(/ /g, "*");
console.log(changed);