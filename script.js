// JavaScript Document

//Define a variable with integer value 
var outsideValue = 5 ;

//output variables to the console
////console.log("From outside: outsideValue = " +outsideValue);
//console.log("From outside: functionValue = " + functionValue);


myFunction();

 myOtherFunction();


function myFunction()
{
    // create variable inside of a function
    var functionValue = 10;

    // output variables to the console 
    console.log("From inside: outsideValue = " + outsideValue);
    console.log("From inside: functionValue = " + functionValue);

    
}

function myOtherFunction()
{
    // output variables to the console 
    console.log("From inside: outsideValue = " + outsideValue);
    console.log("From inside: functionValue = " + functionValue);
}






