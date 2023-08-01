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

/* QUESTION 05
5. You have learned the function indexOf. Code your own custom
function that will perform the same functionality. You can code
for single character as of now. */

document.write("<h2> Question 05 </h2>")

function customIndexof(str, char) {

    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

var str = prompt("Enter a sentence");
var char = prompt("Enter a character to search in sentence");

var result = customIndexof(str, char);
document.write("The index of the character " + char + " in the sentence: " + str + " is: " + result);

/* QUESTION 06*
6. Write a function to delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long. */

document.write("<h2> Question 06 </h2>")

function deleteVowels(sen, del) {

    let result = "";

    for (var i = 0; i < sen.length; i++) {
        if (sen[i] !== del) {

            result += sen[i];
        }
    }
    return result
}

var sentence = prompt("Enter a sentence");
var vowelToRemove = prompt("Enter a vowel you want to remove from your sentence (a,e,i,o,u)");

var result = deleteVowels(sentence, vowelToRemove);
document.write("Original sentence: " + sentence + "</br>");
document.write("Deleted Vowel: " + vowelToRemove + "</br>");
document.write("Updated Sentence: " + result);

/* QUESTION 07 
7. Write a function with switch statement to count the number of
occurrences of any two vowels in succession in a line of text.
For example, in the sentence
“Pleases read this application and give me gratuity”
Such occurrences are ea, ea, ui. */

document.write("<h2> Question 07 </h2>")

function countVowels(sentence) {

    sentence = sentence.toLowerCase();
    var count = 0;
    var matchPairs = [];

    for (var i = 0; i < sentence.length; i++) {

        var pair = sentence[i - 1] + sentence[i];

        switch (pair) {

            case "aa": case "ae": case "ai": case "ao": case "au":
            case "ea": case "ee": case "ei": case "eo": case "eu":
            case "ia": case "ie": case "ii": case "io": case "iu":
            case "oa": case "oe": case "oi": case "oo": case "ou":
            case "ua": case "ue": case "ui": case "uo": case "uu":

                count++;
                matchPairs.push(pair);
        }
    }
    
    var sentence = prompt("Enter a sentence");
    var result = countVowels(sentence);
    document.write("In sentence: " + sentence + " we get pairs: " + matchPairs.join(", ") + "<br>");
    document.write("Number of occurrences of any two consecutive vowels: " + result);
    return count;
}