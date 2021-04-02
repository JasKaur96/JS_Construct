const prompt = require('prompt-sync')({sigint: true}); 
let isExit = true;
console.log("1. Celsius to Fahrenhiet");
console.log("2. Fahrenhiet to Celsius");
console.log("3. Exit");

let num  = prompt('Enter the choice of conversion : ');
num=Number(num);

function degreeCTOdegreeF(degree_celsius){
     let degreeF = (degree_celsius * 9/5) + 32;
     console.log(degree_celsius+ " degreeCelcius  to " +degreeF+ " degreeFahrenhiet");
}

function degreeFTOdegreeC(degree_fahrenheits){
     let degreeC =(degree_fahrenheits -32) * 5/9;
     console.log(degree_fahrenheits+ " degreeFahrenhiet  to " +degreeC+ " degreeCelsius");
}

function isExitCondition(){
    isExit=false;
}

switch(num){
    case 1:

        let degree_celsius= prompt("Enter the tempratue in degree celcius :");
        degree_celsius=Number(degree_celsius);
        let result = degreeCTOdegreeF(degree_celsius);
        break;

    case 2:

        let degree_fahrenheits= prompt("Enter the tempratue in degree fahrenheit : ");
        degree_fahrenheits=Number(degree_fahrenheits);
        let result1 = degreeFTOdegreeC(degree_fahrenheits);
        break;

    case 3 :

        isExitCondition();
        break;
    
    default :
    console.log("Invalid input for conversion");
    break;     
}