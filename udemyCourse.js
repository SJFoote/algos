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

function addUpTo(n) {
    return n * (n+1) / 2;
}

console.log(addUpTo(6))