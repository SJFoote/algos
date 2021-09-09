// Advanced algos and data sctructures practice from hacker rank

// given a number add the sum of positive values

function sigma(n){
    if ( n == 0){
        return 0;
    } else {
        return n + sigma(n-1);
    }
}    

console.log(sigma(10))



// console.log(sigma(3))s

// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(3);

