// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

// function reverse(arr) {
//     var temp = 0
//     for (var i = 0; i < arr.length/2; i++) {
//         temp = arr[i]
//         arr[i] = arr[arr.length-i-1]
//         arr[arr.length-i-1] = temp
//     }
//     return console.log(arr)  
// }

// reverse([5,8,10,4,2])


// // Rotate
// // Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// // change the array to [3,1,2]. Don't use built-in functions.
// // Second: allow negative shiftBy (shift L, not R).
// // Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// // Fourth: minimize the touches of each element.copy

// function rotate(arr, shift) {
    
// }


// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.copy


// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].


// linked lists practice
// const list = {
//     head: {
//         value: 6,
//         next: {
//             value:10,
//             next: {
//                 value: 12,
//                 next: null
//             }
//         }
//     }
//     }

class ListNode {
    constructor(value) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)

console.log(list.head)