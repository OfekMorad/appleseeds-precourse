//This program gets a string, capitalizes every vowel (a, e, i, o, u, y) and print the result.
'use strict';
let input = require('readline-sync');
let str = input.question('Write a sentence: ');
let STR = str.replace(/a|e|i|o|u|y/g, function (up) {
  return up.toUpperCase();
});
console.log('\n', STR, '\n');