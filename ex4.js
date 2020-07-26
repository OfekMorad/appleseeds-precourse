//This program recommends a good restaurant according to user's choises:
'use strict';
let input = require('readline-sync');
let guests=input.question('How many people are you going with?\n'); //Better use: questionInt - to ensure getting a number,
//but temporarly might get a wrong type. So using question - following special instructions for ex4.
//Stops execution if: number of people is: not positive, friction or not a number:
if (guests<0 || (guests%1)!=0 || guests/1!=guests) {
    throw 'stop execution';
}
let kashrutLevel='None';
let resturant='Eat it all!';
if (input.keyInYNStrict('\nShould it be Kosher?\n')) {
    kashrutLevel='Kosher';
    resturant='Mezuza Light';
    if (input.keyInYNStrict('Should it be Kashrut Lemehadrin?\n')) {
        kashrutLevel='Kosher Lemehadrin';
        resturant="God\'s Might";
    }
}
let foodKind=['Meat', 'Dairy', 'Vegetarian'];
let index=input.keyInSelect(foodKind, 'What kind of food do you want?\n');
console.log('\n______________\n\nOrder summary:\n\nRecommended resturant: ', resturant, '\nGuests number: ', +
 ++guests, '\nLevel of Kashrut: ', kashrutLevel, '\nKind of food: ', foodKind[index], "\n\n\nThank you for using Yum-Aviv!\n");