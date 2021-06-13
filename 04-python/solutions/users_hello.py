# Import the users list from `data.py`:
import data


def hello_users(users):
    for user in users:
        print("My name is " + user["first_name"] + " " +
              user["last_name"] + " and I am " + str(user["age"]) + " years old.")


hello_users(data.users)
