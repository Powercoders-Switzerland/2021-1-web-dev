import random
import string

special_chars = "-_"
choices = string.ascii_lowercase + \
    string.ascii_uppercase + string.digits + special_chars


def generate_password():
    # See https://docs.python.org/3/library/random.html
    length = random.randint(10, 20)
    chars_list = random.choices(choices, k=length)
    return "".join(chars_list)
