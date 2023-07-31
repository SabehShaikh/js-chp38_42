// Assignment # 38-42 FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS

/* QUESTION 01
1. Write a custom function power ( a, b ), to calculate the value of
a raised to b. */
document.write("<h2> Question 01 </h2>")

function power(a, b) {

    return Math.pow(a, b);
}

var result = power(2, 3);
document.write("power is " + result);

/* QUESTION 02
2. Any year is entered through the keyboard. Write a function to
determine whether the year is a leap year or not.
Leap years ..., 2012, 2016, 2020, ... */
document.write("<h2> Question 02 </h2>")

function checkLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

const year = +prompt("Enter a year");
var result = checkLeapYear(year);

if (result) {
    document.write(year + " is a leap year");
} else {
    document.write(year + " is not a leap year");
}

/* QUESTION 03
3. If the lengths of the sides of a triangle are denoted by a, b, and
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions */

document.write("<h2> Question 03 </h2>")

function semiPerimeter(a, b, c) {
    return a + b + c / 2;
}

function areaOfTriangle(a, b, c) {

    const S = semiPerimeter(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c))
}

const a = 2;
const b = 3;
const c = 4;

const area = areaOfTriangle(a, b, c);
document.write("Area of the Triangle is: " + area);

/* QUESTION 04
4. Write a function that receives marks received by a student in 3
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction. */


document.write("<h2> Question 04 </h2>")

function average(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}

function percentage(marks1, marks2, marks3, totalMarks) {
    const totalObtainedMarks = marks1 + marks2 + marks3;
    return (totalObtainedMarks / totalMarks) * 100;
}

function mainFunction() {
    const marks1 = +prompt("Enter subject1 Marks");
    const marks2 = +prompt("Enter subject2 Marks");
    const marks3 = +prompt("Enter subject3 Marks");

    const totalMarks = 300;
    const averageMarks = average(marks1, marks2, marks3);
    const percentageMarks = percentage(marks1, marks2, marks3, totalMarks);

    document.write("<h2> Results </h2>")
    document.write("Marks in subject 1: " + marks1 + "<br>");
    document.write("Marks in subject 2: " + marks2 + "<br>");
    document.write("Marks in subject 3: " + marks3 + "<br>");
    document.write("Average marks: " + averageMarks.toFixed(2) + "<br>");
    document.write("Percentage obtained: " + percentageMarks.toFixed(2) + "%");
};

mainFunction();