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
// function reverse(str){

//     if (str.length == 0){
//         return str
//     } else {
//         return str[str.length-1] + reverse(str.substr(0, str.length-1))
//     }
// }

// console.log(reverse('freeCodeCamp'))
// console.log(reverse('freeCodeCamp'))

// ****

// Write a program that returns the number of times a character appears in string. Your program should receive a string and the character. It should then return number of times the character appears in the string.
// Given the string "JavaScript" and a character "a", your program should return 2.

// Hint: Try to figure out when you want the function to stop calling itself and how to return a smaller version of the problem every time the function calls itself.

// function count(str) {
//     if (str.length <= 0){
//         return str
//     } else {
//         return str[str.length-1] + count(str.length-1);
//     }
// }


// function count(str) {
//     if(str.length <= 1){
//         return str;
//     }
//     else {
//         return str.charAt(str.length - 1) + count(str.substring(0, str.length - 1));
//     }
// }

// console.log(count('freeCodeCamp'))

// Fibonacci Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).

// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).

// function fib(n){
//     if(n <= 1) {
//         return n;
//     }
//     else {
//         return fib(n-1) + fib(n-2);

//     }
// }

// console.log(fib(3))
// console.log(fib(4))
// console.log(fib(5))

// Summ practice
// Sum all non negative integers

// function sum(n){
//     if(n == 0){
//         return 0;
//     }
//     else {
//         return n + sum(n-1)
//     }
// }

// console.log(sum(4))
// console.log(sum(10))

// more practice!!
// function sum(n){
//     if (n == 0){
//         return 0;
//     }
//     else {
//     } return n + sum(n-1);
// }

// console.log(sum(5))
// 5 + sum(5-1)
// 4 + sum(4-1)
// 3 + sum(3-1)
// 2 + sum(2-1)
// 1 + sum(1-1)
// total == 15

// GRID PATHS
// function grd(n, m){
//     if (n == 1 || m == 1){
//         return 1;
//     }
//     else {
//         return grd(n-1, m) + grd(n, m-1)
//     }
// }

// console.log(grd(2,2))
// console.log(grd(3,3))

// more factorial practice!
// function factorial(n){
//     if (n == 0){
//         return 1;
//     }
//     else {
//         return n * factorial(n-1);
//     }
// }

// console.log(factorial(3))
// 3 * factorial(3-1);
// 2 * factorial(2-1);
// 1 * factorial(1-1);

// Fibonacci practice
// function fib(n){
//     if (n == 0 || n == 1){
//         return 1;
//     }
//     else {
//         return fib(n-1) + fib(n-2);
//     }
// }

// console.log(fib(6))

// **** Key note to remember.  fib(n-1) or any function with (n-1) re-assigns n to a constant.
// **** for example function(n-2)+1, function(4)==> function(4-2)+1, so n == 3
// Would expect:
// fib(3)=
// 3-1 + 3-2
// 2 + 1 = 3
// fib(5)=
// 5-1 + 5-2
// 4+3 

// Zibonacci sequence
// This function borrows ideas from the Fibonacci series, but the calculated results appear to zig and zag, hence the name. A so-called 'Zibonacci' series would be defined by the following rules:

// **Example Zib(0) == 1;
// Zib(1) == 1;
// Zib(2) == 2;
// Zib(2n+1) == Zib(n) + Zib(n-1)+1, if n>0 (i.e. odd values 3 and higher)
// Zib(2n) == Zib(n) + Zib(n+1)+1, if n>1 (i.e. even values 4 and higher).
// Create the Zibonacci(num) function.

// function zib(num){
//     if( num == 1 || num == 0){
//         return 1;
//     }
//     if(num == 2) {
//         return 2;
//     }
//     else if (num % 2 == 0){
//         return zib(num) - 2 + zib(num-1);
//     }
//     else if (num % 3 == 0){
//         return zib(num) - 2 + zib(num-2);
//     }
// }

// console.log(zib(4))
// zib(3) should be:
// 3 + (3-1)+1;



//Solve Fizz Buzz
// The FizzBuzz problem is a classic test given in coding interviews. The task is simple: Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5.
// function fizz(n){
//     for(var i = 0; n; i++){
//         console.log(i);
//         if(i % 3 == 0){
//             console.log(i + 'Buzz')
//         }
//         if(i % 5 == 0){
//             console.log(i + 'Fizz')
//         }
//         if(i % 3 == 0 && i % 5 ==0){
//             console.log('fizzbuzz')
//         }
//     } return ;
// }

// fizz(10)

// arr = [1,3,5];
// sum = arr[0] + arr.length
// console.log(sum)

// Create a function that prints/logs all the even numbers from 4 to 22.
// Have it also return the sum of all the numbers that were printed.
sum = 0
for (var i = 4; i <= 22+1; i++){
    if (i % 2 ==0){
        var sum = i + sum
        console.log(i)
        
    }    
}
console.log(sum)