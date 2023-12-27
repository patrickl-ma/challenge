from django.http import HttpResponse
from django.http import JsonResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
from .models import Comment
import json

@csrf_exempt
def index(request):
    if (request.method == "GET"):
        data = list(Comment.objects.values())
        return JsonResponse(data, safe=False)
    elif (request.method == "POST"):
        newComment  = Comment()
        newComment.save()
        return HttpResponse(status=200)

@csrf_exempt
def comment(request, commentId):
    commentObj = Comment.objects.get(pk=commentId)
    if (request.method == "GET"):
        data = {"id": commentObj.id, "author": commentObj.author, "text": commentObj.text, "date": commentObj.date,
                "likes": commentObj.likes, "image": commentObj.image}
        return JsonResponse(data, safe=False)
    elif (request.method=="POST"):
        newText = json.loads(request.body.decode('utf8'))['text']
        commentObj.text = newText
        commentObj.save()
        return HttpResponse(status=200)
    elif (request.method=="DELETE"):
        commentObj.delete()