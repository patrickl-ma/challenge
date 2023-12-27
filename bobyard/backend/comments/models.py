import datetime
import uuid

from django.db import models

class Comment(models.Model):
    id = models.CharField(max_length=100, primary_key=True, default=uuid.uuid4, editable=False)
    author = models.CharField(max_length=100, default="admin")
    text = models.CharField(max_length=1000, default="", blank=True)
    date = models.DateTimeField(default=datetime.datetime.now)
    likes = models.PositiveIntegerField(default=0)
    image = models.CharField(max_length=1000, default="", blank=True)
