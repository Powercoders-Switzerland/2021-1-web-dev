from django.urls import path
from shop.views import view_article
from shop.views import view_articles


urlpatterns = [
    path('articles/', view_articles),
    path('articles/<int:id>/', view_article),
]
