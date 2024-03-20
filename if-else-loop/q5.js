// 5. Factorial Calculator:
//    Request the user to input a number. Calculate its factorial and display the result.

var input = +prompt("enter number to caculate factorial")
var factorial = 1
for (var i = input; i >= 1; i--) {
    { factorial = factorial * i }
}
document.write(factorial + "<br>")
