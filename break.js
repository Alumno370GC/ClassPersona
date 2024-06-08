const ps = require("prompt-sync");

const prompt = ps();


//Program to print the value of i

for (let i=1; i<=5; i++){
if (i==3){

break;

}
console.log(i);

}
/**Example 2* */

let sum =0;

while(true){

    //get number input

    let num = Number(prompt("Enter a number"));
    //terminate the loop if num is negative

    if (num <0){

      break;

    }

    else{

        sum += num;
    }


}

//print the sum
console.log(`Sum: ${sum}`);