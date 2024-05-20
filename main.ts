#!/usr/bin/env node

// //creating calculator using condition statement, operator, template literals, inquirer and chalk.

// importing inquirer and chalk
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.redBright.bold.italic("\n\t|| Welcome to my calculator ||\n\t"));
// creating object of first variable
let num1Input = await inquirer.prompt([{
    name: "num1",
    type: "number",
    message: chalk.greenBright ("Enter the first number: ")
}]);
let num1 = num1Input.num1;

// creating object of second variable
let num2Input = await inquirer.prompt([{
    name: "num2",
    type: "number",
    message: chalk.greenBright ("Enter the second number: ")
}]);
let num2 = num2Input.num2;

// creating object of operator
let operationInput = await inquirer.prompt([{
    name: "operation",
    type: "list",
    choices: ["+", "-", "*", "/", "**", "%"],
    message: chalk.greenBright ("Enter the operator you want to use: ")
}]);
let operation = operationInput.operation;

// conditional statement
let answer;
switch (operation) {
    case "+":
        answer = num1 + num2;
        break;
    case "-":
        answer = num1 - num2;
        break;
    case "*":
        answer = num1 * num2;
        break;
    case "/":
        answer = num1 / num2;
        break;
    case "**":
        answer = num1 ** num2;
        break;
    case "%":
        answer = num1 % num2;
        break;
    default:
        console.log("Please select a valid operator");
        break;
}

if (answer !== undefined) {
    console.log(chalk.magenta(`Result: ${answer}`));
}