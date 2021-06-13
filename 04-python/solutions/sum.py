def sum(numbers):
    # Accumulate the result in the variable `result`.
    result = 0
    for number in numbers:
        result += number
    return result


print(sum([1, 2, 3]))
