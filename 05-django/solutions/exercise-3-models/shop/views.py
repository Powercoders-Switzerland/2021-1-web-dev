from json import loads
from django.http import JsonResponse
from django.http import HttpResponseNotAllowed
from django.http import HttpResponseNotFound
from shop.models import Article


def view_articles(request):
    """ Handles GET and POST requests for a collection of articles.

    curl --include \
        http://localhost:8000/shop/articles/

    curl --include \
         --request POST \
         --header "Content-Type: application/json" \
         --data '{"name":"test"}' \
         http://localhost:8000/shop/articles/

    """

    if request.method == 'GET':
        articles = []
        for article in Article.objects.all():
            articles.append({
                'id': article.id,
                'name': article.name
            })
        articles = Article.objects.all()
        return JsonResponse({'articles': articles})

    if request.method == 'POST':
        data = loads(request.body)
        name = data.get('name')
        article = Article.objects.create(name=name)
        return JsonResponse({
            'id': article.id,
            'name': article.name
        })

    return HttpResponseNotAllowed(['GET', 'POST'])


def view_article(request, id):
    """ Handles GET, PATCH and DELETE requests for a single article.

    curl --include \
        http://localhost:8000/shop/articles/1/

    curl --include \
         --request PATCH \
         --header "Content-Type: application/json" \
         --data '{"name":"foo"}' \
         http://localhost:8000/shop/articles/1/

    curl --include \
         --request DELETE \
         http://localhost:8000/shop/articles/1/

    """
    article = Article.objects.filter(id=id).first()
    if not article:
        return HttpResponseNotFound()

    if request.method == 'GET':
        return JsonResponse({
            'id': article.id,
            'name': article.name
        })

    if request.method == 'PATCH':
        data = loads(request.body)
        name = data.get('name')
        article.name = name
        article.save()
        return JsonResponse({
            'id': article.id,
            'name': article.name
        })

    if request.method == 'DELETE':
        article.delete()
        return JsonResponse({'id': id})

    return HttpResponseNotAllowed(['GET', 'PATCH', 'DELETE'])
