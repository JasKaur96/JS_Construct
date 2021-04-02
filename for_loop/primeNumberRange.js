const prompt = require('prompt-sync')({sigint: true}); 
let start  = prompt('ENTER THE START NUMBER : ');
start = Number(start);

let end  = prompt('ENTER THE END NUMBER : ');
end = Number(end);
var i;

console.log("prime number from "+start+ " to " +end+ " is :");
for( i =start ; i<=end ;i++)
{
    let count =0;
    var j;
    for( j=1;j<=i;j++)
    {
        if(i%j==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        console.log(i);
    }
}