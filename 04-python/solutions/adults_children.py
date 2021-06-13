from pprint import pprint

# Import the users list from `data.py`:
import data


def group_by_age(users):
    result = {"adults": [], "children": []}
    for user in users:
        if user["age"] < 18:
            result["children"].append(user)
        else:
            result["adults"].append(user)
    return result


# See https://docs.python.org/3/library/json.html
pprint(group_by_age(data.users))
