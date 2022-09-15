let raceNumber = Math.floor(Math.random() * 1000);
const runnerStatus = true;
const runnerAge = 25 ;

if (runnerStatus === true && runnerAge > 18)
{
  raceNumber = raceNumber + 1000;
} 
if (runnerAge > 18 && runnerStatus === true )
{
  console.log(`You will begin your race at 9:30 am and Your race number is: ${raceNumber}`);
} 

else if (runnerAge > 18 && runnerStatus !== true )
{
  console.log(`You will begin your race at 11:00 am and Your race number is: ${raceNumber}`);
} else if (runnerAge < 18)
{
  console.log (`You will begin your race at 12:30 and your race number is: ${raceNumber}`);
} else 
{
  console.log('Runner has to see the registration desk');
}