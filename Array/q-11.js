//  Q10 : Dispalay the score  percentage of students

// Write a program to store 3 student name in an array . Take another array to store 
// these student score. Assume the total marks are 500 for each student, dispaly the 
// score and percentage of students 

var studentName = ["stdent-1" , "student-2" , "student-3"]

var number = [320 , 230 , 480]

var p1 = (number[0] / 500)*100;

document.write("score of " +studentName[0] + " is " + number[0] +" and percentage is " + p1)

var p2 = (number[1] / 500)*100;

document.write("<br><br>score of " +studentName[1] + " is " + number[1] +
" and percentage is " + p2)

var p3 = (number[2] / 500)*100;

document.write("<br><br>score of " +studentName[2] + " is " + number[2] +
" and percentage is " + p3)