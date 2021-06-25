from django_filters import FilterSet
from shop.models import Article


class ArticleFilter(FilterSet):

    class Meta:
        model = Article
        fields = ['category']
