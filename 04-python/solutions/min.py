def min(numbers):
    # Handle the case when `numbers` is empty.
    if not numbers:
        raise Exception("Empty array")

    # Result keeps track of the minimum number seen.
    result = numbers[0]
    for number in numbers:
        # If current number is smaller than the minimum seen, update `result`.
        if number < result:
            result = number
    return result


print(sum([3, 2, 1]))
