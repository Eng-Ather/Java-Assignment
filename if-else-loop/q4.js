// 4. Minimum of Three Numbers:
//    Ask the user for three numbers. Display the smallest number.

 var a = prompt('enter 1st number');
 var b = prompt('enter 2ndnumber');
 var c = prompt('enter 3rd number');
 if(a<b && a<c ){document.write(`<br>${a}`)}
 if(b<a && b<c ){document.write(`<br>${b}`)}
 if(c<a && c<b ){document.write(`<br>${c}`)}