const prompt = require('prompt-sync')({sigint: true}); 
let num  = prompt('ENTER THE NUMBER : ');
num = Number(num);

var i;
fact=1;
for(i=1 ; i<=num ; i++){    
    fact = fact*i; 
}
console.log("The factorial of "+num+ " is "+fact);