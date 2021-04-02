const prompt = require('prompt-sync')({sigint: true}); 
console.log("[1] Feet to Inch");
console.log("[2] Feet to Meter");
console.log("[3] Inch to Feet");
console.log("[4] Meter to Feet");
let num  = prompt('enter your choice of conversion ');

num=Number(num);

switch(num){
    case 1:
        let a =prompt("enter the number in feet");
        a=Number(a);
        let b= a*12;
        console.log(a+ " feet = " +b+ " inch");
        break;

    case 2:
        let c =prompt("enter the number in feet");
        c=Number(c);

        let d= c*0.3048;
        console.log(c+ " feet = " +d+ " meter");
        break;

    case 3:
        let e =prompt("enter the number in inch");
        e=Number(e);
        let f= e/12;
        console.log(e+ " inch = " +f+ " feet");
        break;

    case 4:
        let g =prompt("enter the number in meter");
        g=Number(g);
        let h= g/0.3048;
        console.log(g+ " meter = " +h+ " feet");
        break;
        
    default:
        console.log("wrong option");
        break;
}