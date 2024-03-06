// 6  Grade Calculator:
// Ask the user to enter marks for three subjects. Calculate the average and display the grade according to the average (assuming each subject has equal weight).

var a = Number(prompt('Enter subject 1 Marks'))
var b = Number(prompt('Enter subject 2 Marks'))
var c = Number(prompt('Enter subject 3 Marks'))

var z = (a + b + c) / 3;

document.write(`${z} %`)

if (z < 40) { document.write(`<br>F grade`) }
else {
    if (z >= 40 && z < 50) { document.write(`<br> D Grade`) }
    else {
        if (z >= 50 && z < 60) { document.write(`<br> D Grade`) }
        else {
            if (z > 50 && z < 60) { document.write(`<br> c Grade`) }
            else {
                if (z >= 60 && z < 70) { document.write(`<br> B Grade`) }
                else {
                    if (z >= 70 && z < 80) { document.write(`<br> A Grade`) }
                    else {
                        if (z >= 80 && z <= 100) { document.write(`<br> A <sup>+</sup> Grade`) }
                    }
                }
            }
        }
    }
}











