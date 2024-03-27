#! /usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    { message: "Enter First Number:", type: "number", name: "firstNumber" },
    { message: "Enter Second Number:", type: "number", name: "secondNumber" },
    {
        message: "Enter anyone of the given operator to perform operation:",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation", "Modulus"],
    },
]);
console.log(answer);
if (answer.operator === "Addition") {
    const Result = answer.firstNumber + answer.secondNumber;
    console.log("Your Value is:", Result);
}
else if (answer.operator === "Subtraction") {
    const Result = answer.firstNumber - answer.secondNumber;
    console.log("Your Value is:", Result);
}
else if (answer.operator === "Multiplication") {
    const Result = answer.firstNumber * answer.secondNumber;
    console.log("Your Value is:", Result);
}
else if (answer.operator === "Division") {
    const Result = answer.firstNumber / answer.secondNumber;
    console.log("Your Value is:", Result);
}
else if (answer.operator === "Exponentiation") {
    const Result = answer.firstNumber ** answer.secondNumber;
    console.log("Your Value is:", Result);
}
else if (answer.operator === "Modulus") {
    const Result = answer.firstNumber % answer.secondNumber;
    console.log("Your Value is:", Result);
}
else {
    console.log("Please select valid operator");
}
