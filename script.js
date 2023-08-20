// JavaScript Document

if (true || false)
{
    console.log("Only one value needs to be true in an OR statement for the whole evalatuatin to be true");
}

if(true && false)
{
    //
}
else 
{
    console.log("Both values need to be true for and AND statement to be true");
}

var myMaxLimit = 20;
var myMinLimit =5;
var myValue =10;

if(myValue <myMaxLimit && myValue > myMinLimit)
{
    console.log("The value " +myValue + " is between " + myMinLimit + " and " + myMaxLimit);
}
else 
{
    console.log("Tha value " +myValue + " is not between " + myMaxLimit + " and " + myMinLimit);
}

var myMaxXLimit = 5;
var myMinXLimit =1;
var myMaxYLimit =3;
var myMinYLimit =1;

var myXValue =6;
var myYValue =2;

if((myXValue < myMaxXLimit && myXValue >myMinXLimit)&&(myYValue <myMaxYLimit && myYValue > myMinYLimit))
{
    console.log("Both the X and Y are withing limits");
}
else 
{
    console.log("One of them are outside of the limits");
}


var myBoolean =false;
if(!myBoolean)
{
    console.log("The value is true");
}









