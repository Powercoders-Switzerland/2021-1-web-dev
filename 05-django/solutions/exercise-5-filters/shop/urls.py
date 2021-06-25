from shop.views import ArticleViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('articles', ArticleViewSet)
urlpatterns = router.urls
