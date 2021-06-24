# Back-end

## How to install

```
# Mac
python3 -m venv env
env/bin/pip install -r requirements.txt
env/bin/python manage.py migrate
env/bin/python manage.py createsuperuser

# Windows
py -m venv env
env\Scripts\pip install -r requirements.txt
env\Scripts\python manage.py migrate
env\Scripts\python manage.py createsuperuser
```

For more details, see the [Django cheat sheet](https://github.com/Powercoders-Switzerland/2021-1-web-dev/blob/main/05-django/cheatsheet.md).

## How to run

```
# Mac
env/bin/python manage.py runserver

# Windows
env\Scripts\python manage.py runserver
```

## How to load demo data

```
# Mac
env/bin/python manage.py loaddata products.json

# Windows
env\Scripts\python manage.py loaddata products.json
```

This assumes a model called `Product` in the app `shop`, with the fields: `title`, `description`, `price`, `image` and `category`.