const prompt = require('prompt-sync')({sigint:true});

let num1 = prompt('Enter number 1 :');
num1 = Number(num1);
let num2 = prompt('Enter number 2 :');
num2 = Number(num2);
let num3 = prompt('Enter number 3 :');
num3 = Number(num3);

let a = num1 + num2 * num3;
let b = num1 % num2 + num3;
let c = num3 + num1 / num3;
let d = num1 * num2 + num3;

if (a > b && b > c)
{
    console.log("Max:",a);
}
else if (b>a && a>c && c>d)
{
    console.log("Max:",b);
}
else if (c>a && a>b && b>d)
{
    console.log("Max:",c);
}
else
{
    console.log("Max:",d);
}

if (a<b && a<c && a<d)
{
    console.log("Min:",a);
}
else if (b<a && b<c && b<d)
{
    console.log("Min:",b);
}
else if (c<a && c<b && c<d)
{
    console.log("Min:",c);
}
else
{
    console.log("Min:",d);
}

console.log(a);

console.log(b);

console.log(c);

console.log(d);
