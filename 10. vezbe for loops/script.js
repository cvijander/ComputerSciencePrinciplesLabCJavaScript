
for (var i =0; i< 25; i++) 
{
   console.log("The squre of " + i + " is " + Math.pow(i,2));
}


// 1  2  3  4  5  6  7  8  9  10  11  12
// 2  4  6  7  10 12 14 16 18 20  22  24

for (var a = 1; a<=12; a++  )
{
    var tableRow="";
    for (var b =1; b <=12 ; b++)
    {
       var product = a*b;
       var productString = product.toString() + "\t";
       tableRow +=productString;
    }
    console.log(tableRow);
}
 
