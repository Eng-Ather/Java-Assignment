// 13. Character Vowel/Consonant Checker:
//     Take a character from the user and determine if it's a vowel or a consonant. Display "Vowel" or "Consonant" accordingly.

var char = prompt(`Enter Alphabate`)

document.write("You type :" + char)

if (char === "a" || char === "A" || char === "e" || char === "E" ||
    char === "i" || char === "I" || char === "o" || char === "O" || 
    char === "u" || char === "U") { document.write(` <br><br> <i> Its a Vowel  </i>`) }
else { document.write(`<br><br> <i> Its a consonant  </i>`) }


