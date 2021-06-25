from django.db.models import Model
from django.db.models import CharField


class Article(Model):
    name = CharField(max_length=50)
