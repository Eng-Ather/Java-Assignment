//Q9 : Display the length and elemrnt of array in browser:

//Declear and initalize an empty array to store top movies name of 2015. Add movies
//name one by one in an array. Display the length and elemrnt of array in browser:
//use array length method

var movies = []
 
movies.push(" Avenger : Age of Ultron ")
document.write("push 1st name in arry : " + movies)

movies.push("Spectre")
document.write("<br><br> push 2nd name in arry : " + movies)

movies.push("Jurassic World")
document.write("<br><br> push 3rd name in arry : " + movies)

movies.push("Inside Out")
document.write("<br><br> push 4th name in arry : " + movies)

document.write(" <br><br><br><br>  <h2>Top Movies of 2015</h2>")
document.write(movies)

document.write("<br><br> <b>Length of the Array : </b>" + movies.length)