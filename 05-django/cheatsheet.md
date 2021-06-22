# Django commands cheat sheet

## Open your project directory

```
cd [my-project-dir]
```

## Create a virtual environnement

A [_virtual environment_](https://docs.python.org/3/tutorial/venv.html) enables you to manage and store all the _dependencies_ (any code written by others: frameworks, libraries, etc.) that your program needs in a separate folded. You can then install dependencies using the [`pip`]() command (see next section).

```
# Mac
python3 -m venv env

# Windows
py -m venv env
```

**Note:** the `env` folder is similar to the `node_modules` in JavaScript, and `pip` is similar to `npm`.

## Install Django packages

Once you have created the virtual environment, you should install the libraries that we use: [Django](https://www.djangoproject.com/), the [Django Rest Framework](https://www.django-rest-framework.org/) and [Django Filter](https://django-filter.readthedocs.io/en/stable/index.html):

```
# Mac
env/bin/pip install --upgrade pip django djangorestframework django-filter

# Windows
env\Scripts\pip install --upgrade pip django djangorestframework django-filter
```

This will install all required packages, and also update `pip`.

## Generate `requirements.txt`

The `requirements.txt` file is used to save the list of dependencies that you installer. It can be used by anyone to easily install all the dependencies that your project needs:

```
# Mac
env/bin/pip freeze > requirements.txt

# Windows
env\Scripts\pip freeze > requirements.txt
```

**Note:** the `requirements.txt` folder is similar to the `package-lock.json` in JavaScript.

To install the dependencies from an existing `requirments.txt` file, you can use the following command:

```
# Mac
env/bin/pip install -r requirements.txt

# Windows
env\Scripts\pip install -r requirements.txt
```

## Generate Django configuration files

Django uses a number of configuration files. To generate them, you need to run the following commands:

```
# Mac
env/bin/django-admin startproject webservice .
env/bin/django-admin startapp shop

# Windows
env\Scripts\django-admin startproject webservice .
env\Scripts\django-admin startapp shop
```

**Note:** `webservice` and `shop` could be replaced with other names.

## Create the database and a super user

Before you launch your server for the first time, you should create the database and a super user so that you can log in to the administration interface:

```
# Mac
env/bin/python manage.py migrate
env/bin/python manage.py createsuperuser

# Windows
env\Scripts\py manage.py migrate
env\Scripts\py manage.py createsuperuser
```

## Run the server!

Now that everything is setup, you can run the server using the following command:

```
# Mac
env/bin/python manage.py runserver

# Windows
env\Scripts\py manage.py runserver
```

## Update the database

If you make any change to your `models.py` file, then the database will need to be updated (_migrated_ in the jargon).

In order to do it, you will first need to stop your development server (using `ctrl+c`), and then to create the migration scripts and apply them using the following commands:

```
# Mac
env/bin/python manage.py makemigrations
env/bin/python manage.py migrate

# Windows
env\Scripts\py manage.py makemigrations
env\Scripts\py manage.py migrate
```

After the that, you can restart your server (see previous section).
