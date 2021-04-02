const prompt = require('prompt-sync')({sigint:true});

let number = prompt('Enter a number :');
number = Number(number);

 if(number == 1)
        console.log("Monday");
    else if(number == 2)
        console.log("Tuesday");
    else if(number == 3)
        console.log("wednesday");
    else if(number == 4)
        console.log("Thursday");    
    else if(number == 5)
        console.log("Friday"); 
    else if(number == 6)
        console.log("Saturday");     
    else 
        console.log("Sunday");
