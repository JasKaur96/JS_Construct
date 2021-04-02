const prompt = require('prompt-sync')({sigint: true}); 
let num  = prompt('ENTER THE NUMBER : ');
num = Number(num);

var i;
let count =1;
if(num===1)
{
    console.log(num+ " is niether prime nor composite");
}

else if(num>1)
{
    for(i=1  ;i<num ;i++)
    {
        if(num%i==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        console.log(num+ " is a prime number")
    }
    else
    {
        console.log(num+ " is a composite number");
    }
}