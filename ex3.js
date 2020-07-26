'use strict';
let input = require('readline-sync');
let digit=['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
let index=input.questionInt('Pick a digit between 0-9:');
console.log(digit[index]);