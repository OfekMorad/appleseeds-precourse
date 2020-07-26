/* node ass2.js This program is a game of a player vs. cpu . the player has an initial cash of 50, and can place a bet.
The player with the higher number wins, and his bet is given from the opponent's cash. */

function validBet(cash) {
    console.log('Place a bet between 1 to',cash,'ILS: ');
    let bet=input.questionInt();
    if (bet<1 || bet>cash) {
        console.log('\nYou were asked to place a bet between 1 to',cash,'ILS!');
        console.log('Chaeting must be dealt harshly! Bye now.\n');
        throw '';
    }
    return bet;
}
function hitMe (cash) {
    let bet=validBet(cash);
    let cardPC=Math.floor(Math.random() * 12) + 1;
    let cardPlayer=Math.floor(Math.random() * 12) + 1;
    while (cardPC==cardPlayer) {
        console.log('It\'s a draw of',cardPC,', so drawing again:\n');
        cardPC=Math.floor(Math.random() * 12) + 1;
        cardPlayer=Math.floor(Math.random() * 12) + 1;
    }
    console.log('Your card is',cardPlayer,'and my card is',cardPC,'.\n');
    if (cardPlayer>cardPC) {
        cash=cash+bet;
        console.log('You won',bet,'ILS! Now you have',cash,'ILS at your disposal.\n');
    }
    else {
        cash=cash-bet;
        console.log('You lost',bet,'ILS. Now you have',cash,'ILS at your disposal.\n');
        if (cash==0) {
            console.log('You ran out of money,',player,'... Good luck next time!\n\n');
            return cash;
        }
    }
    status (cash);
    return cash;
}
function status (cash) {
    if (cash>0) {
        console.log('1. Play another round.\n2. Leave with money, before it is too late!\n');
        let play;
        let flag=1;
        while(flag) {
            play=input.questionInt('Select 1 or 2: ');
            if (play==1 || play==2) {
                flag=0;
            }
        }
        if (play==1) {
            hitMe (cash);
        }
        if (play==2) {
            console.log('Well played,',player,'. You take with you',cash,'ILS. Till next time!\n\n');
            return;
        }
    }
}
'use strict';
console.log('\n\n<<~~~~ . WELCOME TO WARS! . ~~~>>\n')
let input = require('readline-sync');
let cash=50;
let player=input.question('\nHello player. What is your name? ');
console.log('\nWelcome to WARS,',player,'. You currently have',cash,'ILS at your disposal.\n');
cash=hitMe (cash);