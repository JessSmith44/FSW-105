var readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("Please enter your first number:");
var secondNum = readlineSync.questionInt("Please enter your second number:");
var enteredOperation = readlineSync.question("Please enter the operation to preform(add, sub, mul, div):");

function myAddition(num1, num2){
    return num1 + num2
}
function mySubtraction(num1, num2){
    return num1 - num2
}
function myMultiplication(num1, num2){
    return num1 * num2
}
function myDivision(num1, num2){
    return num1 / num2
}
function customCalculator(num1, num2, operation){
    if (operation == "add"){
        console.log(num1 + " added with " + num2 + " equals= " + myAddition(num1, num2));
    } else if (operation == "sub"){
        console.log(num1 + " subtracted from " + num2 + " equals= " + mySubtraction(num1, num2));
    } else if (operation == "mul"){
        console.log(num1 + " multiplied by " + num2 + " equals= " + myMultiplication(num1, num2));
    } else if (operation == "div"){
        console.log(num1 + " divided by " + num2 + " equals= " + myDivision(num1, num2));
    } else {
        console.log("Operation not identified. Please try again.")
    }

}
customCalculator(firstNum,secondNum, enteredOperation);
