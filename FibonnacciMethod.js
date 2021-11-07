//Version 01
//Get number to be Fibonacced
var fibNumber=256;
//Create an array that will store all the numbers that lead up to the fibNumber
var fibArray=[1,3];
//Create a loop that will store all the values in the fibArray
for (let index = 0; index < fibNumber; index++) 
{
  
        var nextValue=fibArray[index.length-1] + fibArray[index-2];
        fibArray.push(nextValue);
   
    
}
console.log(fibArray);
