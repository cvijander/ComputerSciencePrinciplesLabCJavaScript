var myArray = ['Doug','Mike','Janet','Matt'];

var myMixxedArray = [4, 'Cat', true];

console.log(myArray);
console.log(myMixxedArray);

console.log(myArray[0]);
console.log(myArray[4]);

for (var i =0 ; i < myArray.length; i++) 
{
    console.log("Hello, " +myArray[i]);
}

for (var element of myArray) 
{
    console.log("Good bye," + element);
}

myArray.push("Pat");
console.log(myArray);

myArray[0] = "Tim";
console.log(myArray);

myArray.splice(1,2);
console.log(myArray);