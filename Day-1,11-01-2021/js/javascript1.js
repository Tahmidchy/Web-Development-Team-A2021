//addition and subtraction by general coding.
var num1 = 20;
var num2 = 30;
var sum, sub;
sum = num1 + num2;
sub = num1 - num2;
document.write("The Sum is :" + sum + "<br/>");
document.write(" The Subtraction is :" + sub + "<br/>");
//asking user input than we are addition,subtraction,multiplication,division etc.
var num3 = prompt(" Enter Your 1st Number :");
var num4 = prompt(" Enter Your 2nd Number :");
num3 = parseInt(num3, 10);
num4 = parseInt(num4, 10);
var sum, sub, mul, div, mod;
sum = num3 + num4;
sub = num3 - num4;
mul = num3 * num4;
div = num3 / num4;
mod = num3 % num4;
document.write(" The sum is = " + sum + "<br/>");
document.write(" The subtraction are = " + sub + "<br/>");
document.write(" The Multiplication are =" + mul + "<br/>");
document.write(" The Divisition are =" + div + "<br/>");
document.write(" The Modulus are = " + mod + "<br/>");
//Area of various shape// Retangle
var base = parseFloat(prompt(" Enter the base number: "));
var height = parseFloat(prompt(" Enter the Height number: "));
var area = base * height;
document.write("The area of retangle are :" + area + "<br/>");
//Area of Various shape// Traingle
var area = (base * height) / 2;
document.write(" The area of traingle are :" + area + "<br/>");