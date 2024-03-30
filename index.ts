#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1234;

let PinAnswer = await inquirer.prompt([
  { name: "pin", message: "Enter Your Pin", type: "number" },
]);

if (PinAnswer.pin === myPin) {
  console.log("Correct Pin Code");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select one option",
      type: "list",
      choices: ["withdraw", "check Balance"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt({
      name: "amount",
      message: "Enter Your amount",
      type: "number",
    });

    myBalance -= amountAns.amount;
    console.log("Your Remaining Balance is:" + myBalance);
  } else if (operationAns.operation === "check Balance") {
   console.log ("Your Balance is:" + myBalance)
  }
} else {
  console.log("Incorrect Pin Code!!!");
}
