from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=200)
    content= models.TextField()
    category = models.CharField(max_length=30) #카테고리명
    created_at = models.DateTimeField(auto_now_add=True)  #만든 시간

    def __str__(self):
        return self.title
    