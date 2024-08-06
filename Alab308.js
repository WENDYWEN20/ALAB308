// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
// check if n1+n2+n3+n4 add upto 50
const isSum50 = (n1 + n2 + n3 + n4);
console.log(isSum50== 50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) 
console.log(isTwoOdd>=2)

// Check three: no number larger than 25
// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isLess25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isLess25);
// Check four: all unique numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

const isValid = isSum50 && isTwoOdd && !isLess25 && isUnique;

// Finally, log the results.
console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`) 

// Part 1 Math Problems
// Check if all numbers are divisible by 5, Cache the result in a variable.
let isDivide5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5);
console.log(isDivide5==0);
console.log('All numbers are divisible by 5')

// Check if the first number is larger than the last. 
let larger=n1>n4;
console.log(larger);
console.log('the first number is larger than the last number')

// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
let num=(n2-n1)*n3%n4;
console.log('After subtract the first number from the second number, multiply the result by the third number, the remainder of dividing the result by the fourth number is '+ num);


// Part 2 question
// The distance of the trip, in total, is 1,500 miles.
let distance=1500;
// fuel budget of $175.
const budget= 175;
// average cost of fuel is $3 per gallon
const costOfFuel= 3;
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
let speed1=55; 
let mileSpeed1=30;
let speed2=60; 
let mileSpeed2=28;
let speed3=75; 
let mileSpeed3=23;

// How many gallons of fuel will you need for the entire trip is depedent on speed of drive.
let gallonNeedAtSpeed1= distance/mileSpeed1
console.log(gallonNeedAtSpeed1 +' gallons of fuel needed at 55 miles per hour')
let gallonNeedAtSpeed2= distance/mileSpeed2
console.log(gallonNeedAtSpeed2 + ' gallons of fuel needed at 60 miles per hour')
let gallonNeedAtSpeed3= distance/mileSpeed3
console.log(gallonNeedAtSpeed3 + ' gallons of fuel needed at 75 miles per hour')

let budgetAtSpeed1 = gallonNeedAtSpeed1*costOfFuel
console.log(budgetAtSpeed1 + ' dollars needed at 55 miles/hour')
console.log(budgetAtSpeed1<=175)

let budgetAtSpeed2 = gallonNeedAtSpeed2*costOfFuel
console.log(budgetAtSpeed2 + ' dollars needed at 60 miles/hour')
console.log(budgetAtSpeed2<=175)
let budgetAtSpeed3 = gallonNeedAtSpeed3*costOfFuel

console.log(budgetAtSpeed3 + ' dollars needed at 75 miles/hour')
console.log(budgetAtSpeed3<=175)


console.log('With given $175 budget, driving at '+ speed3 + ' miles per hour will be out out budget. We will have enough budget if driving at ' + speed1 + ' or ' + speed2 + " miles per hour")

let hoursAtSpeed1=distance/speed1
let hoursAtSpeed2=distance/speed2
console.log('It takes ' + hoursAtSpeed1 + ' hours to drive at '+ speed1 + ' mile per hour')
console.log('It takes ' + hoursAtSpeed2 + ' hours to drive at '+ speed2 + ' mile per hour')