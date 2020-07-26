/* This program perform a scorring quiz - giving 4 options per question, and gives a summary depending on score: */
 
function ninjaTime (ans) { /*ninjaTime mixes the score according to question number (qNo): */
    console.log('\n~-.-~-.-~-.-~-.-~-.-~-.-~-.-~\n');
    if (ans==-1) {
        qNo+=1;
        return;
    }
    let actqNo=qNo%4;
    if (actqNo!=0) {
        for (let i=0; i<actqNo; i+=1) {
            ans+=1;
        }
        ans=ans%4;
    }
    ans+=1;//CHECKING
    score=score+ans;
    qNo+=1;
}
function sum () {
    console.log('\nYou scored:', score, '.');
    if (score<10) {
        console.log('\nPlease take the quiz again, and this time don\'t skip any question (choosing 0 is skiping).\n');
    }
    if (score>=10 && score<=17) {
        console.log('\nIt seems you believe this candidate can do better.\nWhy don\'t you give him a hug, when covid-19 ends? :/\n\n');
    }
    if (score>=18 && score<=24) {
        console.log('\nIt seems like you think this candidate is ok.\nWhy don\'t you send him a smily? :)\n\n');
    }
    if (score>=25 && score<=32) {
        console.log('\nIt seems like you like what this candidate has to offer, don\'t you?\nWhy don\'t you give him a chocolate? =)\n\n');
    }
    if (score>=33 && score<=40) {
        console.log('\nIt seems like you just love what this candidate has to offer.\nWhy don\'t you send him to a vacation? ;]\n\n');
    }
    console.log('\nTill next time...!\n\n');
    console.log('~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~\n');
}
'use strict';
let input = require('readline-sync');
let score=0, qNo=1;
console.log('\n\n            |   |   |   |   |   |   |   |   |');
console.log('            |   |   |   |   |   |   |   |   |');
console.log('            V   V   V   V   V   V   V   V   V');
console.log ('\n          << !Welcome, ladies and gentelmen! >>\n\n<< !!Today you have the opportunity to Rate-The-Candidate!! >>\n\n');
console.log('~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~-.-~\n');
  // q1: Actuall score = -1 (answer 4="1")
console.log('Question no.1:');
let q=['So-so.', 'It was ok, i guess.', 'Yes, it was fun!', "I didn't even see there are options."];
let arrAns=input.keyInSelect(q, '  Did you enjoy the variety of restaurants in the "Yum-Aviv" reccommender (ex4)?');
ninjaTime (arrAns);
  // q2: Actuall score = -2 (answer 3="1")
console.log('Question no.2:');
q=['Yeah, i guess.', 'Totally.', 'Is that the best you can do?', 'In a way...'];
arrAns=input.keyInSelect(q, '  Did you find the code of this candidate at ex5 (odd numbers) efficient?');
ninjaTime (arrAns);
  // q3: Actuall score = -3 (answer 2="1")
console.log('Question no.3:');
q=['Awesome.', 'Yeah, no.', 'So-so.', 'Good.'];
arrAns=input.keyInSelect(q, '  How would you rate this candidate\'s code at ex6 (largerer than 10)?');
ninjaTime (arrAns);
  // q4: Actuall score = -0 (answer 1="1")
console.log('Question no.4:');
q=['Weak.', 'Yep.', 'Goodie.', 'Greatness.'];
arrAns=input.keyInSelect(q, '  How would you rate this candidate\'s code at ex7 (N factorial)?');
ninjaTime (arrAns);
  // q5: Actuall score = -1 (answer 4="1")
console.log('Question no.5:');
q=['He understands the tasks.', 'He needs to get the geek in him out.', 'He has a ninja within.', 'Blip.'];
arrAns=input.keyInSelect(q, '  So far, how would you rate this candidate?');
ninjaTime (arrAns);
  // q6: Actuall score = -2 (answer 3="1")
console.log('Question no.6:');
q=['Cool.', 'Fantastic!', 'Nah.', 'Basic.'];
arrAns=input.keyInSelect(q, '  How would you rate this candidate\'s code at ex9 (prime numbers)?');
ninjaTime (arrAns);
  // q7: Actuall score = -3 (answer 2="1")
console.log('Question no.7:');
q=['Awesome.', 'Yeah, no.', 'So-so.', 'Good.'];
arrAns=input.keyInSelect(q, '  How would you rate this candidate\'s code at ex10 (stars instead of spaces?');
ninjaTime (arrAns);
  // q8: Actuall score = -0 (answer 1="1")
console.log('Question no.8:');
q=['Seen better.', 'wow.', 'WOW.', 'NEVER have i seen anything like this!.'];
arrAns=input.keyInSelect(q, '  How would you rate this candidate\'s code at ex11 (palindrome)?');
ninjaTime (arrAns);
  // q9: Actuall score = -1 (answer 4="1")
console.log('Question no.9:');
q=["Slim.", "I think i'll vote Yes for him.", '100%', "Don't call us, we'll call you."];
arrAns=input.keyInSelect(q, '  What do you think are the chances of this candidate to get accepted to appleseeds?');
ninjaTime (arrAns);
  // q10: Actuall score = -2 (answer 3="1")
console.log('Last question:');
q=['Yeah, not bad at all.', 'Very enjuyable. I want to do it all over again!', 'Longest 2 minutes of my life.', 'Decent.'];
arrAns=input.keyInSelect(q, '  What do you think about this quiz?');
ninjaTime (arrAns);
  //Summary:
sum ();