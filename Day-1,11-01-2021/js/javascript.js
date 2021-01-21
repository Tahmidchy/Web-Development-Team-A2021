// convert string
var num = 20;
num = toString(num)
console.log(typeof(num));
// convert number
var tah = "20";
tah = parseInt(tah)
console.log(typeof(tah));
//convert float
var raz = "20.5";
raz = parseFloat(raz)
console.log(typeof(raz));
// toFixed Fustion use 
var number = 2.5678;
console.log(number.toFixed(2));
//toPrecision Function use
var number = 2.5681
console.log(number.toPrecision(1));
//Boolean 
console.log(Number(true));
console.log(Number(false));
//string concatination
document.write("Tahmid" + " Chowdhury" + "<br/>");
//String concatination
var firstName = " A.T.M.Mustafa";
var lastName = " Masud Chowdhury";
var fullName = firstName + lastName;
document.write("My full Name is :" + fullName + "<br/>");
document.write(fullName + " My full Name ");
// number concatination
var num1 = 20;
var num2 = 30;
document.write("Num1 =" + num1 + " and num2 = " + num2 + "<br/>");
//string lenght findout
var text = "Bangladesh"
var len = text.length;
document.write("number of character:" + len + "<br>");
// user to asking somethings.
var text = prompt("enter your name");
document.write("Number of character:" + text.length + "<br/>");
// uppercase using 
var text = "Bangladesh";
text = text.toUpperCase();
document.write(text + "<br/>");
//lowercase using 
var text = "CHITTAGONG";
text = text.toLowerCase();
document.write(text + "<br/>");
//concatination 
var text1 = "Bangladesh";
var text2 = " is a beautiful country";
document.write(text1.concat(text2) + "<br/>");
//concatination 
var text3 = "Chittagong";
var text4 = " is a beautiful city";
document.write(text3.concat(text4) + "<br/>");
//slice
var text5 = "Dhaka";
text5 = text5.slice(0, 2);
document.write(text5 + "<br/>");
//home task
var firstName = ("Tahmid");
var lastName = ("chowdhury");
var fullName = firstName + lastName + "<br/>";
document.write(fullName + "<br/>");
document.write(fullName.length + "<br>");
document.write(fullName.toUpperCase() + "<br/>");
document.write(fullName.charAt(2) + "<br/>");
document.write(fullName.slice(2, 4));
//Arithmetic and assignment operator
var x = 6;
x += 6; //x=x+6
console.log(x);