const prompt = require('prompt-sync')({sigint: true}); 
let num1  = prompt('Enter the first number : ');
num1=Number(num1);

let num2  = prompt('Enter the Second number : ');
num2=Number(num2);

let result = isPalindrom(num1,num2);
console.log(result);

function isPalindrom(num1,num2)
{  
    let r=0;
    let sum=0;
    let r1;
    let sum1=0;
    let temp1=num1;
    let temp2=num2;

    while(num1 !=0)
    {
       r = num1%10;
       sum= r+sum*10;
       num1= parseInt(num1/10);
    }
    if(temp1==sum)
    {
        console.log(temp1+ " is a palindrom");
    }
    else
    {
        console.log(temp1+ " is not a palindrom");
    }

    while(num2 != 0)
    {
       r1 = num2%10;
       sum1= (sum1*10)+r1;
       num2= parseInt(num2/10);

    }

    if(temp2==sum1)
    {
        console.log(temp2+ " is a palindrome");
    }
    else
    {
        console.log(temp2+ " is not a palindrom");
    }
}