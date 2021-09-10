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

function factorial(n) {
    if (n == 1){
        return;
    } else {
        return n * factorial(n - 1);
    }
}

factorial(3)