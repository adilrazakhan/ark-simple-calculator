#!/usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([{message: "Enter firtsNumber",type: "number",name:"firstNumber"},
{message: "Enter secondNumber",type:"number",name:"secondNumber"},
{message:"select one of the operators t perform opertaion",type:"list",name:"operator",choices:["Addition","Subtraction","Multiplication","Division","Exponention"],},
]);
console.log(answer);
if (answer.operator === 'Addition'){
    console.log(answer.firstNumber + answer.secondNumber);
  } else if(answer.operator === 'Subtraction'){
    console.log(answer.firstNumber - answer.secondNumber);
  } else if(answer.operator === 'Multiplication'){
    console.log(answer.firstNumber * answer.secondNumber);
  } else if(answer.operator === 'Division'){
    console.log(answer.firstNumber / answer.secondNumber);
  } 
  else if(answer.operator === 'Exponention'){
    console.log(answer.firstNumber / answer.secondNumber);
  }
  else{
    console.log('Please select a valid operator');
  }