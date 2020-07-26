/*node hangedMan.js*/
'use strict';
let input = require('readline-sync');
let figlet = require('figlet');
figlet('HANG MAN', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
function isLetter() {
    let letter=input.question('What is your guess?\n');
    if (letter.charCodeAt(0)<65 || (letter.charCodeAt(0)>90 && letter.charCodeAt(0)<97) || letter.charCodeAt(0)>122) {
        console.log('Please enter only 1 character.');
        let letter=isLetter();
    }
    letter=letter.toLowerCase();
    return letter; /*returns to program a corrected for sure letter, and in lowerCase*/
}
function correct (letter, word) {
    let ans=word.includes(letter);
    return ans;
}
function replace(letter, word, hide) { /*if replace is actived, the user was correct with letter. now he gets the letters revealed: */
    let newhide='';
    for (let i=0; i<word.length; i+=1) {
        let next=1;
        if (hide.charAt(i)==word.charAt(i) && next==1) {
            newhide=newhide+hide.charAt(i);
            next=0;
        }
        if (word.charAt(i)==letter && next==1) {
            newhide=newhide+letter;
            next=0;
        }
        if (next==1) {  
            newhide=newhide+'*';
        }
    }
    return newhide;
}
let wordStock=['assignment','ninja','exercise'];
let attempts=10;
let word=wordStock[Math.floor(Math.random()*wordStock.length)];
let hide='';
let letter;
for(let i=0; i<word.length; i+=1) { /*Hiding word into hide*/
    hide=hide+'*';
}
while (attempts>0) {
    console.log('\nYou have',attempts,'guesses.');
    console.log('The word is:');
    console.log(hide);
    letter=isLetter();
    if (letter.length>1) {
        if (letter.localeCompare(word)==0) {
            attempts=-1; /*User was correct. game over*/
        }
        else {
            attempts-=1; /*User wrong. attempts minus 1*/
        }
    }
    if (letter.length==1) { 
        let ans=correct(letter, word);
        if (ans==true) {
            hide=replace(letter, word, hide);
            if (hide.localeCompare(word)==0) {
                attempts=-1;
            }
        }
        if (ans==false) {
            attempts-=1;
        }
    }
}
//if the loop ended, the game is over, and 2 oprions:
if (attempts==0) {
    console.log('You ran out of attempts. Good luck next time.\n\n');
}
if (attempts==-1) {
    console.log('You did it! You have revealed the word. Well played!\n\n');
}