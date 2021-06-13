from random import randint, sample, shuffle
import string

# See https://www.erklär-mir-mal.ch/2021-1/09-03-more-on-python.html#/4/0/0

letters = string.ascii_lowercase + string.ascii_uppercase
digits = string.digits
special_chars = '_-'


def generate_password_constrained2():
    size = randint(10, 20)
    n_digits = randint(1, len(digits))
    password = sample(letters, size - n_digits) + \
        sample(digits, n_digits - 1) + \
        sample(special_chars, 1)
    shuffle(password)
    return "".join(password)


print(generate_password_constrained2())
