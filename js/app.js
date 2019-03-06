'use strict';

//a guessimg game with yes/no answers. user input must accept either yes or no
    //must accomadate users using all caps or just Y/N
    //use descriptive console.log messages for each question

//five questions are: 
//1>Did I serve in the military?  2>Am I older than 30?  3>Do i like dogs?  4>Do I like Cats?  5>Do I like Trump? 

var militaryServiceY
var olderThanThirtyY
var likeDogsY
var likeCatsN
var likeTrumpN

//must accomodate users entering all caps or just Y/N
 //use descriptive console.log messages for each question


var militaryServiceY = prompt('Did I serve in the military?');
    militaryServiceY = militaryServiceY.toUpperCase()
    if (militaryServiceY === 'N' || militaryServiceY === 'NO' ) {
        alert('Your guess was NO. That is wrong');
    } else if (militaryServiceY == 'Y' || militaryServiceY === 'YES') {
        alert('Your guess was YES. That is correct. I am a U.S Marine SEMPER FI!');
    }   else {
        alert('Follow directions and only answer YES or NO please! ');
    }
console.log ( 'guess for my military service was ' + militaryServiceY);


 
var olderThanThirtyY= prompt('Am I over the age of 30?');
    olderThanThirtyY = olderThanThirtyY.toUpperCase()
    if (olderThanThirtyY === 'N' || olderThanThirtyY === 'NO' ) {
        alert('your guess was NO. That is wrong but thanks :-)');
    } else if (olderThanThirtyY == 'Y' || olderThanThirtyY === 'YES') {
        alert('Your guess was YES. That is correct!');
    }   else {
        alert('Follow directions and only answer YES or NO please! ');
    }
console.log ( 'guess for if I am over 30 was ' + olderThanThirtyY);

var likeDogsY = prompt('Do like dogs as pets?');
    likeDogsY = likeDogsY.toUpperCase()
    if (likeDogsY=== 'N' || likeDogsY === 'NO' ) {
        alert('Your guess was NO. That is wrong');
    } else if (likeDogsY == 'Y' || likeDogsY === 'YES') {
        alert('Your guess was YES. Dogs are mans best friend!');
    }   else {
        alert('Follow directions and only answer YES or NO please!');
    }
console.log ( 'guess for if I like dogs was ' + likeDogsY);

var likeCatsN = prompt('Did I like cats as pets?');
    likeCatsN = likeCatsN.toUpperCase()
    if (likeCatsN === 'N' || likeCatsN === 'NO' ) {
        alert('Your guess was NO. That is correct!');
    } else if (likeCatsN == 'Y' || likeCatsN === 'YES') {
        alert('Your guess was YES. That is wrong. Cats never listen!');
    }   else {
        alert('Follow directions and only answer YES or NO please! ');
    }
console.log ( 'guess for if I like cats is ' + militaryServiceY);

var likeTrumpN = prompt('Do I like Donald Trump as president?');
    likeCatsN = likeCatsN.toUpperCase()
    if (likeCatsN === 'N' || likeCatsN === 'NO' ) {
        alert('Your guess was NO. That is correct! I can tell we are gonna be friends :-)');
    } else if (likeCatsN == 'Y' || likeCatsN === 'YES') {
        alert('Your guess was YES. That is wrong, but you are entittled to your opinion');
    }   else {
        alert('Follow directions and only answer YES or NO please!');
    }
console.log ( 'guess for if I like trump is ' + militaryServiceY);