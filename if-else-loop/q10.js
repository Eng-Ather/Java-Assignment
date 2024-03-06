// 14. Power Calculator:
//     Request the user to input a base number and its exponent.
//      Calculate and display the result.

var base = Number(prompt(`Entwr Base Number`))
var power = Number(prompt(`Enter Power`))
var multiple = base;

//document.write(multiple)

for (let i = 0; power < 0; power--) {
    multiple = multiple*base;
    document.write(multiple)
  }
//document.write(multiple)