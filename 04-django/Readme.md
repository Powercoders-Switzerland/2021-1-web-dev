---
title: REST Services with Django
---

## Introduction

<!-- todo: -->


## Learning Objectives

- Understand what a REST service is
- Create a simple REST service with Django


## Agenda

- REST
- Django
- Models
- Django REST framework
- Filters


## Resources

- [docs.djangoproject.com](https://docs.djangoproject.com)
- [django-rest-framework.org](https://www.django-rest-framework.org/)
- [django-filter.readthedocs.io](https://django-filter.readthedocs.io/)


## REST

<!-- todo:

- REST
- HTTP Methods
- HTTP Status codes
- URL
- etc.

-->


## Setting up a Python Environment

```
mkdir webservice
cd webservice
python3 -m venv env
env/bin/python --version
env/bin/pip list
env/bin/pip install django
```


## Django

<!-- todo: general description -->
<!-- todo: explain projects and apps -->


## Django Admin

```
env/bin/django-admin --help
env/bin/django-admin startproject --help
env/bin/django-admin startproject webservice .
env/bin/django-admin startapp shop
```


## Typical Structure of a Django Project

![](images/file-structure.png)


## Django Management

```
env/bin/python manage.py --help
env/bin/python manage.py migrate
env/bin/python manage.py createsuperuser
env/bin/python manage.py runserver
```

- Frontend: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- Backend: [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin)


## Exercise 1

- Create a python environment and a django project and app.
- Register your app in the settings.
- Initialize the DB and add a superuser.
- Initialize a git repo and add a gitignore.
- Add a README which explains how to set up the project.


## A Simple REST Service with Django

- In Django, every endpoint has its own view (function or class method)
- Views are mapped to an URL with a route


## Views

```py
from django.http import JsonResponse

def view_article(request):
    return JsonResponse({
        'id': 1,
        'name': 'Screwdriver'
    })
```


## Routing

- shop.urls
```py
from django.urls import path
from shop. views import view_article

urlpatterns = [
    path('articles/1/', view_article),
]
```


## Routing

- webservice.urls
```py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('shop/', include('shop.urls')),
]
```


## Routing

- Routing consists of **patterns**

```py
urlpatterns = [
    path('articles/<int:id>/', view_article),
]
```

```py
def view_article(request, id):
    return JsonResponse({
        'id': id,
        'name': 'Screwdriver'
    })
```


## Request Method

- The method is available through the request as string
```py
def view_article(request, id):
    if request.method == 'GET':
        pass
```

- In this case, we need to disable the CsrfViewMiddleware for POST, PATCH and DELETE


## Parsing JSON

```py
from json import loads

def view_article(request, id):
	data = loads(request.body)
```


## Returning HTTP Status Codes

```py
from django.http import HttpResponseNotAllowed

def view_article(request, id):
	return HttpResponseNotAllowed(['GET', 'POST'])
```


## cURL

```
curl --include \
	 --request POST \
	 --header "Content-Type: application/json" \
	 --data '{"name":"test"}' \
	 http://localhost:8000/shop/articles/
```


## Exercise 2

- Create a simple static REST service.
- Add a GET method for all articles and return some fictional IDs
- Add a POST method for all articles and return the given data and a fictional ID
- Add a GET method for one article and return the ID
- Add a PATCH method for one article and return the ID and the given data
- Add a DELETE method for an article and return the ID
- Return a HTTP 405 for other cases
- Test the views with curl


## Django Models

<!-- todo: Explain the typical flow with requests, transactions, processes and wsgi/asgi -->

```py
from django.db.models import Model
from django.db.models import CharField


class Article(Model):
    name = CharField(max_length=50)
```

Every model gets automatically an auto-incremented id!


## Fields

- **Boolean**: BooleanField
- **Text**: CharField, TextField, EmailField, URLField, UUIDField, FilePathField
- **Numbers**: IntegerField, FloatField, DecimalField
- **JSON**: JSONField
- **Files**: FileField, ImageField
- **Date & Time**: DurationField, DateField, DateTimeField, TimeField
- **Relationships**: ForeignKey, ManyToManyField, OneToOneField


## Querying

```py
Article.objects.create(name=name)

Article.objects.all()
Article.objects.all()[:5]

Article.objects.filter(id=id).get()
Article.objects.filter(id=id).first()

Article.objects.order_by('name').all()[:5]
Article.objects.order_by('-name').all()[:5]

article.name = name
article.save()
article.delete()
```


## Migrations

Djangos migration management is reason alone to chose it! It supports automatical migration script creation and historical models!

```
env/bin/python manage.py makemigrations
env/bin/python manage.py migrate
```

<!-- todo: admin interface? -->
<!-- todo: relationships? -->


## Exercise 3

- Define a database model for the articles
- Create the migration script and migrate the database
- Use the model in the views
- Return a 404 if the article with a given ID does not exist

<!-- todo: let them do something with ordering and filtering? -->
<!-- todo: let them come up with complexer models? -->


## Django Restfamework

<!-- todo: General description REST framework -->
<!-- todo: show Frontend -->
<!-- todo: pip install -r requirements -->
<!-- todo: show how to pin versions -->


## Viewsets

```py
from shop.models import Article
from shop.serializers import ArticleSerializer
from rest_framework.viewsets import ModelViewSet


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
```


## Actions

```py
from shop.models import Article
from shop.serializers import ArticleSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

	@action(detail=True, methods=['post'])
	def restock(self, request, pk=None):
		pass

	@action(detail=False)
	def popular(self, request):
		pass
```


## Serializers

```py
from shop.models import Article
from rest_framework.serializers import HyperlinkedModelSerializer

class ArticleSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Article
        fields = ['id', 'name']
        read_only_fields = ['id']
```


## Routing

```py
from shop.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('articles', ArticleViewSet)
urlpatterns = router.urls
```


## Exercise 4

- Install the Django REST framework
- Add a serializer for your model
- Replace your own views with a viewset


## Filters

<!-- todo: -->


## Exercise 5

- Install django-filter
- Add categories to your model
- Add a filter to your viewset for filtering by category
