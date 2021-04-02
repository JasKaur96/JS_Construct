const prompt = require('prompt-sync')({sigint: true}); 
let base  = prompt('ENTER THE BASE NUMBER : ');
base = Number(base);
let power  = prompt('ENTER THE POWER NUMBER : ');
base = Number(base);
power= Number(power);

var i;
let res=1;
for(i=1; i<=power ; i++)
{
 res=res*base;
 console.log(base+ " to the power " +i+ " is equal to "+res);
}