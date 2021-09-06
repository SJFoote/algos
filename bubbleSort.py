# for i in range(100):
#     if i % 5 ==0:
#         print('coding')
#     if i %
#     else:
#         print(i)

# for i in range(0, 50+1, 1):
#     var = 0
#     if i % 2 == 0:
#         i
#     else:
#         var += i
#         print(var)

# for i in range(2018, 0, -4):
#     print(i)

# def lowNum(low, high, mult):
#     for i in range(low, high+1, 1):
#         if i % mult == 0:
#             print(i)
#         else:
#             i
# lowNum(2, 9, 3)


# Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
# Example: countdown(5) should return [5,4,3,2,1,0]
# def countDown(num):
#     lst =[]
#     for i in range(num, 0, -1):
#         lst.append(i)
#     return lst

# print(countDown(5))

# Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
# Example: print_and_return([1,2]) should print 1 and return 2
# def pNr(lst):
#     print(lst[0])
#     return lst[1]

# print(pNr([9,11]))

# def bubble(arr):
#     temp = 0
#     var = 0
#     for i in range(0, len(arr), 1):
#         for i in range(0, len(arr), 1):
#             if arr[i] > arr[i+1]:
#                 temp = arr[i]
#                 var = arr[i+1]
#                 print(temp, var)
#                 arr[i+1] = temp
#                 arr[i] = var
#             elif arr[i] < arr[i+1]:
#                 arr[i] = arr[i]


# print(bubble([9,7,8,5,4,1,2,3]))

# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]

# def reverse(arr): #not working, not sure why as it works in python tutor
#     for i in range(len(arr)-1, -1, -1):
#         arr.append(arr[i])
#         var = len(arr)
#     for i in range(var):
#         arr.pop(0)
#         print(arr)
#         return arr

# print(reverse([8,6,5,7]))

# def factorial(num):
#     val = 1
#     arr=[]
#     for i in range(0, num+1, 1):
#         arr.append(i)
#     for i in range(1, len(arr), 1):
#         val = val * arr[i]
#     return val

# print(factorial(8))

# bubble sort practice
# def bubble(arr):
#     for i in range(0, len(arr)-1, 1):
#         # iterate through list, take current value and compare it to the rest of the list
#         for i in range(0, len(arr)-1, 1):
#             # store first value in comp, this is the comparison variable
#             if arr[i] > arr[i+1]:
#                 temp = arr[i+1]
#                 arr[i+1] = arr[i]
#                 arr[i] = temp
#         print(arr)

# bubble([9, 4, 2, 10, 1, 2])

# no use recursion to solve bubble sort!!!!

# def sum(n):
#     if n <= 1:
#         return n
#     print(n)
#     return n + sum(n-1)

# print(sum(3))

# build a recursive function that takes an array and rearranges the numbers back to front

# def backToFront(arr):
#     # define variables needed to store values in function
#     newArr = []
#     #defines the base case for when new array is complete
#     if len(arr) == 0:
#         return newArr
#     # test to see that it is iterating through array
#     print(len(arr)-1)
#     #pops the last value in the array
#     arr.pop(arr[len(arr-1)])
#     #pushes popped value to new array
#     # newArr.append(arr[len(arr)])
#     return backToFront
    
    
# backToFront([1,2,3,4,5])

# Linked List practice

# class SLL:
#     def __init__(self, data):
#         self.data = data
#         self.next = None

# class Node:
#     def __init__(self, data):
#         self.data = data
#         self.next = None

#     def  __repr__(self):
#         self.head = None
        

# class LinkedList(self):
#     def __init__(self):   
#         self.head = None
    
#     def __repr__(self):
#         node = self.head
#         nodes = []
#         while node is not None:
#             nodes.append(node.data)
#             node = node.next
#         nodes.append("None")
#         return " -> ".join(nodes)
        

# class Node:
#     def __init__(self, data):
#         self.data = data
#         self.next = None

# class LinkedList:
#     def __init__(self):
#         self.head = None

#     def printList(self):
#         temp = self.head
#         while(temp):
#             print(temp.data)
#             temp = temp.next

# if __name__=='__main__':
#     llist = LinkedList()

#     llist.head = Node(1)
#     second = Node(2)
#     third =  Node(3)

#     llist.head.next = second;
#     second.next = third;

# list1 = Node(4)

# print(list1)


#quick sort, merge sort, topological sort, counting sort
def swap(a, b):
    temp = a
    a = b
    b = temp

#quick sort example
arr = [50, 23, 9, 18, 61, 32]
def quick(arr):
    pivot = arr[len(arr)-1]
    for i in range(len(arr)-1):
        if arr[i] < pivot:
            swap(arr[i],pivot)

    return arr

print(quick(arr))
