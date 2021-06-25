from shop.filters import ArticleFilter
from shop.models import Article
from shop.serializers import ArticleSerializer
from rest_framework.viewsets import ModelViewSet


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filterset_class = ArticleFilter
