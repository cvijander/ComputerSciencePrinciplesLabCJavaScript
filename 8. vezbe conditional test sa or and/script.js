if (true || false) 
{
    console.log("Only one value needs to be true inb an OR statement for the whole evaluations to be true.")
    
}

if(true && false )
{
  //
}
else 
{
    console.log("Both values need to be true for an AND statement to be true.")
}

var myMaxLimit =20;
var myMinLimit =5;

var myValue =10;

if(myValue < myMaxLimit && myValue > myMinLimit) 
{
    console.log("The value " + myValue + " is between " +myMinLimit + " and " + myMaxLimit);
}
else 
{
    console.log("The value " + myValue + " is not between " + myMinLimit + " and " + myMaxLimit);
}


var myMaxXLimit =5;
var myMinXLimit=1;

var myMaxYLimit =3;
var myMinYLimit=1;

var myXValue =4;
var myYValue =2;

if((myXValue < myMaxXLimit && myXValue > myMinXLimit) && (myYValue <myMaxYLimit && myYValue > myMinYLimit))
{
    console.log("Both of the X and Y values are within the limits");
}
else 
{
    console.log("One or both of the X and Y values are outside of the limits");
}

var myBoolean =false;
if(!myBoolean)
{
    console.log("Not false is true");
}

