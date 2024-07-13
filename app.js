

// function curentdateTime() {
//     var date = new Date();
//     document.write(date);
// }

// curentdateTime();

// function printName() {
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     var fullName = firstName + " " + lastName;
//     document.write(fullName);
// }

// printName();

// function sum() {
//     var firstNum = +prompt("Enter first number to add");
//     var secondNum = +prompt("Enter second number to add");
//     var totalNum = firstNum + secondNum;
//     document.write(totalNum);

// }

// sum();

// function calculator(num1, num2, operator) {
//     var num1 = +prompt("For calculator, Enter first number");
//     var num2 = +prompt("For calculator, Enter second number");
//     var operator = prompt("Enter Operator");
//     var result;
//     if (operator === "+") {
//         result = num1 + num2;
//     }
//     else if (operator === "-") {
//         result = num1 - num2;
//     }
//     else if (operator === "/") {
//         result = num1 / num2;
//     }
//     else if (operator === "*") {
//         result = num1 * num2;
//     }
//     else if (operator === "%") {
//         result = num1 % num2;
//     }
//     else {
//         result = "Invalid Operator"
//     }
//     document.write("Result: " + result)
// }

// calculator();


// function sqaure(){
//     var sq= +prompt("Enter a number to find its square");
//     var res = sq * sq;
//          document.write("Square of given number is: " + res)
//         }


//         sqaure();


// function factorial() {
//     var facto = +prompt("Enter a number to find it's factorial");
//     var resl =1;
//     for (i = facto; i >= 1; i--) {
//         resl = resl * i;
//     }
//     document.write("Factorial of given number is: " + resl);
// }

// factorial();

// function counting() {
//     var start = +prompt("Enter starting number");
//     var end = +prompt("Enter ending number");
//     for (i = start; i <= end; i++) {
//         document.write(i +  "<br>" );

//     }

// }

// counting() ;


// function computeHypotenues() {
//     var base = +prompt("Enter a base value");
//     var perpendicular = +prompt("Enter a perpendicular value");
//     var baseSquare = base * base;
//     var perpendicularSquare = perpendicular * perpendicular;
//   var  hypotenuseSquare = baseSquare + perpendicularSquare;
//   var  hypotenuse = Math.sqrt(hypotenuseSquare);
//     document.write("Value of base is: " + base + "<br>" + "Value of perpendicular is: " + perpendicular + "<br>" + "Result is: " + hypotenuse.toFixed(3));

// } 
// computeHypotenues();