// Age Group Classifier:
// Ask the user for their age and classify them into one of the following groups:
// "Child" (0-12 years), "Teenager" (13-19 years), "Adult" (20-64 years), or "Senior" 
//(65 years and above). Display the appropriate message.

var age = Number(prompt(`Enter Age`))
if( age>0 && age<13){ document.write('Child')}
else{
    if( age>=13 && age<20){document.write('Teenager')}
    else{
        if(age>=20 && age<65){document.write('Adult')}
        else{
            if(age>=65){document.write('Senior')}
        }
    }
}