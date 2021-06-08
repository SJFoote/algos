

// function pushFront(arr, num) {
//     var newArr = [num]
//     for (var i = 0; i < arr.length; i++) {
//         newArr[i+1] = arr[i]
//     }
//     return console.log(newArr)
// }
// pushFront([5, 7, 3, 2, 4], 10)

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
// function popFront(arr) {
//     var num = 0
//     var newArr = []
//     num = arr[0]
//     for(var i = 1; i<=arr.length-1; i++){
//         console.log(arr[i])
//         newArr[i-1] = arr[i]
//     }
//     return console.log(num, newArr)  
// }
// popFront([4,8,9,3])


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
// function insertAt(arr, index, value) {
//     arr[index] = value
//     console.log(arr)
// }

// insertAt([4,8,9,3], 3, 999)


// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
// function removeAt(arr, index) {
//     var num = 0
//     var newArr = []
//     num = arr[index]
//     for(var i = 0; i<=arr.length-1; i++){
//         if(arr[i] != num){
//         console.log(arr[i])
//         newArr[i] = arr[i]
//         }
//         if(arr[i] == num){
//             newArr[i] = arr[i]
//             newArr.pop()
//         }
//     }
//     return console.log(num, newArr)  
// }
// removeAt([4,8,9,3],2)


// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.func
// function swap(arr) {
//     var temp = 0
//     for (var i = 0; i<=arr.length-1; i++) {
//             temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             i += 1
//         // use temp variable to store the first index value, then swap.  Add an additional index to i so that it skips the second value and swaps
//     }return console.log(arr)
// }
// swap([4,8,9])

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
function duplicates(arr){
    var newArr
    for (var i = 0; i <=arr.length-1; i++){
        if( arr[i] == arr[i+1]){
            // push values to new array to eliminate duplicates
        }
    }
}

// Second: Solve this without using any nested loops.