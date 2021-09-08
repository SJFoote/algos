
# def greaterThanSecond(arr):
#     if len(arr) < 2:
#         return False

#     newArr = []
#     for i in range(0, len(arr), 1):
#         if i < 1 or i >= 2:
#             newArr.append(arr[i])

#     return newArr

# # test cases
# print(greaterThanSecond([1, 3, 5, 7]))
# print(greaterThanSecond([0, -3, 2, 5]))
# print(greaterThanSecond([0, 1, 2, -5]))
# print(greaterThanSecond([]))
# print(greaterThanSecond([2]))


# def printXtoY(x, y):
#     for i in range(x, y, 1):
#         print(i)


# printXtoY(1,10)

# printXtoY(10,20)

# printXtoY(-20,-10) 


# def freq(string):
#     values = []
#     for i in range(0, len(string), 1):
#         if string[i] in values:
#             values += values
#         else:
#             values = 1
#     return values

# print(freq('hello hello'))
