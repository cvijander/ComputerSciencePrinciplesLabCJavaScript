// Javascript document

// Create variable outside of a function

var outsideValue = 5;

// Output variable to the console 
// console.log("From outside: outsideValue = " +outsideValue);
// console.log("From outside: functionValue = " + functionValue);


myFunction();


    myOtherFunction();

function myFunction() {

    // Create variables to the console 

    var functionValue =10; 
    console.log("From inside: outsideValue = " + outsideValue);
    console.log("From inside: functionValue = " + functionValue);


      
}

 function myOtherFunction() 
{
    // Output variables to the console
    console.log("From inside: outsideValue = " + outsideValue);
    console.log("From inside: functionValue = " + functionValue);
}



