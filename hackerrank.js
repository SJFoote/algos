// Advanced algos and data sctructures practice from hacker rank

// given a number add the sum of positive values
var num = 0;

function sigma(n){
    num = num + n;
    if (n > 0){
        sigma(n-1);
    }
    return num;
}    

console.log(sigma(10))



// console.log(sigma(3))

// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(3);

