from json import loads
from django.http import JsonResponse
from django.http import HttpResponseNotAllowed


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
        return JsonResponse({'ids': [id for id in range(10)]})

    if request.method == 'POST':
        data = loads(request.body)
        data['id'] = 1
        return JsonResponse(data)

    return HttpResponseNotAllowed(['GET', 'POST'])


def view_article(request, id):
    """ Handles GET, PATCH and DELETE requests for a single article.

    curl --include \
        http://localhost:8000/shop/articles/1/

    curl --include \
         --request PATCH \
         --header "Content-Type: application/json" \
         --data '{"name":"test"}' \
         http://localhost:8000/shop/articles/1/

    curl --include \
         --request DELETE \
         http://localhost:8000/shop/articles/1/

    """

    if request.method == 'GET':
        return JsonResponse({'id': id})

    if request.method == 'PATCH':
        data = loads(request.body)
        data['id'] = id
        return JsonResponse(data)

    if request.method == 'DELETE':
        return JsonResponse({'id': id})

    return HttpResponseNotAllowed(['GET', 'PATCH', 'DELETE'])
