# frequency counter

def freq(input_string):
    frequencies = {}
    # for i in str1:
    #     if i in value:
    #         value = value + 1

    for char in input_string: 
        if char in frequencies: 
            frequencies[char] += 1
        else: 
            frequencies[char] = 1
    return frequencies

print(freq('lllloo223'))

