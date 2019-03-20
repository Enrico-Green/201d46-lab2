
'use strict';

//a guessimg game about me with 5 yes/no answers. user input must accept either yes or no
//must accomadate users using all caps or just Y/N

//the sixth question is a guessing game where the user has 4 tries to guess a numeric value;
//each attempts tells the user if they are too high ot too high

//the seventh question mutiple correct answers stored in an array with 6 tries.

//app utilizes descriptive console.log messages for each question


var militaryServiceY
var olderThanThirtyY
var likeDogsY
var likeCatsN
var likeTrumpN
var numberOfKids


/* 5 yes/no questions are: 
1>Did I serve in the military?  
2>Am I older than 30?  
3>Do i like dogs?  
4>Do I like Cats?  
5>Do I like Trump? 
*/

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
    likeTrumpN = likeTrumpN.toUpperCase()
    if (likeTrumpN === 'N' || likeTrumpN === 'NO' ) {
        alert('Your guess was NO. That is correct! I can tell we are gonna be friends :-)');
    } else if ( likeTrumpN == 'Y' || likeTrumpN === 'YES') {
        alert('Your guess was YES. That is wrong, but you are entittled to your opinion');
    }   else {
        alert('Follow directions and only answer YES or NO please!');
    }
console.log ( 'guess for if I like trump is ' + militaryServiceY);

// the sixth question is tell me how many kids do I have?

var numberOfKids = prompt('Guess how many kids I have?');
<<<<<<< HEAD
    numberOfKids = numberOfKids.toUpperCase();
    if (numberOfKids === '2' || numberOfKids === 'TWO' ) {
=======
    numberOfKids = numberofKids.toUpperCase()
    if (numberOfKids === '2' || numberofKids === 'TWO' ) {
>>>>>>> 733a6a4ca8fd07e5f4953e2ef0f3358d2b2eba33
        alert('Your guess was correct!');
    } else if (numberOfKids == 'Y' || numberOfKids === 'YES') {
        alert('Your guess was YES. That is correct. I am a U.S Marine SEMPER FI!');
    }   else {
        alert('Follow directions and only answer YES or NO please! ');
    }
console.log ( 'guess for my military service was ' + militaryServiceY);



/* the seventh question is name a country other than America I have visited
correct answers: Japan, Iraq, Afghanistan, Germany, Mexico, Kyrgyzstan, 
South Korea, Kuwait, Quatar; will be stored in  var nationsVisited
*/ 

/*compare users input to  items in array Japan, Iraq, Afghanistan, Germany, Mexico, Kyrgyzstan, 
//South Korea, Kuwait, Quatar; using a for statement to write properties to the prompt. i 
use an if /else statement to loop the question.
*/
     //creating the array nations
     var nations = ['JAPAN', 'IRAQ', 'AFGHANISTAN', 'GERMANY', 'MEXICO', 'KYRGYSTAN', 'SOUTH KOREA','KUWAIT', 'QUATAR'];
     //compare the user input stored in nationVisited to the vales in the array nations
     
     for (var i = 0; i < 6; i++){ 
            var nationsVisited = prompt('Guess the name of one country I have visited');
<<<<<<< HEAD
            nationsVisited = nationsVisited.toUpperCase();
      if (nations.includes(nationsVisited)) {
          alert('That was a VERY VERY lucky guess; Good job!');
          break;
      } else{
          alert('NO TRY AGAIN!');
      }
    };
=======
            nationsVisited = nationsVisited.toUpperCase()
     }
      if (nations.includes(nationsVisited)) {
          alert('That was a VERY VERY lucky guess; Good job!');
      } else if (nationsVisited)
          alert('NO TRY AGAIN!')
      
      }
                break;

            }
>>>>>>> 733a6a4ca8fd07e5f4953e2ef0f3358d2b2eba33
