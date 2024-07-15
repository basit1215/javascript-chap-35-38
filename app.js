

function curentdateTime() {
    var date = new Date();
    document.write(date);
}

curentdateTime();

function printName() {
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var fullName = firstName + " " + lastName;
    document.write(fullName);
}

printName();

function sum() {
    var firstNum = +prompt("Enter first number to add");
    var secondNum = +prompt("Enter second number to add");
    var totalNum = firstNum + secondNum;
    document.write(totalNum);

}

sum();

function calculator(num1, num2, operator) {
    var num1 = +prompt("For calculator, Enter first number");
    var num2 = +prompt("For calculator, Enter second number");
    var operator = prompt("Enter Operator");
    var result;
    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "/") {
        result = num1 / num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "%") {
        result = num1 % num2;
    }
    else {
        result = "Invalid Operator"
    }
    document.write("Result: " + result)
}

calculator();


function sqaure(){
    var sq= +prompt("Enter a number to find its square");
    var res = sq * sq;
         document.write("Square of given number is: " + res)
        }


        sqaure();


function factorial() {
    var facto = +prompt("Enter a number to find it's factorial");
    var resl =1;
    for (i = facto; i >= 1; i--) {
        resl = resl * i;
    }
    document.write("Factorial of given number is: " + resl);
}

factorial();

function counting() {
    var start = +prompt("Enter starting number");
    var end = +prompt("Enter ending number");
    for (i = start; i <= end; i++) {
        document.write(i +  "<br>" );

    }

}

counting() ;


function computeHypotenues() {
    var base = +prompt("Enter a base value");
    var perpendicular = +prompt("Enter a perpendicular value");
    var baseSquare = base * base;
    var perpendicularSquare = perpendicular * perpendicular;
  var  hypotenuseSquare = baseSquare + perpendicularSquare;
  var  hypotenuse = Math.sqrt(hypotenuseSquare);
    document.write("Value of base is: " + base + "<br>" + "Value of perpendicular is: " + perpendicular + "<br>" + "Result is: " + hypotenuse.toFixed(3));

} 
computeHypotenues();


var width = +prompt("Enter the width of rectangle");
var height = +prompt("Enter the height of rectangle");

function CalAreaUsingValues(width , height){
var area = width * height;
document.write("Area of a Rectangle " + area + "<br>" );
}

CalAreaUsingValues(width , height);


function CalAreaUsingVariables(){
if(isNaN(width) || isNaN(height)){
    alert("Invalid input. Please enter valid numbers")
}

var calculateArea = width * height;
document.write("Area of a Rectangle " + calculateArea + "<br>" );

}

CalAreaUsingVariables();


var palindrome = prompt("Enter a word I will check that word is palindrome or not");
 
function checkPalindrome(){
    var reverse = palindrome.split("").reverse().join("");

    if(reverse===palindrome){
        document.write("Yes " + palindrome + " is a Palindrome Word");
    }
    else{
        document.write("No " + palindrome + " is not a Palindrome Word");
    }
}

checkPalindrome();


var sentence = prompt("Enter A Sentence I Will Capitilize The Sentence");

function toCapitilize (sentence){
  var words = sentence.split(" ");
  var sentenceToCapitalize = words.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  });

  sentenceToCapitalize = sentenceToCapitalize.join(" ");

  return sentenceToCapitalize;

}

document.write(toCapitilize(sentence));