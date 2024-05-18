#! /usr/bin/env node 
import inquirer from"inquirer";

console.log("well come to coding world");

let myTable = true;
// our full code will be within while loop
while(myTable){


    let myInput = await inquirer.prompt({
        type: 'number',
        name: 'num',
        message:"Enter your Number"
    })
    let myNumber = myInput.num;
    //console.log(myNumber);

    if(myNumber){
        console.log(`Here is the table of ${myNumber}\n`);

        for(let i = 1; i <= 10; i++){
            console.log(`${myNumber} x ${i} = ${myNumber * i}`); 
        }  
    }else{
        console.log(`Enter a input in numberical from`);
        
    }
// asking user if he wants to print table again

let againPrint = await inquirer.prompt({
    type: 'confirm',
    name: 'askUser',
    message:"Do you want to print anthor Table",
    default: false
});

if(againPrint.askUser == false){
    myTable = false;
    console.log(`\n thank you for using this project! `)
    
}
}


// how can we upload on npm?

