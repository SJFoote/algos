// console.log('Hello World')

// Big O notation notes
// overarching method to determine the quickest most efficient algorithm to solve a problem
// this is a balance between speed and memory usage and readability
// often readability is sacrificed for the first two

// function addUpTo(n) {
//     let sum = 0;
//     for (let i = 1; i<= n; i++) {
//         sum  += i;
//     }
//     return sum;
// }

// console.log(addUpTo(6))

// function addUpTo(n) {
//     return n * (n+1) / 2;
// }

// console.log(addUpTo(6))

// # analyzing performance of arrays and objects
// when to use objects
// 1. when you don't need order
// when you need fast access/insert and removal
// let instructor = {
//     firstName: 'Kelly',
//     isInstructor: true,
//     favoriteNumbers: [1,2,3,4]
// }

// console.log(Object.keys(instructor))
// console.log(instructor.isInstructor)

// instructor.firstName = 'Spencer'
// instructor.isInstructor = false

// console.log(instructor.firstName)
// instructor.favoriteNumbers = [5,5,5]
// console.log(instructor.isInstructor)
// console.log(instructor.favoriteNumbers)

// #####################################################
// 

// # Problem solving approach
// when you don't know how to solve a problem what 
// are the steps you can take to help you solve the /// problem

// how to you improve?
// 1. devise a plan for solving problems.
// 2. master common problem solving patterns.
//  recipes you can keep that help you solve each ///// algorithm these strategies are adapted from a book by George Polya's book 'How To Solve'
// THE RECIPE
// step 1.Understand the problem, step 2. Explore concrete examples, step 3. Break it down, step 4. Solve/simplify, step 5. Look back and refactor

// STEP 1. Understand the problem
// #ask these questions:
// 1.Can I restate the problem in my own words?
// 2.What are the inputs that go into the problem?
// 3.What are the outputs that should come from the solution to the problem?
// 4.Can the outputs be deteremined from the inputs?
// In other words, do I have enough information to solve the problem?(You may not be able to answer this question until you set about solving the problem.  That's okay it's still worth considering the question at this early stage)
// 5.How should I label the important pieces of data that are part of the problem

// ####################################################
// 

// example
// "Write a function which takes two numbers and returns their sum."
// 1.Can I restate the problem in my own words?
// given two numbers need to add numbers together and return the sum of those two numbers

// 2.What are the inputs that go into the problem?
// We should expect two numbers of variable size.  Additional questions to ask are is it an int, string, float, etc. some languages have upper limit on how large teh numbers can be

// 3.What are the outputs that should come form the solution to the problem?
// There will be one number that is the sum of the two inputs

// 4.Can the outputs be dertermined from the inputs? 
// Yes

// 5.how should i label the important pieces of data that are a part of the problem?

// #####################################################
// 

// STEP 2. CONCRETE EXAMPLES
// start with Simple examples
// progress to more complez examples
// explore examples with empty inputs
// expllore examples with invalid inputs

// ###################################################
// 

// example
// "Write a function which take a string and returns counts of each character in the string"

// step1. do we count spaces, uppercase vs. lowercase?
// charCount('aaaa'); // {a:4}
// charCount('hello'; // {h:1, e:1, l:2})
// charCount('Hello hi')

// step2. explore edge cases to hlep define output
// charCount(''); // empty 'string'


// step3. BREAK IT DOWN.  Write out the steps you are going to take
// talk about the steps you are going to take. throw in "hey do you think that will work", sometimes you can get a little hint.  Do not just start writing without talking through the problem.

// write out skeleton of your function
function charCount(str) {
    // make object to return at end
    // loop over string

    // return object at end
}

// **a lot of the time the problem you are tasked with solving isn't solvable in the given time, but they want to see the process and make sure you have a clear road map on how to get to the final result even if it isn't 100% correct.


