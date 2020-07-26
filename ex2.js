function makes10() {
    'use strict';
    let input = require('readline-sync');
    let num1 = input.questionFloat('Enter the first number:');
    let num2 = input.questionFloat('Now, enter the second number:');
    if(num1+num2===10) {
        console.log('makes 10');
    }
    else {
        console.log('nope');
    }
}
makes10();