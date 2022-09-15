let userName = "Hari : "
userName ? console.log(`Hello! ${userName}`) :console.log('Hello!');
let userQuestion =""
userQuestion : console.log(` Hi ${userName} Enter the Question you want to ask`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ""
/*switch (randomNumber)
{
case 0 :
 eightBall = 'It is certain' ;
  console.log (`${userName} ${eightBall}`);
  break;

case 1 :
 eightBall = 'It is decidely so'
  console.log (`${userName} ${eightBall}`);
  break;

case 2 :

  eightBall = 'Reply hazy try again' ;
  console.log (`${userName} ${eightBall}`);
  break;

case 3 :

  eightBall = 'Cannot predict now' ;
  console.log (`${userName} ${eightBall}`);
  break;

case 4 :

  eightBall = 'Do not count on it' ;
  console.log (`${userName} ${eightBall}`);
  break;

case 5 :

  eightBall = 'My sources say no' ;
  console.log (`${userName} ${eightBall}`);
  break;

case 6 :

  eightBall = 'Outlook not so good' ;
  console.log (`${userName} ${eightBall}`);
  break;

case 7 :
 eightBall = 'Signs point to yes' ;
  console.log (`${userName} ${eightBall}`);
  break;
} 
*/
if (randomNumber == 0)
{
eightBall = 'It is certain' ;
  console.log (`${userName} ${eightBall}`);
} else if (randomNumber == 1)
{
  eightBall = 'It is decidely so'
  console.log (`${userName} ${eightBall}`);
} else if (randomNumber == 2)
{
  eightBall = 'Reply hazy try again' ;
  console.log (`${userName} ${eightBall}`);
} else if (randomNumber == 3)
{
   eightBall = 'Cannot predict now' ;
  console.log (`${userName} ${eightBall}`);
} else if (randomNumber == 4)
{
   eightBall = 'Do not count on it' ;
  console.log (`${userName} ${eightBall}`);
} else if (randomNumber == 5)
{
  eightBall = 'My sources say no' ;
  console.log (`${userName} ${eightBall}`);
} else if (randomNumber == 6)
{
  eightBall = 'Outlook not so good' ;
  console.log (`${userName} ${eightBall}`);
} else if (randomNumber == 7)
{
  eightBall = 'Signs point to yes' ;
  console.log (`${userName} ${eightBall}`);
}