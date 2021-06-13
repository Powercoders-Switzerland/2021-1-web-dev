from generate_password import special_chars, generate_password


def contains_digit(password):
    for char in password:
        if char.isdigit():
            return True
    return False


def contains_special_char(password):
    for char in password:
        if char in special_chars:
            return True
    return False


def generate_password_constrained():
    result = generate_password()
    while not contains_digit(result) or not contains_special_char(result):
        result = generate_password()
    return result


print(generate_password_constrained())
