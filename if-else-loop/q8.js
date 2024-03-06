// 8. Triangle Type Identifier:
//     Ask the user for the lengths of three sides of a triangle. Determine if it's an equilateral, isosceles, or scalene triangle and display the result.

var side1 = Number(prompt(`Enter 1st side of triangle`))
var side2 = Number(prompt(`Enter 2nd side of triangle`))
var side3 = Number(prompt(`Enter 3rd side of triangle`))

document.write(`side -1 = ${side1} <br> side -2 = ${side2} <br> side -3 = ${side3} <br>`)

if (side1 === side2 && side1 === side3) {
    document.write(`this is Equilateral Triangle`)
}
else {
    if (side1 === side2 || side1 === side3 || side2 === side3) {
        document.write(`this is Isosceles Triangle`)
    }
    else {
        if (side1 != side2 && side1 != side3 && side2 != side3){
            document.write(`this is Scalene Triangle`)   
        }
        else{  document.write(`Insectr Value`) }
        }
}
