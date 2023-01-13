console.log("1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.");
let ages = [ 3,9,23,64,2,8,28,93];
console.log(ages);

console.log("1.a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.");
console.log("Do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed!");
console.log([ ages.length-1] - ages [0] );

console.log("1.b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).");
ages.push(90);
console.log([ ages.length-1] - ages [0] );

console.log("1.c. Use a loop to iterate through the array and calculate the average age.");
for( i=0 ; i < ages.length-1 ; i++){
    sum+= ages[i];
   }
   console.log( avg(sum));

console.log("2. Create an array called names that contains the following values: 'Sam' ,'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.");
let names = [ 'Sam' , 'Bob' , 'Tommy' , 'Tim' , 'Buck' , 'Bob'];
console.log(names);

console.log("2.a. Use a loop to iterate through the array and calculate the average number of letters per name. ");
for(i=0;i< names.length-1 ; i++){
    sum+= names.length[i];

}
console.log(sum/2);

console.log("2.b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. ");
for(i=0; i<names.length-1;i++){
    nameCombo= names[i] + " ";
}
console.log(nameCombo);

console.log("3. How do you access the last element of any array?");
console.log("You can access this by accessing the index at an index: arrayName.length - 1.");

console.log("4. How do you access the first element of any array?")
console.log("You can access this element in an array by accessing the index:0.");

console.log("5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");
console.log("For example: namesArray = ["Kelly", "Sam", "Kate"]);
//given this array,nameLengths = [5, 3, 4] //create this new array."
for(i=0;i<names.length-1;i++){
    let nameLengths= names.length[i];
}
console.log(nameLengths);

console.log("6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");
for ( i = 0 ; i < nameLengths. namelength -1 ; i++){
    console.log(sum(nameLengths));
    }
    
console.log("7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).");
function hi ( word,n){
    let input = [word,n];
    console.log (input.concat()*n);
}    

console.log("8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");
function(firstName,lastName){
    return firstName + " "  +lastName;
}    

console.log("9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");
function arrayTime (input){
    if( sum(input) > 100){
    return true;
    }
    }

console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array.");
function pancake(input){
    return avg(input);
    }

    console.log("11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");
    function arrayAverager ( array1 , array2){
        if ( avg(array1) > avg(array2) ){
        return true;
        } 
        
        }


console.log("12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");
function willBuyDrink( isHotOutside , moneyInPocket){
    if (moneyInPocket > 10.50){
    return true;
    }
    }

console.log("13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");
 //My function is to determine if we have a good savingsBalance which is greater than the priceOfCar, then you can get the car. I think it's a good way to allow yourself learn how to spend wisely.
 function canIGoOut( savingsBalance , priceOfCar){
    if ( savingsBalance > price of car ){
    console.log(“You can get the car!”) ;
    }
    }



