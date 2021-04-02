const prompt = require('prompt-sync')({sigint:true});

let number = prompt('Enter a number :');
number = Number(number);

 switch(number){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;    
    case 5:
        console.log("Friday");
        break; 
    case 6:
        console.log("Saturday");
        break;     
    default: 
        console.log("Sunday");
 }