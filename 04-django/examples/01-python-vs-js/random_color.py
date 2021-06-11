import random

colors = ["red", "green", "orange", "pink"];

def randomColor():
        return colors[random.randint(0, len(colors) - 1)]

print(randomColor())
print(randomColor())
