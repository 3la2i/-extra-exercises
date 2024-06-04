var x = -5;
var y = 3;
var z = x * y;
console.log(z);

var result = "JavaScript" + 50;
console.log(result);

var x = 17;
var y = 5;
var z = x % y;
var e = y % x;
console.log(e);
console.log(z);

var x = 5;
var y = 10;
var z = x / y;
console.log(z);

var result = 4 === "4";
console.log(result);

var result = 7 <= 8;
console.log(result);

var result = "Hello" + 5;
console.log(result);

// the power on math
var x = 5;
var result = Math.pow(x, 2);
console.log(result);

// question2

var number = prompt("Please enter a number:");

// number = number;

alert("You entered: " + number);

// question3

var number1 = prompt("Please enter the first number:");
var number2 = prompt("Please enter the second number:");

number1 = parseInt(number1);
number2 = parseInt(number2);

if (number1 < number2) {
  alert("Numbers in ascending order: " + number1 + ", " + number2);
} else {
  alert("Numbers in ascending order: " + number2 + ", " + number1);
}
//  question 4 in larger one
if (number1 > number2) {
  alert("the larger number is: " + number1);
} else {
  alert("the larger number is:" + number2);
}
// question 5
var sum = number1 + number2;
alert("the sum of two numbers is;" + sum);

// question6

switch (numberVariable) {
  case 1:
    console.log("ONE");
    break;
  case 2:
    console.log("TWO");
    break;
  case 3:
    console.log("THREE");
    break;
  case 4:
    console.log("FOUR");
    break;
  case 5:
    console.log("FIVE");
    break;
  case 6:
    console.log("SIX");
    break;

  case 7:
    console.log("SEVEN");
    break;

  case 8:
    console.log("EIGHT");
    break;
  case 9:
    console.log("NINE");
    break;

  default:
    console.log("PLS TRY AGAIN");
    break;
}
