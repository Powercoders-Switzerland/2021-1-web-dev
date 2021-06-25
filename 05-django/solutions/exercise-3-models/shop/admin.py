from django.contrib.admin import ModelAdmin, register
from shop.models import Article


@register(Article)
class ArticelAdmin(ModelAdmin):
    pass
