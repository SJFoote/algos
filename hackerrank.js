// Advanced algos and data sctructures practice from hacker rank

// given a number add the sum of positive values

// function sigma(n){
//     if ( n == 0){
//         return 0;
//     } else {
//         return n + sigma(n-1);
//     }
// }    

// console.log(sigma(3))



// console.log(sigma(3))s

// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(3);

// *****

// Using recursion, write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).
// For example, factorial(3) = 6 (or 123); factorial(5) = 120 (or 12345).
// For this challenge, do not worry about time-complexity of your code yet.

// function factorial(n) {
//     if (n == 1){
//         return;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// factorial(3)

// ****

// Write a program that reverses a string using recursion. Given the string "freeCodeCamp" your program should return "pmaCedoCeerf".
function reverse(str){

    if (str.length == 0){
        return str
    } else {
        return str[str.length-1] + reverse(str.substr(0, str.length-1))
    }
}

console.log(reverse('freeCodeCamp'))
// console.log(reverse('freeCodeCamp'))

// ****

// Write a program that returns the number of times a character appears in string. Your program should receive a string and the character. It should then return number of times the character appears in the string.
// Given the string "JavaScript" and a character "a", your program should return 2.

// Hint: Try to figure out when you want the function to stop calling itself and how to return a smaller version of the problem every time the function calls itself.